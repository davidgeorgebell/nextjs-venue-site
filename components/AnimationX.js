import { motion } from 'framer-motion';

export const AnimationX = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0.2 }}
      animate={{ x: 1, opacity: 1 }}
      transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};
