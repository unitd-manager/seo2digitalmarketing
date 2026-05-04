import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Rocket, ChevronRight } from "lucide-react";

const phases = [
  {
    icon: Zap,
    phase: "Phase 1",
    days: "0–30 Days",
    color: "from-primary/20 to-primary/5",
    items: [
      "Technical bottleneck elimination",
      "Revenue-intent keyword architecture",
      "Quick-impact optimization",
    ],
  },
  {
    icon: Target,
    phase: "Phase 2",
    days: "30–60 Days",
    color: "from-primary/30 to-primary/10",
    items: [
      "Authority acceleration",
      "Strategic content rollout",
      "Competitive gap closure",
    ],
  },
  {
    icon: Rocket,
    phase: "Phase 3",
    days: "60–90 Days",
    color: "from-primary/40 to-primary/15",
    items: [
      "Ranking lift begins",
      "Organic pipeline traction",
      "Conversion alignment",
    ],
  },
];

const V2FrameworkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-4 lg:pt-8 pb-8 lg:pb-12 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            The 90-Day{" "}
            <span className="gradient-text">Visibility Framework™</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't sell "wait and see." We engineer momentum.
          </p>
        </motion.div>

        {/* Staggered vertical timeline */}
        <div className="mt-20 max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/40 to-primary" />

          {phases.map((p, i) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className={`relative mb-16 last:mb-0 md:w-[45%] ${
                i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
              } pl-20 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className={`absolute ${
                i % 2 === 0 ? "left-8 md:left-auto md:-right-[calc(55%/45*100%-8px)] md:right-[-33px]" : "left-8 md:-left-[33px]"
              } top-4 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10`}>
                <p.icon className="w-4 h-4 text-primary" />
              </div>

              <div className={`rounded-2xl p-8 bg-gradient-to-br ${p.color} border border-primary/10 backdrop-blur-sm`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary font-display font-bold text-sm tracking-wider uppercase">
                    {p.phase}
                  </span>
                  <ChevronRight className="w-4 h-4 text-primary/50" />
                  <span className="text-foreground font-display font-bold">
                    {p.days}
                  </span>
                </div>
                <ul className="space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-foreground text-sm">
                      <span className="text-primary mt-0.5 font-bold">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-16 text-sm text-muted-foreground italic"
        >
          We measure leading indicators before lagging ones.
        </motion.p>
      </div>
    </section>
  );
};

export default V2FrameworkSection;