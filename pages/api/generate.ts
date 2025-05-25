// pages/api/generate.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PULIC_GOOGLE_API_KEY! });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: 'Prompt is required' });
  }

  try {
    const contents = [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ];

    const response = await ai.models.generateContentStream({
      model: 'gemini-2.0-flash',
      config: { responseMimeType: 'text/plain' },
      contents,
    });

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Transfer-Encoding', 'chunked');

    for await (const chunk of response) {
      res.write(chunk.text);
    }

    res.end();
  } catch (error: any) {
    console.error('Error in Gemini API:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
