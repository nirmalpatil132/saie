import { motion } from "framer-motion";
import { identityStatements } from "@/data/profile";

export function IdentityRow() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
      {identityStatements.map((statement, i) => (
        <motion.div
          key={statement.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative bg-surface p-6 transition-colors duration-300 hover:bg-surface-elevated"
        >
          <p className="font-display text-lg font-semibold text-text-primary transition-colors group-hover:text-accent">
            {statement.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{statement.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
