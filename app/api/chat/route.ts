import { streamText } from 'ai';
import { xai } from '@ai-sdk/xai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: xai('grok-4'), // 或 grok-4-fast 等，根据免费额度选择
    messages,
  });

  return result.toDataStreamResponse();
}
