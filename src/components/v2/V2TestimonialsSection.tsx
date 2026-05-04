import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "420% organic growth in 6 months. They paid for themselves in week two.",
    name: "Sarah Chen",
    role: "CMO",
    metric: "420%",
    metricLabel: "Growth",
  },
  {
    quote: "They built a sustainable SEO engine.",
    name: "Marcus Johnson",
    role: "Founder",
    metric: "3x",
    metricLabel: "Pipeline",
  },
  {
    quote: "Transparent. Data-driven. Exceptional.",
    name: "Emily Rodriguez",
    role: "VP Marketing",
    metric: "92%",
    metricLabel: "Retention",
  },
];

const V2TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="pt-4 lg:pt-8 pb-8 lg:pb-12 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
            Client Success
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Results That{" "}
            <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative group"
            >
              {/* Metric badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                className="absolute -top-6 right-6 z-10"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex flex-col items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-primary-foreground font-display font-bold text-sm">{t.metric}</span>
                  <span className="text-primary-foreground/70 text-[10px]">{t.metricLabel}</span>
                </div>
              </motion.div>

              <div className="rounded-2xl p-8 pt-12 bg-card border border-border group-hover:border-primary/20 transition-colors h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <p className="text-foreground text-lg leading-relaxed mb-6 flex-1 italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default V2TestimonialsSection;