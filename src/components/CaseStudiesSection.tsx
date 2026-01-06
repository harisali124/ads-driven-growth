import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, MessageCircle, Users, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "Co-Working Space",
    subtitle: "Low Budget, High Impact",
    platform: "Meta Ads",
    budget: "700 PKR/day (~$2.5)",
    objective: "Leads & Messages",
    icon: MessageCircle,
    metrics: [
      { label: "Budget", value: "~$2.5/day" },
      { label: "Result", value: "Consistent Inquiries" },
      { label: "Focus", value: "Local Targeting" },
    ],
    description:
      "Managed ad campaigns for a local co-working space with an extremely tight budget. Through precise targeting, compelling creatives, and continuous optimization, achieved high engagement and consistent lead flow.",
    outcome: "Proved that strategic execution matters more than big budgets.",
    color: "primary",
  },
  {
    title: "Second-Hand E-commerce",
    subtitle: "Instagram Resale Store",
    platform: "Instagram via Meta Ads",
    role: "Ad Strategist",
    icon: TrendingUp,
    metrics: [
      { label: "Role", value: "Ad Strategist" },
      { label: "Niche", value: "Resale/Thrift" },
      { label: "Focus", value: "Creative Direction" },
    ],
    description:
      "Served as Ad Strategist for an Instagram-based second-hand e-commerce page. Developed creative angles, offer positioning strategies, and audience targeting approaches tailored for impulse-driven buyers.",
    outcome: "Improved engagement and conversion-focused traffic direction.",
    color: "accent",
  },
  {
    title: "High Budget Exposure",
    subtitle: "Enterprise-Level Learning",
    platform: "Meta Ads",
    budget: "$1,500/day",
    icon: Users,
    metrics: [
      { label: "Daily Spend", value: "$1,500" },
      { label: "Learning", value: "Scaling Strategy" },
      { label: "Focus", value: "Campaign Structure" },
    ],
    description:
      "Gained hands-on exposure to ad accounts spending $1,500/day. Learned the intricacies of campaign scaling, budget allocation, and optimization at higher spend levels.",
    outcome: "Strategic understanding of high-budget campaign management.",
    color: "primary",
  },
];

export const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-24 bg-background">
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
              Case Studies
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Results That Speak
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real campaigns, real outcomes. Here's how I've helped businesses 
              achieve their advertising goals.
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-gradient-card border-gradient rounded-2xl p-8 hover:shadow-glow transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left - Title & Icon */}
                  <div className="lg:col-span-1">
                    <div className={`w-14 h-14 rounded-xl ${study.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'} flex items-center justify-center mb-4`}>
                      <study.icon className={`w-7 h-7 ${study.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{study.subtitle}</p>
                    
                    {/* Metrics */}
                    <div className="space-y-3">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{metric.label}</span>
                          <span className={`font-medium ${study.color === 'accent' ? 'text-accent' : 'text-primary'}`}>
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Description */}
                  <div className="lg:col-span-2">
                    <p className="text-secondary-foreground leading-relaxed mb-6">
                      {study.description}
                    </p>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
                      <ArrowUpRight className={`w-5 h-5 mt-0.5 ${study.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                      <div>
                        <span className="text-sm text-muted-foreground">Outcome:</span>
                        <p className="text-foreground font-medium">{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
