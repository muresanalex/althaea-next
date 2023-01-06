import React, { useState } from "react";
import Image from "next/image";
import styles from "./Qa.module.css";
import sections from "../../data/qa.json";

const TabSelector = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className={styles.tabs}>
      <div className={styles["title-section"]}>
        <Image
          src="/questionmark.svg"
          alt="semnul intrebarii"
          width={40}
          height={40}
        />
        <h4>Intrebari frecvente</h4>
      </div>
      {tabs.map((tab) => (
        <button
          className={
            tab.id === selectedTab ? styles["tab-active"] : styles["tab-button"]
          }
          onClick={() => setSelectedTab(tab.id)}
          key={tab.id}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

const MobileTabSelector = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className={styles["mobile-tabs"]}>
      {tabs.map((tab) => (
        <button
          className={
            tab.id === selectedTab
              ? styles["mobile-tab-active"]
              : styles["mobile-tab-button"]
          }
          onClick={() => setSelectedTab(tab.id)}
          key={tab.id}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

const Dropdown = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);
  function toggle() {
    setIsOpen((state) => !state);
  }

  return (
    <div className={styles.dropdown}>
      <button onClick={toggle}>
        {title}
        <Image
          src="/chevron.svg"
          alt="sageata"
          width={20}
          height={20}
          className={isOpen ? styles["chevron-open"] : styles.chevron}
        />
      </button>
      <p className={isOpen ? styles["open-content"] : styles.content}>
        {content}
      </p>
    </div>
  );
};

const Qa = ({ isMobileView }) => {
  const [selectedTab, setSelectedTab] = useState(sections.items[0].id);
  const tabs = sections.items.reduce((acc, item) => {
    acc.push({
      id: item.id,
      title: item.title,
    });
    return acc;
  }, []);
  return (
    <section id="q&a" className={styles.section}>
      <div className={styles.line} />
      <h3>Intrebari frecvente</h3>
      <div className={styles["tab-section"]}>
        {isMobileView && (
          <MobileTabSelector
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        )}
        {!isMobileView && (
          <TabSelector
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        )}
        <div>
          {sections.items
            .find((item) => item.id === selectedTab)
            .qna.map((item, index) => (
              <Dropdown
                key={item.id}
                title={item.question}
                content={item.answer}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
export default Qa;
