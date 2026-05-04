import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, XCircle } from "lucide-react";

const painPoints = [
  { text: "Traffic without pipeline.", icon: XCircle },
  { text: "Vanity metrics.", icon: XCircle },
  { text: "Delayed ROI.", icon: XCircle },
  { text: "Flat growth.", icon: XCircle },
];

const V2TruthSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-4 lg:pt-8 pb-8 lg:pb-12 relative overflow-hidden" ref={ref}>
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-card skew-x-[-6deg] origin-top-right translate-x-20" />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - heading & intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
             <span className="gradient-text">
                The Truth About SEO
              </span> Most Agencies{" "}
              <span className="gradient-text">Won't Say This</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Enterprise brands hesitate on SEO for one reason:{" "}
              <span className="text-foreground font-bold text-xl">Uncertainty.</span>
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You've seen the decks. The ranking guarantees. The 6–12 month timelines. And you've likely experienced:
            </p>
          </motion.div>

          {/* Right - pain points as stacked cards */}
          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, x: 40, rotateZ: 2 }}
                animate={inView ? { opacity: 1, x: 0, rotateZ: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="flex items-center gap-4 bg-destructive/5 border border-destructive/20 rounded-xl px-6 py-5 backdrop-blur-sm"
              >
                <point.icon className="w-5 h-5 text-destructive shrink-0" />
                <span className="text-foreground font-medium text-lg">{point.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-8 py-4">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xl font-display font-bold text-foreground">
              The problem isn't SEO. It's{" "}
              <span className="text-primary">misaligned execution.</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default V2TruthSection;