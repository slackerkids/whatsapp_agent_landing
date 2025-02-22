"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  "Полный доступ ко всем функциям",
  "Техническая поддержка 24/7",
  "Отмена в любое время",
];

export function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 md:p-12">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative z-10">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Готовы улучшить коммуникацию с клиентами?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Присоединяйтесь к тысячам компаний, которые уже используют
                  нашего WhatsApp AI агента
                </p>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-muted-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
                <Link
                  href="https://wa.me/77079837010?text=Здравствуйте!%20Пишу%20вам%20с%20вебсайта%20насчет%20подключения%20ии"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="group">
                    Начать
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 p-8">
                  <div className="absolute inset-0 bg-grid-white/10" />
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-4">30%</div>
                      <p className="text-lg text-muted-foreground">
                        Среднее снижение затрат на поддержку клиентов
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
