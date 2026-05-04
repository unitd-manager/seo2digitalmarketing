import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check, ArrowDown } from "lucide-react";

const pathBItems = [
  "Own high-intent organic positions.",
  "Reduce CAC.",
  "Increase inbound pipeline.",
  "Strengthen authority.",
  "Build defensible growth.",
];

const V2TwoPathsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-4 lg:pt-8 pb-8 lg:pb-12 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
         
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            12 Months From Now <span className="gradient-text"> Two Paths</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Arrow between paths */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={inView ? { opacity: 1, rotate: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center"
            >
              <ArrowDown className="w-5 h-5 text-primary rotate-[-90deg]" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Path A */}
            <motion.div
              initial={{ opacity: 0, rotateY: -10 }}
              animate={inView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl overflow-hidden"
            >
              <div className="bg-destructive/10 px-6 py-3 flex items-center gap-3">
                <X className="w-5 h-5 text-destructive" />
                <span className="font-display font-bold text-foreground">Path A — Status Quo</span>
              </div>
              <div className="bg-card border border-border border-t-0 rounded-b-2xl p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Continue paying rising acquisition costs. 
                </p>
                <div className="mt-6 flex items-center gap-2 text-destructive/70 text-sm">
                  <span>↓</span>
                  <span>Increasing cost, decreasing returns</span>
                </div>
              </div>
            </motion.div>

            {/* Path B */}
            <motion.div
              initial={{ opacity: 0, rotateY: 10 }}
              animate={inView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-lg shadow-primary/10"
            >
              <div className="bg-primary/20 px-6 py-3 flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-display font-bold text-foreground">Path B — Strategic SEO</span>
              </div>
              <div className="bg-card border-2 border-primary/20 border-t-0 rounded-b-2xl p-8">
                <ul className="space-y-4">
                  {pathBItems.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-start gap-3 text-foreground"
                    >
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-display font-bold text-primary">
            SEO isn't a short-term tactic. It's long-term strategic control.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default V2TwoPathsSection;