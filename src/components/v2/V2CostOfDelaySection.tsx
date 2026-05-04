import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ArrowRight } from "lucide-react";

const competitorActions = [
  "Expand keyword coverage.",
  "Increase domain authority.",
  "Lock in top positions.",
  "Capture demand before you.",
];

const V2CostOfDelaySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-4 lg:pt-8 pb-8 lg:pb-12 relative overflow-hidden" ref={ref}>
      {/* Full-width dark accent band */}
      <div className="absolute inset-0 bg-gradient-to-r from-card via-background to-card" />
      {/* Animated clock background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/5 opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-primary/10 opacity-20" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
              Urgency
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            The Cost of{" "}
            <span className="gradient-text">Strategic Delay</span>
          </h2>
        </motion.div>

        {/* Horizontal timeline style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <p className="text-center text-muted-foreground text-lg mb-12">
            Every month you postpone SEO, your competitors:
          </p>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary" />

            {competitorActions.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-primary font-display font-bold text-lg">{i + 1}</span>
                </div>
                <p className="text-foreground font-medium text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
            <p className="text-foreground font-medium mb-2">
              SEO is cumulative. Late entry requires exponentially more effort.
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <ArrowRight className="w-5 h-5 text-primary" />
              <span className="text-primary font-display font-bold text-lg">
                Early entry compounds advantage.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default V2CostOfDelaySection;