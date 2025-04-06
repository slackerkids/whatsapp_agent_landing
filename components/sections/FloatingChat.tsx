"use client";
import React, { useState, useEffect } from "react";
import { 
  Chat, 
  ChatList, 
  ChatMessage, 
  ChatInput,
  ChatMessage as ChatMessageType
} from "@/components/ui/chat";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: "1",
      content: "👋 Привет! Я ваш ИИ-ассистент. Чем я могу вам помочь сегодня?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  // Auto-trigger chat after 3 seconds
  useEffect(() => {
    if (!hasTriggered) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasTriggered(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [hasTriggered]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    if (!hasTriggered) {
      setHasTriggered(true);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        content: "Спасибо за ваше сообщение. Я его обрабатываю...",
        role: "assistant",
        timestamp: new Date(),
        toolExecution: {
          tool: "Анализатор",
          status: "running",
        },
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <Button 
          onClick={handleToggleChat}
          className="rounded-full w-14 h-14 shadow-lg bg-blue-600 hover:bg-blue-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex flex-col w-[350px] h-[500px] bg-white dark:bg-gray-900 rounded-lg shadow-xl border overflow-hidden">
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3">
            <h2 className="text-lg font-bold">ИИ-Помощник</h2>
            <Button variant="ghost" size="icon" onClick={handleToggleChat} className="text-white hover:bg-blue-700">
              <X size={18} />
            </Button>
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
            <div className="flex items-center space-x-2 border-t p-3 bg-white dark:bg-gray-900">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 min-h-[40px] max-h-[120px] rounded-md border border-input bg-background p-2 resize-none"
                placeholder="Напишите сообщение..."
              />
              <Button type="submit" size="icon" disabled={!inputValue.trim()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
} 