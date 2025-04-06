"use client";
import React, { useState } from "react";
import { 
  Chat, 
  ChatList, 
  ChatMessage, 
  ChatInput,
  ChatMessage as ChatMessageType
} from "@/components/ui/chat";

export default function ChatContainer() {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: "1",
      content: "👋 Привет! Я ваш ИИ-ассистент. Чем я могу вам помочь сегодня?",
      role: "assistant",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    },
    {
      id: "2",
      content: "Мне нужна помощь с настройкой маркетинговой кампании для моего бизнеса.",
      role: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 4), // 4 minutes ago
    },
    {
      id: "3",
      content: "Я буду рад помочь! Не могли бы вы рассказать подробнее о вашем бизнесе и какую маркетинговую кампанию вы хотите создать?",
      role: "assistant",
      timestamp: new Date(Date.now() - 1000 * 60 * 3), // 3 minutes ago
    },
    {
      id: "4",
      content: "Я управляю интернет-магазином, продающим экологически чистые товары. Я хочу создать кампанию для продвижения нашей новой линейки биоразлагаемых кухонных принадлежностей.",
      role: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 2), // 2 minutes ago
    },
    {
      id: "5",
      content: "Отлично! Я проанализирую рыночные тенденции для экологически чистых продуктов и создам маркетинговую стратегию, специально для вашего бизнеса.",
      role: "assistant",
      timestamp: new Date(Date.now() - 1000 * 60 * 1), // 1 minute ago
      toolExecution: {
        tool: "Анализатор рынка",
        status: "running",
      },
    },
    {
      id: "6",
      content: "По результатам моего анализа, я рекомендую сосредоточиться на Instagram и TikTok для вашей кампании, так как экологически сознательные потребители очень активны на этих платформах. Вот проект стратегии кампании:",
      role: "assistant",
      timestamp: new Date(),
      toolExecution: {
        tool: "Анализатор рынка",
        status: "completed",
        result: "Целевая аудитория: 25-40 лет, интересующиеся устойчивым развитием\nПлатформы: Instagram, TikTok\nТворческое направление: Короткие видео с демонстрацией продуктов\nПризыв к действию: 'Покупай экологично, живи чисто' со скидкой 15% на первую покупку"
      },
    },
  ]);

  // Just a placeholder for UI demo - no actual functionality
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Would actually send message here in a real implementation
    console.log("Сообщение будет отправлено здесь");
  };

  return (
    <div className="flex flex-col h-[600px] border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
        <h2 className="text-xl font-bold">ИИ-Ассистент</h2>
        <p className="text-sm opacity-80">Помогаем развивать ваш бизнес</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
        <Chat>
          <ChatList>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </ChatList>
        </Chat>
      </div>

      <form onSubmit={handleSendMessage}>
        <ChatInput />
      </form>
    </div>
  );
} 