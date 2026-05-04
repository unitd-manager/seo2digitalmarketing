import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, DollarSign, Shield, BarChart3, TrendingDown, Ban, Lock, Coins } from "lucide-react";

const paidProblems = [
  { icon: TrendingDown, text: "CPCs rise." },
  { icon: Ban, text: "Algorithms change." },
  { icon: Lock, text: "Platforms control access." },
  { icon: Coins, text: "You build no equity." },
];

const seoBenefits = [
  { icon: TrendingUp, text: "It compounds." },
  { icon: DollarSign, text: "It lowers CAC." },
  { icon: Shield, text: "It strengthens brand authority." },
  { icon: BarChart3, text: "It increases margin over time." },
];

const V2InfrastructureSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-4 lg:pt-8 pb-8 lg:pb-12 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(40_96%_56%/0.04),transparent_70%)]" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
            Why SEO Wins
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            SEO Is{" "}
            <span className="gradient-text">Market Infrastructure</span>
          </h2>
        </motion.div>

        {/* VS layout */}
        <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 max-w-5xl mx-auto items-stretch">
          {/* Paid - left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 bg-card border border-destructive/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/60 to-transparent" />
            <h3 className="font-display font-bold text-xl text-foreground mb-2">Paid Acquisition</h3>
            <p className="text-sm text-destructive font-medium mb-6">Paid acquisition is volatile.</p>
            <ul className="space-y-5">
              {paidProblems.map((item, i) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-muted-foreground font-medium">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* VS divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-display font-bold text-primary text-lg">
              VS
            </div>
          </motion.div>

          {/* SEO - right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl p-8 bg-card border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
            <h3 className="font-display font-bold text-xl text-foreground mb-2">SEO Infrastructure</h3>
            <p className="text-sm text-primary font-medium mb-6">When built correctly:</p>
            <ul className="space-y-5">
              {seoBenefits.map((item, i) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-display font-bold text-primary bg-primary/5 inline-block px-8 py-3 rounded-full border border-primary/10">
            Organic search becomes your most defensible growth channel.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default V2InfrastructureSection;