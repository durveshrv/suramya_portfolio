import { motion } from "framer-motion";
import { styles } from "../styles";
import suramya from "../assets/suramya.jpeg";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-center sm:items-start gap-5`}
      >
        {/* Left Decoration (Hidden on smaller screens) */}
        <div className="flex flex-col justify-center items-center mt-5 hidden sm:flex">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Introduction */}
        <div className="text-center sm:text-left max-w-[75%]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Suramya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Aspiring Data Scientist with a focus on Computer Vision, NLP, and Generative AI.
            I'm driven to deepen my expertise through a Master’s program,
            with a research interest in leveraging machine learning and data science
            to drive advancements in healthcare and create impactful, real world solutions.
          </p>
        </div>

        {/* Image Section with Animation */}
        <div className="sm:ml-5 mt-5 sm:mt-0 w-full sm:w-auto flex justify-center">
          <motion.div
            className="w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={suramya}
              alt="Suramya"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
