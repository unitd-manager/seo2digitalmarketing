import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const V2FinalCTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="pt-4 lg:pt-8 pb-8 lg:pb-12 relative overflow-hidden" ref={ref}>
      {/* Multi-layer glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(40_96%_56%/0.1),transparent_60%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
              Ready to Own Page One?
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Let's Talk{" "}
            <span className="gradient-text">Growth</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-4 max-w-xl mx-auto">
            Get a complimentary SEO audit and revenue projection roadmap.
          </p>
          <p className="text-sm text-muted-foreground mb-10">
            No fluff. No obligation. Just clarity.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="glow-button inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 rounded-full text-lg font-bold"
          >
            Claim My Free Audit
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>

          <p className="text-sm text-muted-foreground mt-8">
            Free consultation · No commitment · Results guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default V2FinalCTASection;