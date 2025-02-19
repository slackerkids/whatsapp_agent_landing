"use client";
import { motion } from "framer-motion";

const stats = [
  {
    number: "30%",
    label: "Снижение затрат на поддержку"
  },
  {
    number: "24/7",
    label: "Доступность сервиса"
  },
  {
    number: "90%",
    label: "Автоматизация типовых запросов"
  },
  {
    number: "2M+",
    label: "Обработанных сообщений"
  }
];

export function Stats() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 