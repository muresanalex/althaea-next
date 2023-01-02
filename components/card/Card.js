import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ name, title, attributes }) => (
  <div className={styles.card}>
    <Image
      className={styles.image}
      src="/pharmacist.svg"
      alt="ilustratie farmacist"
      width={76}
      height={100}
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.title}>{title}</p>
    <div className={styles.attributes}>
      {attributes.map((attribute) => (
        <p key={attribute}>{attribute}</p>
      ))}
      <div className={styles.divider} />
    </div>
  </div>
);

export default Card;
