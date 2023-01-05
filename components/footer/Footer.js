import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import menu from "../../data/menu.json";
import contactData from "../../data/contact.json";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <div className={styles.sections}>
        <h5>Sectiuni disponibile</h5>
        <ul className={styles.list}>
          {menu.items.map((item) => (
            <li key={item.title}>
              <Link href={item.href} scroll={false}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contact}>
        <h5>Date de contact </h5>
        <ul className={styles.list}>
          {contactData.categories[2].items.map((item) => (
            <li key={item.id}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={20}
                height={20}
              />
              {!item.openInNewTab && <a href={item.href}>{item.text}</a>}
              {item.openInNewTab && (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.text}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.hours}>
        <h5>Orar</h5>
        <ul className={styles.list}>
          {contactData.categories[0].items.map((item) => (
            <li key={item.id}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={20}
                height={20}
              />
              <p>
                {item.text}{" "}
                {item.redText && (
                  <span className={styles.error}> {item.redText}</span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.credits}>
        <Link href="/">
          <Image
            width={235}
            height={30}
            src="/logo.png"
            alt="Logo Farmacia Althaea"
          />
        </Link>
        &copy; Farmacia Althaea. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
