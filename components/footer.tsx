import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-center gap-1 border-t border-zinc-900 bg-black p-6 text-zinc-600 text-sm md:justify-start">
      <motion.div variants={itemVariants}>
        Micromanager App &copy; {new Date().getFullYear()}
      </motion.div>
    </motion.div>
  );
}
