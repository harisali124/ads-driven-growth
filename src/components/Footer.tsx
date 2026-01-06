import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-foreground">
              <span className="text-gradient">Meta</span>Ads
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} Meta Ads Specialist. Performance-focused advertising.
          </p>
        </div>
      </div>
    </footer>
  );
};
