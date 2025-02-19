"use client";
import { Button } from "@/components/ui/button";
import { MessageSquareText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              WhatsApp AI Агент
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Автоматизируйте общение с клиентами и сократите расходы на поддержку до 30% с помощью искусственного интеллекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Начать бесплатно
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <MessageSquareText className="mr-2 h-4 w-4" />
                Демонстрация
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2 text-primary">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
                Бесплатный пробный период
              </div>
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2 text-primary">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
                Без привязки карты
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 shadow-2xl">
                  <MessageSquareText className="h-16 w-16 text-primary mb-4 animate-float" />
                  <p className="text-lg font-medium">Мгновенные ответы 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 