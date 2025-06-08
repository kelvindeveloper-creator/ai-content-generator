"use client"

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput, UserSubscription as UserSubscriptionTable } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect } from 'react'
import { useRouter } from "next/navigation";
import { HISTORY } from '../history/page';
import { TotalTokensContext } from '@/app/(context)/TotalTokensContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import type { UserSubscription } from '@/app/(context)/UserSubscriptionContext';

function UsageTrack() {
    const { user } = useUser();
    const { totalTokens, setTotalTokens } = useContext(TotalTokensContext);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext) as {
        userSubscription: UserSubscription | null;
        setUserSubscription: React.Dispatch<React.SetStateAction<UserSubscription | null>>;
    };
    const { updateCreditUsage } = useContext(UpdateCreditUsageContext);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            GetData();
            IsUserSubscribe();
        }
        // eslint-disable-next-line
    }, [user]);

    useEffect(() => {
        if (user && updateCreditUsage) {
            GetData();
        }
    }, [updateCreditUsage, user]);

    const GetData = async () => {
        const email = user?.primaryEmailAddress?.emailAddress;
        if (!email) return;
        const rawResult = await db
            .select()
            .from(AIOutput)
            .where(eq(AIOutput.createdBy, email));

        const resultText: HISTORY[] = rawResult.map(item => ({
            id: item.id,
            formdata: item.formdata ?? "",
            aiResponse: item.aiResponse ?? "",
            templateSlug: item.templateSlug,
            createdBy: item.createdBy,
            createdAt: item.createdAt ?? ""
        }));

        GetTotalTokens(resultText);
    };

    const IsUserSubscribe = async () => {
        const email = user?.primaryEmailAddress?.emailAddress;
        if (!email) {
            setUserSubscription({ plan: "free" });
            return;
        }
        const resultText = await db
            .select()
            .from(UserSubscriptionTable)
            .where(eq(UserSubscriptionTable.email, email));
        if (resultText && resultText.length > 0) {
            setUserSubscription({ plan: "pro" }); // or use actual plan info if available
        } else {
            setUserSubscription({ plan: "free" });
        }
    };

    const GetTotalTokens = (resultText: HISTORY[]) => {
        let total = 0;
        resultText.forEach(element => {
            total = total + Number(element.aiResponse?.length || 0);
        });
        setTotalTokens(total);
        console.log(total);
    };

    // Set max tokens based on subscription
    const maxTokens = userSubscription?.plan === "pro" ? 100000 : 10000;
    const percent = Math.min((totalTokens / maxTokens) * 100, 100);

    return (
        <div className='m-5'>
            <div className='bg-purple-500 text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-purple-300 w-full rounded-full mt-3'>
                    <div
                        className='h-2 bg-white rounded-full'
                        style={{
                            width: percent + '%'
                        }}
                    ></div>
                </div>
                <h2 className='text-sm my-2'>
                    {totalTokens}/{maxTokens.toLocaleString()} Credit Used
                </h2>
            </div>
            <Button
                variant={'secondary'}
                className='w-full my-3 bg-purple-500 text-white'
                onClick={() => router.push("/dashboard/billing")}
            >
                Upgrade
            </Button>
        </div>
    );
}

export default UsageTrack;
