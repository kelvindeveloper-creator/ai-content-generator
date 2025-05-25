"use client";

import React, { useContext } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import moment from 'moment';

import { useParams, useRouter } from 'next/navigation';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { TotalTokensContext } from '@/app/(context)/TotalTokensContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

function CreateNewContent() {
  const params = useParams();

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params['template-slug']
  );

  const [loading, setLoading] = React.useState(false);
  const [aiOutput, setAiOutput] = React.useState<string>('');
  const { user } = useUser();
  const router = useRouter();
  const { totalTokens, setTotalTokens } = useContext(TotalTokensContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);

  const GeneratedAiContent = async (formData: any) => {
    if (totalTokens >= 10000) {
      console.log('You have used all your credits. Please upgrade your plan.');
      router.push('/dashboard/billing');
      return;
    }

    setLoading(true);

    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt =
      JSON.stringify(formData) +
      `, ${SelectedPrompt}. Please respond in clean Markdown format without RTF or HTML.`;

    let resultText = '';

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: FinalAIPrompt }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        resultText += decoder.decode(value, { stream: true });
      }

      console.log(resultText); // or set it to state for display
    } catch (error) {
      console.error('Failed to fetch AI content:', error);
    }
    setAiOutput(resultText);
    await SaveInDb(formData, selectedTemplate?.slug, resultText);

    setLoading(false);

    setUpdateCreditUsage(Date.now());
  };

  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    const resultText = await db.insert(AIOutput).values({
      formdata: JSON.stringify(formData),
      templateSlug: slug || '',
      aiResponse: aiResp || '',
      createdBy: user?.primaryEmailAddress?.emailAddress || '',
      createdAt: moment().format('YYYY-MM-DD'),
    });
    console.log(resultText);
  };

  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button className='bg-purple-500'>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GeneratedAiContent(v)}
          loading={loading}
        />

        {/* OutputSection */}
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;