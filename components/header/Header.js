import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import menu from "../../data/menu.json";
import styles from "./Header.module.css";

const MOBILE_VIEW_SCREEN_SIZE = 978;

const DesktopHeader = () => {
  return (
    <div className="max-width">
      <Link href="/">
        <Image
          width={235}
          height={30}
          src="/logo.png"
          alt="Logo Farmacia Althaea"
        />
      </Link>
      <nav>
        <ul className={styles["header-items"]}>
          {menu.items.map((item) => (
            <li className={styles["header-item"]} key={item.href}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const MobileHeader = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setIsHamburgerOpen((state) => !state);
  }
  return (
    <>
      <Link href="/">
        <Image
          width={235}
          height={30}
          src="/logo.png"
          alt="Logo Farmacia Althaea"
        />
      </Link>
      {isHamburgerOpen && (
        <nav className={styles["mobile-nav"]}>
          <ul className={styles["mobile-header-items"]}>
            {menu.items.map((item) => (
              <li className={styles["mobile-header-item"]} key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <button onClick={toggleHamburger} className={styles.hamburger}>
        <div
          className={isHamburgerOpen ? styles["bar1-open"] : styles.bar1}
        ></div>
        <div
          className={isHamburgerOpen ? styles["bar2-open"] : styles.bar2}
        ></div>
        <div
          className={isHamburgerOpen ? styles["bar3-open"] : styles.bar3}
        ></div>
      </button>
    </>
  );
};

const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function handleScreenSize() {
      setIsMobileView(window.innerWidth <= MOBILE_VIEW_SCREEN_SIZE);
    }

    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);
    window.addEventListener("orientationchange", handleScreenSize);
    return () => {
      window.removeEventListener("resize", handleScreenSize);
      window.removeEventListener("orientationchange", handleScreenSize);
    };
  }, []);

  return (
    <header className={isMobileView ? styles["mobile-header"] : styles.header}>
      {isMobileView && <MobileHeader />}
      {!isMobileView && <DesktopHeader />}
    </header>
  );
};

export default Header;
