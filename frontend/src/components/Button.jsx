import { motion } from "framer-motion";
const Button = ({ children, className, ...props }) => (
  <motion.a
    {...props}
    className={`bg-customOrangeLight py-2 px-4 sm:py-4 sm:px-8 rounded-full text-white hover:bg-customOrangeDark transition-all inline-block ${className}`}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.a>
);
export default Button;
