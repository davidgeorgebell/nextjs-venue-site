import { motion } from 'framer-motion';

export const AnimationY = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0.2 }}
      animate={{ y: 1, opacity: 1 }}
      transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};
