import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  TrendingUp, 
  ShoppingBag, 
  Instagram, 
  MessageSquare,
  BarChart3
} from "lucide-react";

const skills = [
  {
    icon: Target,
    title: "Meta Ads",
    description: "Campaign structure, audience targeting, creative testing, and continuous optimization for maximum ROAS.",
  },
  {
    icon: TrendingUp,
    title: "Ad Strategy",
    description: "Audience research, funnel building, and scaling logic to grow campaigns profitably.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Management",
    description: "Store setup, product page optimization, and conversion-focused improvements.",
  },
  {
    icon: Instagram,
    title: "Instagram E-commerce Strategy",
    description: "Catalog-style creatives, offer positioning, and impulse-driven messaging for Instagram shops.",
  },
  {
    icon: MessageSquare,
    title: "Content Strategy",
    description: "Ad messaging, creative angles, and hooks that capture attention and drive action.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven decisions with clear, honest reporting on campaign performance.",
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card/50">
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
              Skills & Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A focused skill set built around Meta Ads, with supporting capabilities 
              in Shopify, content strategy, and e-commerce growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-card border-gradient rounded-xl p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
