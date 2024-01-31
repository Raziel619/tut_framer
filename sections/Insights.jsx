"use client";

import { InsightCard, TitleCard, TitleText, TypingText } from "../components";

import { insights } from "../constants";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about Metaverse" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
