// components/ui/SlideTransition.tsx
"use client"
import { motion, AnimatePresence } from "framer-motion"

interface SlideTransitionProps {
  children: React.ReactNode
  id: string          
  direction: 1 | -1   
  duration?: number
  distance?: number
}


export const SlideTransition = ({
  children,
  id,
  direction,
  duration = 0.10,
  distance = 10,
}: SlideTransitionProps) => {
  const customVariants = {
    initial: (dir: number) => ({ opacity: 0, x: dir * distance }),
    animate: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -distance }),
  }

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={id}
        custom={direction}
        variants={customVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}