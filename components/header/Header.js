import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import menu from "../../data/menu.json";
import styles from "./Header.module.css";

const DesktopHeader = () => {
  return (
    <header className={styles.header}>
      <div className="max-width">
        <Link href="/">
          <Image
            width={235}
            height={30}
            src="/logo.png"
            alt="Logo Farmacia Althaea"
            priority
          />
        </Link>
        <nav>
          <ul className={styles["header-items"]}>
            {menu.items.map((item) => (
              <li className={styles["header-item"]} key={item.href}>
                <Link href={item.href} scroll={false}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const MobileHeader = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setIsHamburgerOpen((state) => !state);
  }
  return (
    <header className={styles["mobile-header"]}>
      <Link href="/">
        <Image
          width={235}
          height={30}
          src="/logo.png"
          alt="Logo Farmacia Althaea"
          priority
        />
      </Link>
      {isHamburgerOpen && (
        <nav className={styles["mobile-nav"]}>
          <ul className={styles["mobile-header-items"]}>
            {menu.items.map((item) => (
              <li className={styles["mobile-header-item"]} key={item.href}>
                <Link
                  onClick={() => setIsHamburgerOpen(false)}
                  href={item.href}
                  scroll={false}
                >
                  {item.title}
                </Link>
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
    </header>
  );
};

const Header = ({ isMobileView }) => {
  return (
    <>
      {isMobileView && <MobileHeader />}
      {!isMobileView && <DesktopHeader />}
    </>
  );
};

export default Header;
