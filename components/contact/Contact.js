import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import Marker from "../map/Marker";
import Map from "../map/Map";
import styles from "./Contact.module.css";

const Contact = () => (
  <section id="contact" className={styles.section}>
    <div className={styles["title-wrapper"]}>
      <h3 className={styles.title}>Contact</h3>
    </div>
    <div className={styles.details}>
      <div className={styles.column}>
        <h4 className={styles["column-title"]}>Farmacia Althaea Bistrița</h4>
        <h5 className={styles["column-subtitle"]}>
          Strada Busuiocului 10, Bistrița
        </h5>
        <p className={styles["column-p"]}>Luni - Vineri: 08:00 - 20:00</p>
        <p className={styles["column-p"]}>Sâmbătă: 09:00 - 14:00</p>
        <p className={styles["column-p"]}>
          Duminică:
          <span className={styles.warning}> închis</span>
        </p>
      </div>
      <div className={styles.column}>
        <h4 className={styles["column-title"]}>Punct farmaceutic Matei</h4>
        <h5 className={styles["column-subtitle"]}>
          Strada Principala 182, Matei
        </h5>
        <p className={styles["column-p"]}>Luni - Vineri: 08:00 - 20:00</p>
        <p className={styles["column-p"]}>
          Sâmbătă:
          <span className={styles.warning}> închis</span>
        </p>
        <p className={styles["column-p"]}>
          Duminică:
          <span className={styles.warning}> închis</span>
        </p>
      </div>
      <div className={styles.column}>
        <h4 className={styles["column-title"]}>Detalii de contact</h4>
        <a href="tel:+40263 341 432" className={styles.link}>
          0263 341 432
        </a>
        <a href="mailto:althaea.farm@yahoo.com" className={styles.link}>
          althaea.farm@yahoo.com
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100064110066395"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Farmacia Althaea
        </a>
      </div>
    </div>
    <a href="tel: 112" className={styles.emergency}>
      În caz de urgență sunați la 112!
    </a>
    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
      <Map center={{ lat: 47.1484344152531, lng: 24.4841723341089 }} zoom={16}>
        <Marker position={{ lat: 47.1484344152531, lng: 24.4841723341089 }} />
      </Map>
    </Wrapper>
  </section>
);

export default Contact;
