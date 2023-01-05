import React from "react";
import Image from "next/image";
import styles from "./Homeopathy.module.css";
import homeopathyData from "../../data/homeopathy.json";

const Homeopathy = () => (
  <section id="homeopathy" className={styles.section}>
    <div className={styles.line} />
    <div className={styles["max-width"]}>
      <h3 className={styles.title}>{homeopathyData.title}</h3>
      <section className={styles.subsection}>
        <article className={styles.article}>
          <h3 className={styles["article-title"]}>
            {homeopathyData.sections[0].title}
          </h3>
          <ul>
            {homeopathyData.sections[0].items.map((item) => (
              <li key={item.id} className={styles["article-p"]}>
                {item.text}
              </li>
            ))}
          </ul>
        </article>
        <Image
          className={styles.image}
          src="/homeopathy_1.jpg"
          alt="medicament homeopat"
          width={350}
          height={350}
        />
      </section>
      <section className={styles.subsection}>
        <Image
          className={styles.image}
          src="/homeopathy_2.jpg"
          alt="medicament homeopat"
          width={350}
          height={350}
        />
        <article className={styles.article}>
          <h3 className={styles["article-title"]}>
            {homeopathyData.sections[1].title}
          </h3>
          <ul>
            {homeopathyData.sections[1].items.map((item) => (
              <li key={item.id} className={styles["article-p"]}>
                {item.text}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  </section>
);

export default Homeopathy;
