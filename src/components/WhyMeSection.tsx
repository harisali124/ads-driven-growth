import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, 
  Wallet, 
  Target, 
  MessageSquareText, 
  Layers, 
  TrendingUp 
} from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Diverse Business Experience",
    description: "Worked with local service businesses, co-working spaces, and e-commerce brands.",
  },
  {
    icon: Wallet,
    title: "Budget Flexibility",
    description: "Proven ability to perform on very small ($2.5/day) and larger ($1,500/day) budgets.",
  },
  {
    icon: Target,
    title: "Performance-Focused Mindset",
    description: "Every decision is driven by measurable results and ROI improvement.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    description: "Honest reporting and straightforward updates on campaign performance.",
  },
  {
    icon: Layers,
    title: "Strong Meta Ads Fundamentals",
    description: "Deep understanding of campaign structure, targeting, and optimization.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Driven Strategy",
    description: "Focus on strategies that turn ad spend into actual business results.",
  },
];

export const WhyMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">
              Why Work With Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Right Partner for Your{" "}
              <span className="text-gradient">Ad Success</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here's what you get when you choose to work with me on your 
              Meta Ads campaigns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
