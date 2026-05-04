import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Activity, Link, FileText, Settings, MapPin } from "lucide-react";

const services = [
  { icon: Search, title: "Keyword Intelligence", desc: "Uncover untapped opportunities competitors overlook.", accent: "shadow-blue-500/10" },
  { icon: Activity, title: "Performance Audits", desc: "Expose bottlenecks restricting growth.", accent: "shadow-green-500/10" },
  { icon: Link, title: "Authority Building", desc: "Earn placements from high-authority publications.", accent: "shadow-purple-500/10" },
  { icon: FileText, title: "Content Engine", desc: "Scalable, conversion-driven content strategy.", accent: "shadow-orange-500/10" },
  { icon: Settings, title: "Technical SEO", desc: "Core Web Vitals, crawl architecture, schema.", accent: "shadow-cyan-500/10" },
  { icon: MapPin, title: "Local Domination", desc: "Own the map pack in every market.", accent: "shadow-pink-500/10" },
];

const V2ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-4 lg:pt-8 pb-8 lg:pb-12 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(40_96%_56%/0.06),transparent_70%)]" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
            What We Deliver
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Full-Stack SEO for{" "}
            <span className="gradient-text">Ambitious Brands</span>
          </h2>
        </motion.div>

        {/* Bento-grid style layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group rounded-2xl p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-lg ${s.accent} hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default V2ServicesSection;