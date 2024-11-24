import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { clubs } from "../constants"; // Using clubs data
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

const LeaderCard = ({ index, name, description, image }) => {
  const highlightRole = (text) => {
    // Split the text by colon to separate the role and the rest of the description.
    if (typeof text === "string") {
      const [role, ...rest] = text.split(":");
      return (
        <>
          <span className="text-highlight font-semibold">{role}:</span>
          {rest.join(":")}
        </>
      );
    } else if (Array.isArray(text)) {
      return text.map((item, idx) => {
        const [role, ...rest] = item.split(":");
        return (
          <li key={`desc-${index}-${idx}`}>
            <span className="text-highlight font-bold">{role}:</span>
            {rest.join(":")}
          </li>
        );
      });
    }
    return text;
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.3)}
      className="bg-tertiary p-5 rounded-2xl w-full flex flex-col sm:flex-row items-center"
    >
      <div className="flex-1">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        {Array.isArray(description) ? (
          <ul className="mt-2 text-secondary text-[14px] list-disc list-inside">
            {highlightRole(description)}
          </ul>
        ) : (
          <p className="mt-2 text-secondary text-[14px]">{highlightRole(description)}</p>
        )}
      </div>
      {image && (
        <div className="relative w-full sm:w-[230px] h-[230px] mt-5 sm:mt-0">
          <img
            src={image}
            alt="leader_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      )}
    </motion.div>
  );
};


const Leader = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My</p>
        <h2 className={`${styles.sectionHeadText}`}>
          ExtraCurricular Activities.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following extracurricular activities showcase my skills, dedication,
          and versatility beyond academics. Each activity is briefly described,
          highlighting my ability to engage in diverse pursuits, demonstrate
          leadership, and contribute effectively to various initiatives. These
          experiences reflect my commitment to personal growth and making a
          meaningful impact in different areas.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {clubs.map((club, index) => (
          <LeaderCard key={`leader-${index}`} index={index} {...club} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Leader, "extracurricular");
