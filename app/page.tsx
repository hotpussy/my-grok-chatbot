'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <header className="p-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-center">我的 Grok 聊天机器人</h1>
      </header>

      <div className="flex-1 overflow-auto p-4 space-y-4 max-w-3xl mx-auto w-full">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-blue-600' : 'bg-gray-800'}`}>
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && <div className="text-center">Grok 正在思考...</div>}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 max-w-3xl mx-auto w-full">
        <div className="flex gap-2">
          <input
            className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
            value={input}
            onChange={handleInputChange}
            placeholder="输入消息..."
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl disabled:opacity-50"
          >
            发送
          </button>
        </div>
      </form>
    </div>
  );
}
