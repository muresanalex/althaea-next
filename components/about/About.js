import React from "react";
import styles from "./About.module.css";
import team from "../../data/team.json";
import Card from "../card/Card";
import aboutData from "../../data/about.json";

const About = () => (
  <section id="about-us" className={styles.section}>
    <h3 className={styles.title}>{aboutData.items.title}</h3>
    <h4 className={styles.subtitle}>{aboutData.items.subtitle}</h4>
    {aboutData.items.paragraphs.map((paragraph) => (
      <p key={paragraph.id}>{paragraph.text}</p>
    ))}
    <h4 className={styles.subtitle}>{aboutData.items.secondSubtitle}</h4>
    <div className={styles.cards}>
      {team.items.map((member) => (
        <Card key={member.name} {...member} />
      ))}
    </div>
  </section>
);

export default About;
