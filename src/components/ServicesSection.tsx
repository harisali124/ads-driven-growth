import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Megaphone, 
  Users, 
  ShoppingCart, 
  Instagram, 
  Store, 
  Palette,
  Coins,
  ArrowRight
} from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Megaphone,
    title: "Meta Ads Setup & Management",
    description: "End-to-end campaign setup, management, and optimization on Facebook and Instagram.",
  },
  {
    icon: Users,
    title: "Lead Generation Campaigns",
    description: "Strategic campaigns designed to generate qualified leads for your business.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Ad Strategy",
    description: "Sales-focused advertising strategies for online stores and product businesses.",
  },
  {
    icon: Instagram,
    title: "Instagram Shop & Resale Ads",
    description: "Specialized strategies for Instagram-based stores and second-hand product sellers.",
  },
  {
    icon: Store,
    title: "Shopify Store Management",
    description: "Store setup, product page optimization, and conversion improvements.",
  },
  {
    icon: Palette,
    title: "Creative & Content Direction",
    description: "Ad messaging, creative angles, and hooks that resonate with your audience.",
  },
  {
    icon: Coins,
    title: "Low-Budget Ads Optimization",
    description: "Maximizing results from limited budgets through smart targeting and optimization.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background">
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
              Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How I Can Help You
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From campaign setup to full-scale management, I offer services 
              tailored to your business needs and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-6 rounded-xl border border-border hover:border-primary/30 bg-card/50 hover:bg-gradient-card transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
