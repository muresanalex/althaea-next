import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <main className={styles["content-wrapper"]}>
      <h1>Politica de Confidențialitate</h1>
      <em>Ultima actualizare: 29.01.2024</em>
      <h2>1. Introducere</h2>
      <p>
        Bine ați venit pe www.althaeafarm.ro (&quot;noi&quot;, &quot;website-ul
        nostru&quot;). Respectarea confidențialității vizitatorilor noștri este
        importantă pentru noi, și ne angajăm să protejăm și să respectăm
        confidențialitatea datelor dumneavoastră personale.
      </p>
      <h2>2. Ce date colectăm</h2>
      <p>
        Atunci când utilizați website-ul nostru, putem colecta și prelucra
        următoarele tipuri de date:
      </p>
      <ul>
        <li>
          Informații de identificare personală (nume, adresă de e-mail, etc.) pe
          care le furnizați voluntar atunci când completați formulare sau
          trimiteți mesaje prin intermediul website-ului.
        </li>
        <li>
          Date tehnice, inclusiv adresele IP, informații despre browser și
          sistemul de operare, pentru a îmbunătăți experiența de navigare pe
          website.
        </li>
      </ul>
      <h2>3. Cookie-uri</h2>
      <p>
        Website-ul nostru utilizează cookie-uri pentru a vă oferi o experiență
        online personalizată. Cookie-urile sunt fișiere mici de text stocate pe
        dispozitivul dumneavoastră. Acestea ne ajută să analizăm modul în care
        utilizați site-ul și să furnizăm conținut adaptat intereselor
        dumneavoastră.
      </p>
      <p>Pe website-ul nostru, utilizăm următoarele tipuri de cookie-uri:</p>
      <ul>
        <li>
          **Cookie-uri de sesiune:** Acestea sunt necesare pentru funcționarea
          corectă a site-ului și sunt șterse automat când închideți browser-ul.
        </li>
        <li>
          **Cookie-uri persistente:** Acestea rămân pe dispozitivul
          dumneavoastră pentru o perioadă mai lungă și ne ajută să vă
          recunoaștem atunci când reveniți pe site.
        </li>
        <li>
          **Cookie-uri de performanță:** Utilizăm Google Analytics pentru a
          colecta informații anonime despre modul în care vizitatorii utilizează
          website-ul. Aceste informații ne ajută să îmbunătățim conținutul și să
          optimizăm experiența utilizatorului.
        </li>
        <li>
          **Cookie-uri de publicitate:** Folosim Google Search Console pentru a
          monitoriza performanța căutărilor pe site și pentru a analiza modul în
          care utilizatorii găsesc conținutul.
        </li>
      </ul>
      <h2>4. Cookie-uri Google</h2>
      <p>
        Website-ul nostru utilizează serviciile Google, care pot seta
        următoarele tipuri de cookie-uri:
      </p>
      <ul>
        <li>
          **Google Maps:** Pentru a afișa hărți interactive, Google Maps poate
          utiliza cookie-uri pentru a monitoriza informații despre interacțiunea
          dumneavoastră cu hărțile integrate.
        </li>
        <li>
          **Google Analytics:** Pentru analiza traficului web, Google Analytics
          utilizează cookie-uri pentru a colecta informații anonime despre modul
          în care utilizatorii interacționează cu website-ul.
        </li>
        <li>
          **Google Search Console:** Folosim Google Search Console pentru a
          evalua performanța căutărilor pe site și pentru a obține informații
          despre modul în care Google indexează conținutul nostru.
        </li>
      </ul>
      <h2>5. Folosirea datelor</h2>
      <p>
        Datele colectate sunt utilizate în scopuri interne, inclusiv pentru
        îmbunătățirea serviciilor noastre, personalizarea conținutului și
        analiza modului în care utilizatorii interacționează cu site-ul.
      </p>
      <p>
        Nu vom partaja informațiile dvs. personale cu terțe părți fără
        consimțământul dumneavoastră, cu excepția cazurilor în care suntem
        obligați de lege să o facem.
      </p>
      <h2>6. Link-uri către alte site-uri</h2>
      <p>
        Website-ul nostru poate conține link-uri către alte site-uri care pot
        avea politici de confidențialitate diferite. Vă recomandăm să citiți
        politica de confidențialitate a oricărui site pe care-l vizitați.
      </p>
      <h2>7. Drepturile dumneavoastră</h2>
      <p>
        Conform Regulamentului General privind Protecția Datelor (GDPR), aveți
        dreptul de a accesa, rectifica, șterge sau restricționa prelucrarea
        datelor personale. Pentru a exercita aceste drepturi sau pentru orice
        întrebări privind politica noastră de confidențialitate, vă rugăm să ne
        contactați la adresa{" "}
        <a
          href={"mailto:althaea.farm@yahoo.com"}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          althaea.farm@yahoo.com
        </a>
        .
      </p>
      <h2>8. Actualizări ale politicii de confidențialitate</h2>
      <p>
        Ne rezervăm dreptul de a actualiza periodic această politică de
        confidențialitate pentru a reflecta schimbările în practicile noastre și
        în legislație. Orice actualizare va fi afișată pe această pagină, iar
        data ultimei actualizări va fi modificată.
      </p>
      <p>
        Prin continuarea utilizării website-ului nostru, sunteți de acord cu
        politica noastră de confidențialitate.
      </p>
      <p>Mulțumim pentru vizitarea website-ului nostru!</p>
    </main>
  );
};

export default PrivacyPolicy;
