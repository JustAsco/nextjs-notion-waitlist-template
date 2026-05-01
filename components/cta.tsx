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
          <div className="flex w-fit items-center justify-center rounded-full bg-red-900/30 border border-red-500/30 text-center">
            <AnimatedShinyText className="px-4 py-1 text-red-400">
              <span>You are being watched.</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8">
        <TextBlur
          className="text-center text-4xl font-black tracking-tighter text-white sm:text-6xl uppercase"
          text="The Accountability Coach That Hates Your Excuses."
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <TextBlur
          className="mx-auto max-w-[32rem] pt-4 text-center text-base text-zinc-400 sm:text-lg"
          text="Micromanager App is a merciless, voice-based AI that tracks your schedule, weaponizes your insecurities, and calls you out on your lies. Join the waitlist before it gets banned."
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
