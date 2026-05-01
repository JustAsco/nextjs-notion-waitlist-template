import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 text-center">
            <AnimatedShinyText className="px-4 py-1 text-zinc-300 text-sm tracking-wide uppercase">
              <span>Performance Tracking Active</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/logo.png"
        alt="Micromanager Logo"
        className="mx-auto h-24 w-24 mt-6 opacity-90"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants} className="mt-8">
        <TextBlur
          className="text-center text-4xl font-black tracking-tight text-white sm:text-6xl"
          text="Zero Tolerance For Mediocrity."
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <TextBlur
          className="mx-auto max-w-[32rem] pt-4 text-center text-base text-zinc-400 sm:text-lg"
          text="Micromanager is a voice-based AI built for extreme accountability. It monitors your calendar, calculates your inefficiencies, and calls you directly when you deviate from the plan. No empathy. Just results."
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
