"use client"

import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props{
  aiOutput: string;
}

function OutputSection({aiOutput}:props) {
  const editorRef:any=useRef();
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);
  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-large'>Your Result</h2>
        <Button
  className='bg-purple-500 flex gap-2'
  onClick={() => {
    const editorInstance = editorRef.current.getInstance();
    const html = editorInstance.getHTML();
    navigator.clipboard.write([
      new window.ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([html], { type: "text/plain" }),
      }),
    ]);
  }}
>
  <Copy className='w-4 h-4'/>Copy
</Button>
      </div>
      <Editor
      ref={editorRef}
    initialValue="Hello, world!"
    initialEditType="wysiwyg"
    height="600px"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default OutputSection
