import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Hands-on Meta Ads experience across different business models",
  "Exposure to ad accounts spending up to $1,500/day",
  "Proven results for a co-working space using only 700 PKR/day (~$2.5)",
  "Ad Strategist for second-hand e-commerce Instagram page",
  "Supporting skills in Shopify and content strategy",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium mb-4 block">
                About Me
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Real Experience,{" "}
                <span className="text-gradient">Real Results</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm a Meta Ads Specialist focused on delivering measurable results 
                for businesses of all sizes. From local co-working spaces running on 
                minimal budgets to e-commerce brands scaling their Instagram presence, 
                I've worked across diverse industries and ad spend levels.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My approach is simple: understand your business, craft strategic campaigns, 
                and optimize relentlessly. No buzzwords, no overpromises—just performance-driven 
                advertising that moves the needle for your bottom line.
              </p>
            </motion.div>

            {/* Right Content - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-card border-gradient rounded-2xl p-8"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                What Sets Me Apart
              </h3>
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-secondary-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
