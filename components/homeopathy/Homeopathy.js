import React from "react";
import Image from "next/image";
import styles from "./Homeopathy.module.css";

const Homeopathy = () => (
  <section id="homeopathy" className={styles.section}>
    <div className={styles["max-width"]}>
      <h3 className={styles.title}>Homeopatie</h3>
      <section className={styles.subsection}>
        <article className={styles.article}>
          <h3 className={styles["article-title"]}>CE ESTE HOMEOPATIA?</h3>
          <ul>
            <li className={styles["article-p"]}>
              Homeopatia este o metoda terapeutica destinata ameliorarii starii
              de sanatate a unui organism, prin administrarea unor substante
              diluate si dinamizate, utilizate ca medicamente.
            </li>
            <li className={styles["article-p"]}>
              Homeopatia se bazeaza pe principiul „cui pe cui se scoate”,
              formulat pentru prima data in anul 1796 de medicul german Samuel
              Hahnemann, conform caruia o substanta administrata in doze mici
              poate vindeca o boala generata de folosirea in exces a aceleiasi
              substante.
            </li>
            <li className={styles["article-p"]}>
              Cand va prescrie un tratament, medicul homeopat isi va analiza
              pacientul fizic, mental si emotional. Fiind o terapie holistica,
              unul dintre principiile de baza ale homeopatiei este acela ca
              trateaza persoana ca un intreg, nu doar simptomele.
            </li>
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
          <h3 className={styles["article-title"]}>REMEDIILE</h3>
          <ul>
            <li className={styles["article-p"]}>
              Medicatia homeopata este obtinuta din substante de natura animala,
              vegetala sau minerala, diluate in mod repetat, astfel incat
              elementul chimic original sa fie prezent in cantitati extrem de
              mici, sau chiar absent, in cazul anumitor solutii. Medicamentele
              homeopate stimuleaza vindecarea naturala a organismului, ele nu au
              actiune asupra agentilor patogeni.
            </li>
          </ul>
        </article>
      </section>
    </div>
  </section>
);

export default Homeopathy;
