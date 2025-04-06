import React from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ChatProps {
  className?: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isLoading?: boolean;
  toolExecution?: {
    tool: string;
    status: "running" | "completed" | "failed";
    result?: string;
  };
}

const Chat = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-4", className)}
      {...props}
    />
  );
});
Chat.displayName = "Chat";

const ChatList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-4", className)}
      {...props}
    />
  );
});
ChatList.displayName = "ChatList";

const ChatMessage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    message: ChatMessage;
  }
>(({ className, message, ...props }, ref) => {
  const isUser = message.role === "user";

  return (
    <div
      ref={ref}
      className={cn(
        "flex",
        isUser ? "justify-end" : "justify-start",
        className
      )}
      {...props}
    >
      <div
        className={cn("flex gap-3", isUser ? "flex-row-reverse" : "flex-row")}
      >
        <Avatar>
          <div
            className={cn(
              "h-9 w-9 rounded-full flex items-center justify-center",
              isUser ? "bg-blue-500" : "bg-green-500"
            )}
          >
            {isUser ? "П" : "ИИ"}
          </div>
        </Avatar>
        <div className={cn("flex flex-col")}>
          <Card
            className={cn(
              "max-w-md p-3",
              isUser
                ? "bg-blue-50 dark:bg-blue-900"
                : "bg-white dark:bg-gray-800"
            )}
          >
            <div>{message.content}</div>
            {message.toolExecution && (
              <div className="mt-2 border-t pt-2 text-sm">
                <div className="font-semibold">
                  Инструмент: {message.toolExecution.tool}
                </div>
                <div className="flex items-center gap-2">
                  <div>Статус: {message.toolExecution.status === "running" 
                       ? "выполняется" 
                       : message.toolExecution.status === "completed" 
                         ? "завершено" 
                         : "ошибка"}
                  </div>
                  {message.toolExecution.status === "running" && (
                    <div className="h-3 w-3 animate-pulse rounded-full bg-amber-500"></div>
                  )}
                </div>
                {message.toolExecution.result && (
                  <div className="mt-1 text-xs font-mono bg-gray-100 dark:bg-gray-700 p-1 rounded">
                    {message.toolExecution.result}
                  </div>
                )}
              </div>
            )}
          </Card>
          <div
            className={cn(
              "text-xs text-gray-500 mt-1",
              isUser ? "text-right" : "text-left"
            )}
          >
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </div>
  );
});
ChatMessage.displayName = "ChatMessage";

const ChatInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center space-x-2 border-t p-4 bg-white dark:bg-gray-900",
        className
      )}
      {...props}
    >
      <textarea
        className="flex-1 min-h-[40px] max-h-[120px] rounded-md border border-input bg-background p-2 resize-none"
        placeholder="Напишите сообщение..."
      />
      <Button type="submit" size="icon">
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
  );
});
ChatInput.displayName = "ChatInput";

export { Chat, ChatList, ChatMessage, ChatInput };
