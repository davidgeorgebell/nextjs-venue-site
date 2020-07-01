import { motion } from 'framer-motion';

export const HoverAnimation = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
};
