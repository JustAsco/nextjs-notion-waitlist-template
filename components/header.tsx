import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex justify-center md:justify-start mb-8 md:mb-12 z-[50]">
      <motion.div variants={itemVariants}>
        <div className="text-zinc-100 font-bold tracking-widest text-lg uppercase flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          Micromanager
        </div>
      </motion.div>
    </motion.div>
  );
}
