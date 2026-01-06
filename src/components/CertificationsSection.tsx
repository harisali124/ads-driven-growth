import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, GraduationCap, Clock } from "lucide-react";

const certifications = [
  {
    title: "Shopify Course",
    status: "Completed",
    icon: ShoppingIcon,
    statusColor: "text-primary",
    statusBg: "bg-primary/10",
  },
  {
    title: "Amazon Wholesale FBA Course",
    status: "Completed",
    icon: Award,
    statusColor: "text-primary",
    statusBg: "bg-primary/10",
  },
  {
    title: "Udemy Digital Marketing Course",
    status: "In Progress",
    icon: BookOpen,
    statusColor: "text-accent",
    statusBg: "bg-accent/10",
  },
];

function ShoppingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium mb-4 block">
              Certifications & Learning
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Continuous Growth
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              While practical execution and real campaigns are my core strengths, 
              I'm always expanding my knowledge base.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-card border-gradient rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-3">
                  {cert.title}
                </h3>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm ${cert.statusBg} ${cert.statusColor}`}>
                  {cert.status === "In Progress" && <Clock className="w-3.5 h-3.5" />}
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-muted-foreground mt-8"
          >
            <GraduationCap className="w-5 h-5 inline-block mr-2 text-primary" />
            The best learning comes from running real campaigns and solving real problems.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
