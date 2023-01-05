import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import Marker from "../map/Marker";
import Map from "../map/Map";
import styles from "./Contact.module.css";
import Image from "next/image";
import contactData from "../../data/contact.json";

const Contact = () => (
  <section id="contact" className={styles.section}>
    <div className={styles["title-wrapper"]}>
      <h3 className={styles.title}>Contact</h3>
    </div>
    <div className={styles.details}>
      {contactData.categories.map((category) => (
        <div className={styles.column} key={category.id}>
          <div className={styles.row}>
            <Image
              className={styles.icon}
              src={category.imageSrc}
              alt={category.imageAlt}
              width={20}
              height={20}
            />
            <h4 className={styles["column-title"]}>{category.title}</h4>
          </div>
          {category.subtitle && (
            <h5 className={styles["column-subtitle"]}>{category.subtitle}</h5>
          )}
          <ul className={styles.list}>
            {category.items.map((item) => (
              <li key={item.id}>
                <Image
                  className={styles.icon}
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={20}
                  height={20}
                />
                {!item.href && (
                  <p className={styles["column-p"]}>
                    {item.text}{" "}
                    {item.redText && (
                      <span className={styles.warning}>{item.redText}</span>
                    )}
                  </p>
                )}
                {item.href && !item.openInNewWindow && (
                  <a href={item.href} className={styles.link}>
                    {item.text}
                  </a>
                )}
                {item.href && item.openInNewWindow && (
                  <a
                    href={item.href}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <a href="tel: 112" className={styles.emergency}>
      În caz de urgență sunați la 112!
    </a>
    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
      <Map center={{ lat: 47.14837702405045, lng: 24.4841656642281 }} zoom={16}>
        <Marker position={{ lat: 47.14837702405045, lng: 24.4841656642281 }} />
      </Map>
    </Wrapper>
  </section>
);

export default Contact;
