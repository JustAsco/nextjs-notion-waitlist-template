import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed flex right-0 left-0 justify-between top-0 z-[50] m-6">
      <motion.div variants={itemVariants}>
        <div className="text-zinc-100 font-bold tracking-widest text-lg uppercase flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          Micromanager
        </div>
      </motion.div>
    </motion.div>
  );
}
