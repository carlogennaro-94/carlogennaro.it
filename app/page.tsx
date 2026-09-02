import Image from "next/image";
import portraitPhoto from "@/public/carlo-gennaro.jpg";
import styles from "./page.module.css";

type Project = {
  slug: string;
  title: string;
  description: string;
  role?: string;
  technologies?: string[];
  caseStudyUrl?: string;
  storeLinks?: {
    appStore?: string;
    googlePlay?: string;
  };
};

const projects: Project[] = [
  {
    slug: "faded-vision",
    title: "Faded Vision",
    description:
      "Applicazione mobile realizzata in Flutter e pubblicata su App Store e Google Play.",
    role: "Sviluppo del prodotto e pubblicazione sugli store",
    technologies: ["Flutter", "Dart"],
    storeLinks: {
      appStore:
        "https://apps.apple.com/it/app/faded-vision/id6760899125",
      // TODO: aggiungere l'URL Google Play quando sarà disponibile.
      googlePlay: undefined,
    },
  },
  {
    slug: "nexo",
    title: "NEXO",
    description: "Piattaforma digitale in fase di evoluzione.",
    // TODO: aggiungere ruolo, tecnologie e link solo quando saranno confermati.
  },
];

const capabilities = [
  {
    title: "Applicazioni web",
    description:
      "Interfacce accessibili e applicazioni pensate per essere chiare, veloci e manutenibili.",
  },
  {
    title: "Applicazioni mobile",
    description:
      "Esperienze mobile curate nei flussi, nelle prestazioni e nei dettagli di piattaforma.",
  },
  {
    title: "Backend e API",
    description:
      "Servizi, integrazioni e flussi di dati affidabili dietro al prodotto.",
  },
  {
    title: "Cloud e Firebase",
    description:
      "Servizi cloud e funzionalità basate su Firebase, costruiti con un approccio pratico.",
  },
  {
    title: "Dalla progettazione al rilascio",
    description:
      "Dalla definizione del lavoro alla pubblicazione, fino alla manutenzione successiva.",
  },
];

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      className={styles.arrow}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M3 8h10m0 0-4-4m4 4-4 4" />
    </svg>
  );
}

function Portrait() {
  return (
    <div className={styles.portrait}>
      <Image
        className={styles.portraitImage}
        src={portraitPhoto}
        alt="Carlo Gennaro"
        fill
        sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 820px) 34vw, 400px"
        preload
      />
    </div>
  );
}

function ScreenshotPlaceholder({ project }: { project: Project }) {
  return (
    <div
      className={styles.screenshotPlaceholder}
      role="img"
      aria-label={`Spazio riservato alle immagini di ${project.title}`}
    >
      <span>{project.title}</span>
      <small>Immagini da inserire</small>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const role = project.role ?? "Da definire";
  const technologies = project.technologies?.length
    ? project.technologies.join(", ")
    : "Da confermare";

  return (
    <article
      className={styles.project}
      id={`progetto-${project.slug}`}
      aria-labelledby={`titolo-${project.slug}`}
    >
      <ScreenshotPlaceholder project={project} />

      <div className={styles.projectContent}>
        <h3 id={`titolo-${project.slug}`}>{project.title}</h3>
        <p>{project.description}</p>

        <dl className={styles.projectMeta}>
          <div>
            <dt>Ruolo</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>Tecnologie</dt>
            <dd>{technologies}</dd>
          </div>
        </dl>

        <div className={styles.projectActions}>
          {project.storeLinks?.appStore && (
            <a
              className={styles.projectLink}
              href={project.storeLinks.appStore}
              target="_blank"
              rel="noreferrer"
            >
              App Store <Arrow />
            </a>
          )}
          {project.storeLinks?.googlePlay && (
            <a
              className={styles.projectLink}
              href={project.storeLinks.googlePlay}
              target="_blank"
              rel="noreferrer"
            >
              Google Play <Arrow />
            </a>
          )}
          {project.caseStudyUrl && (
            <a className={styles.projectLink} href={project.caseStudyUrl}>
              Vedi il progetto <Arrow />
            </a>
          )}
          {!project.storeLinks?.appStore &&
            !project.storeLinks?.googlePlay &&
            !project.caseStudyUrl && (
              <p className={styles.projectPending}>
                Scheda progetto in preparazione
              </p>
            )}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className={styles.skipLink} href="#contenuto">
        Vai al contenuto
      </a>

      <header className={styles.header}>
        <a className={styles.siteName} href="#inizio" aria-label="Torna all’inizio">
          Carlo Gennaro
        </a>

        <nav aria-label="Navigazione principale">
          <a href="#progetti">Progetti</a>
          <a href="#chi-sono">Chi sono</a>
          <a href="#contatti">Contatti</a>
        </nav>
      </header>

      <main id="contenuto">
        <section className={styles.hero} id="inizio" aria-labelledby="hero-title">
          <div className={styles.heroContent}>
            <p className={styles.role}>Carlo Gennaro</p>
            <h1 id="hero-title">Sviluppo applicazioni web e mobile.</h1>
            <p className={styles.heroDescription}>
              Seguo prodotti digitali dall’idea al rilascio: interfacce, backend
              e integrazioni.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#progetti">
                Vedi i progetti
              </a>
              <a className={styles.secondaryAction} href="#contatti">
                Contattami
              </a>
            </div>
          </div>

          <Portrait />
        </section>

        <section
          className={styles.work}
          id="progetti"
          aria-labelledby="work-title"
        >
          <div className={styles.sectionIntro}>
            <h2 id="work-title">Progetti selezionati</h2>
            <p>
              Una selezione di prodotti su cui ho lavorato. Le schede saranno
              completate solo con informazioni e materiali verificati.
            </p>
          </div>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section
          className={styles.about}
          id="chi-sono"
          aria-labelledby="about-title"
        >
          <h2 id="about-title">Chi sono</h2>
          <div className={styles.aboutCopy}>
            <p>
              Sono uno sviluppatore software. Realizzo applicazioni web, mobile
              e servizi backend, con attenzione a tutto ciò che serve per
              portare un prodotto dall’idea al rilascio.
            </p>
          </div>
        </section>

        <section className={styles.capabilities} aria-labelledby="capabilities-title">
          <div className={styles.capabilitiesInner}>
            <h2 id="capabilities-title">Di cosa mi occupo</h2>
            <ul className={styles.capabilityList}>
              {capabilities.map((capability) => (
                <li key={capability.title}>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className={styles.contact}
          id="contatti"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title">Hai un progetto o un’opportunità in mente?</h2>
          <p>
            Scrivimi a{" "}
            <a className={styles.emailLink} href="mailto:info@carlogennaro.it">
              info@carlogennaro.it
            </a>
            .
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          Carlo Gennaro <span aria-hidden="true">·</span> carlogennaro.it{" "}
          <span aria-hidden="true">·</span> © {year}
        </p>
      </footer>
    </>
  );
}
