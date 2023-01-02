import React from "react";
import styles from "./About.module.css";
import team from "../../data/team.json";
import Card from "../card/Card";

const About = () => (
  <section id="about-us" className={styles.section}>
    <h3 className={styles.title}>Despre noi</h3>
    <section className={styles.subsection}>
      <h4 className={styles.subtitle}>Servicii farmaceutice din 2009</h4>
      <p>
        Infiintata in 2009, farmacia Althaea asigura serviciile farmaceutice
        necesare pentru a garanta asistenţa farmaceutică a populaţiei, cu scopul
        asigurării celui mai bun răspuns la nevoile şi problemele de sănătate
        ale populaţiei în ansamblu şi ale pacientului în mod individual.
      </p>
      <p>
        Serviciile farmaceutice includ eliberarea medicamentelor şi oferirea de
        informaţii privind modul de utilizare a acestora, utilizarea raţională a
        medicamentelor, supravegherea modului de administrare a acestora,
        identificarea şi evitarea efectelor adverse ale medicamentelor,
        asigurarea accesului la medicaţie prin prepararea medicamentelor etc.
        Serviciile farmaceutice sunt parte a sistemului de sănătate şi au ca
        scop îmbunătăţirea stării de sănătate şi creşterea calităţii vieţii
        populaţiei.
      </p>
    </section>
    <h4 className={styles.subtitle}>Echipa noastra</h4>
    <div className={styles.cards}>
      {team.items.map((member) => (
        <Card key={member.name} {...member} />
      ))}
    </div>
  </section>
);

export default About;
