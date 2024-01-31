import { motion } from "framer-motion";
import ReactPlayer from "react-player";
const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const viewport = {
  amount: 0,
};

const MediaPlayer = ({ url, index }: { url: string; index: number }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 1,
        ease: "easeInOut",
        duration: 1,
      }}
      viewport={viewport}
      className="rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-in-out"
    >
      <ReactPlayer url={url} width="100%" heigh="100%" />
    </motion.div>
  );
};

export default MediaPlayer;
