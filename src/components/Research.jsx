import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { researches } from "../constants";
import { textVariant } from "../utils/motion";
const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
      },
    },
  };
};

const ResearchCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-tertiary p-5 rounded-2xl w-full flex flex-col sm:flex-row items-center"
    >
      <div className="flex-1">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        {description.map((desc, idx) => (
          <p key={`desc-${idx}`} className="mt-2 text-secondary text-[14px]">
            {desc}
          </p>
        ))}
        {source_code_link && (
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mt-5"
          >
            <FiExternalLink className="text-white w-1/2 h-1/2" />
          </div>
        )}
      </div>
      {image && (
        <div className="relative w-full sm:w-[230px] h-[230px] mt-5 sm:mt-0">
          <img
            src={image}
            alt="research_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      )}
    </motion.div>
  );
};

const Research = () => {
  return (
    <>
      <motion.div variants={null}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Publications.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={null}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My Publications demonstrates a strong foundation in research, underscoring my expertise and dedication to make advancements in the field through research based insights and innovations.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {researches.map((research, index) => (
          <ResearchCard key={`research-${index}`} index={index} {...research} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Research, "publication");
