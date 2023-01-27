import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";

const HeroMobile = () => (
  <section>
    <div className={styles["mobile-wrapper"]}>
      <div className={styles["mobile-content"]}>
        <h1>Farmacia Althaea</h1>
        <h2>Alopatie. Homeopatie. Preparate oficinale si magistrale.</h2>
        <Link href="#contact" className={styles.button} scroll={false}>
          Unde ne gasesti
        </Link>
      </div>
    </div>
  </section>
);

const HeroDesktop = () => (
  <section className={styles["hero-section"]}>
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        src="/hero.svg"
        alt="ilustratie farmacie"
        fill
        priority
      />
      <div className="max-width">
        <div className={styles.content}>
          <h1>Farmacia Althaea</h1>
          <h2>Alopatie. Homeopatie. Preparate oficinale si magistrale.</h2>
          <Link href="#contact" className={styles.button} scroll={false}>
            Unde ne gasesti
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Hero = ({ isMobileView }) => (
  <>
    {isMobileView && <HeroMobile />}
    {!isMobileView && <HeroDesktop />}
  </>
);

export default Hero;
