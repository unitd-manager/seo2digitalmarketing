import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const stats = [
  { value: "500+", label: "Clients Worldwide" },
  { value: "12K+", label: "Keywords in Top 10" },
  { value: "340%", label: "Average Traffic Growth" },
];

const V2HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(40_96%_56%/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(40_96%_56%/0.05),transparent_50%)]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="section-container w-full relative">
        {/* Centered hero text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Enterprise SEO Positioning
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 text-foreground">
            We Make Brands{" "}
            <span className="relative">
              <span className="gradient-text">Impossible to Ignore</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-primary to-primary/0 rounded-full"
              />
            </span>{" "}
            Online.
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Organic search isn't traffic. It's pipeline. We've generated over{" "}
            <span className="text-primary font-bold">$200M+ in organic revenue pipeline</span> for brands that refuse to settle.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="glow-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full text-base font-bold"
            >
              Get Your Free Audit
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#results"
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2 border border-border text-foreground px-10 py-4 rounded-full text-base font-medium hover:bg-secondary transition-colors"
            >
              View Case Studies
            </motion.a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className="text-center flex-1"
              >
                <div className="text-4xl lg:text-5xl font-display font-bold text-primary stat-glow mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
            <div className="h-12 w-px bg-border hidden md:block" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-2 bg-primary/10 px-5 py-3 rounded-full"
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-foreground font-semibold text-sm">4.9/5 on Clutch</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Brands */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Trusted by Enterprise Brands Worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-muted-foreground/40 font-display text-lg font-semibold">
            {["Qbotica", "Newme", "Juspredict", "Axyo"].map((brand) => (
              <span key={brand} className="hover:text-muted-foreground transition-colors">{brand}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default V2HeroSection;
