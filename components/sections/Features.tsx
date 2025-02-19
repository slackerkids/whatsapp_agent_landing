"use client";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageCircle, Bot, Shield, Zap, Clock, Users, BrainCircuit, ChartBar } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <MessageCircle className="w-10 h-10 text-primary" />,
    title: "Мгновенные ответы",
    description: "Автоматические ответы на сообщения клиентов в режиме 24/7 с использованием ИИ"
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "GPT интеграция",
    description: "Продвинутые алгоритмы на базе GPT для естественного и контекстного общения"
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Безопасность",
    description: "Шифрование данных и соответствие требованиям конфиденциальности WhatsApp Business API"
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Быстрая интеграция",
    description: "Подключение к WhatsApp Business API за 15 минут без сложных настроек"
  },
  {
    icon: <ChartBar className="w-10 h-10 text-primary" />,
    title: "Аналитика",
    description: "Детальная статистика и отчеты об эффективности автоматизации"
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Масштабируемость",
    description: "Поддержка неограниченного количества чатов с автоматическим распределением нагрузки"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function Features() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Преимущества нашего решения
          </h2>
          <p className="text-xl text-muted-foreground">
            Используйте все возможности WhatsApp Business API с нашим ИИ агентом
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 p-3 rounded-2xl bg-primary/10 w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 