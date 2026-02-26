import { useEffect } from "react";
import { Collapse } from "bootstrap";

function Home() {

  useEffect(() => {

    const navbarElement = document.getElementById("navbarResponsive");
    if (!navbarElement) return;

    const bsCollapse = new Collapse(navbarElement, { toggle: false });

    const navLinks = document.querySelectorAll(
      "#navbarResponsive .nav-link"
    );

    const handleClick = () => {
      // Solo cerrar en mobile
      if (window.innerWidth < 992) {
        bsCollapse.hide();
      }
    };

    navLinks.forEach(link =>
      link.addEventListener("click", handleClick)
    );

    return () => {
      navLinks.forEach(link =>
        link.removeEventListener("click", handleClick)
      );
    };

  }, []);



  return (
      <>
<div>
  {/* Navigation*/}
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Javier Paz Zavalia</span>
      <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="..." /></span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Quien Soy</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experiencia</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Educacion</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Conocimientos</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interes</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Clientes</a></li>
      </ul>
    </div>
  </nav>
  {/* Page Content*/}
  <div className="container-fluid p-0">
    {/* About*/}
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Javier
          <span className="text-primary">Paz Zavalia</span>
        </h1>
        <div className="subheading mb-5">
          Pasaje Antartida Argentina 423 · Yerba Buena, CP 4107 · (54 381) 5707891 ·
          <a href="mailto:javier_pazz@hotmail.com">javier_pazz@hotmail.com</a>
        </div>
        <p className="lead mb-5">Ingeniero en Sistemas (FULL-STACK JS) con años de experiencia en Diseño y Desarrollo de Software, Actualmente Desarrollando Soluciones de Automatizacion con IA, superandome día a día, para hacer que las cosas funcionen bien, siendo fáciles e increíbles de usar!!!!!!.</p>
        <div className="social-icons">
          <a className="social-icon" href="https://www.linkedin.com/in/javier-paz-28000575/"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Experience*/}
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Senior Web Developer</h3>
            <div className="subheading mb-3">S·t·u·t·z - Wines</div>
            <p>- (2018) Desarrollo Ecommerce PHP, JAVASCRIPT, MYSQL.
<br />- (2019) Desarrollo Ecommerce NODEJS, REACT, MONGODB, SOCKET IO, MERN.
<br />- (2020) Desarrollo Modulo CRM. MERN , BOOTSTRAP, MAILGUN, CLAUDINARY.
<br />- (2020) Desarrollo Ecommerce Phone App, Delivery/Tracking REACT EXPO.
<br />- (2022) Integración Ecommerce NEST JS, DOCKER.
<br />- (2022) Implementación de MICROSERVICIOS con NESTJ S.
<br />- (2023) Despliegue en AWS ES3, AMPLIFY, EC2, FARGATE.</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">Agosto 2018 - Present</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Senior Web Developer</h3>
            <div className="subheading mb-3">ParfaiTech - Grupo Tecnologico</div>
            <p>- Migracion DB MONGODB a POSTGRES.
<br />- Desarrollo Ecommerce NEST JS, REACT JS, MUI, MICROSERVICIOS.
<br />- Desarrollo Modulo CRM.
<br />- CI/CD -  GOOGLE CLOUD DOCKER KUBERNETES.
            </p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">Agosto 2023 - Julio 2015</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">SSR Web Designer</h3>
            <div className="subheading mb-3">FN Servicios</div>
            <p>- (2020) Desarrollo Ecommerce MERN TYPESCRIPT.
<br />- (2021) Desarrollo Modulo CRM. MERN TYPESCRIPT.
<br />- (2022) Desarrollo Ecommerce NEXT12 TYPESCRIPT, MUI.
<br />- (2022) Migración de MONGODB a POSTGRES.
<br />- (2022) Desarrollo Ecommerce NEXT14 TYPESCRIPT, TAILWIND.
<br />- (2022) Integración Ecommerce NEST JS, PRISMA, DOCKER.
<br />- (2022) Implementación de MICROSERVICIOS con NEST JS.
<br />- (2023) Despliegue en AWS ES3, AMPLIFY, EC2, FARGATE.
            </p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">Agosto 2020 - Marzo 2023</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Ingeniero Jefe de Sistemas</h3>
            <div className="subheading mb-3">LEGUMBRES SACIFIA (Agro-Negocios.)</div>
            <p>Análisis y Desarrollo, en Cobol 400 y Visual Fox, del Sistema de
 Acopio de Cereal, Control de Gestión de Producción Agropecuaria
 y Control de Empaque de Limón.

            </p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">Marzo 1994 - Agosto 2018</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Ingeniero Jefe de Sistemas</h3>
            <div className="subheading mb-3">KUTLY INTERNACIONAL S.A.  Comercializadora y Exportadora de Legumbres y Limones</div>
            <p>Análisis, Desarrollo y Mantenimiento en Visual Fox de Sistema de Transporte, Embarques, Costos de Producción y Exportación, Control de Cuentas Proveedores y Clientes del Exterior.
            </p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">Febrero 1996 - Diciembre 2001</span></div>
        </div>


      </div>
    </section>
    <hr className="m-0" />
    {/* Education*/}
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            {/* <h3 className="mb-0">Universidad Tecnológica Nacional, F.R.T.</h3> */}
            <div className="subheading mb-3">Universidad Tecnológica Nacional, F.R.T.</div>
            <div>Ingeniero en Sistemas de Información</div>
            {/* <p>GPA: 3.23</p> */}
          </div>
          {/* <div className="flex-shrink-0"><span className="text-primary">August 2006 - May 2010</span></div> */}
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            {/* <h3 className="mb-0">Universidad Tecnológica Nacional, F.R.T.</h3> */}
            <div className="subheading mb-3">Universidad Tecnológica Nacional, F.R.T.</div>
            <div>Analista en Sistemas de Información</div>
            {/* <p>GPA: 3.23</p> */}
          </div>
          {/* <div className="flex-shrink-0"><span className="text-primary">August 2006 - May 2010</span></div> */}
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            {/* <h3 className="mb-0">Universidad Tecnológica Nacional, F.R.T.</h3> */}
            <div className="subheading mb-3">ELS Language Centers - C1 Level</div>
            <div>- Santa Barbara - San Francisco -  Nueva York </div>
            {/* <p>GPA: 3.23</p> */}
          </div>
          {/* <div className="flex-shrink-0"><span className="text-primary">August 2006 - May 2010</span></div> */}
        </div>
      </div>

    </section>
    <hr className="m-0" />
    {/* Skills*/}
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Conocimientos</h2>
        <div className="subheading mb-3">Lenguajes &amp; Herramientas</div>

        <ul className="list-inline dev-icons">
          <li className="list-inline-item"><i className="fab fa-html5" /></li>
          <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
          <li className="list-inline-item"><i className="fab fa-js-square" /></li>
          <li className="list-inline-item"><i className="fab fa-react" /></li>
          <li className="list-inline-item"><i className="fab fa-node-js" /></li>
          <li className="list-inline-item"><i className="fab fa-npm" /></li>

  <li className="list-inline-item"><i className="devicon-nodejs-plain" title="Node.js"></i></li>
  <li className="list-inline-item"><i className="devicon-jest-plain" title="Jest"></i></li>
  <li className="list-inline-item"><i className="devicon-nextjs-original" title="Next.js"></i></li>
  <li className="list-inline-item"><i className="devicon-nestjs-plain" title="NestJS"></i></li>

  <li className="list-inline-item"><i className="devicon-typescript-plain" title="TypeScript"></i></li>
  <li className="list-inline-item"><i className="devicon-prisma-original" title="Prisma"></i></li>
  <li className="list-inline-item"><i className="devicon-graphql-plain" title="GraphQL"></i></li>
  <li className="list-inline-item"><i className="devicon-mongodb-plain" title="MongoDB"></i></li>
  <li className="list-inline-item"><i className="devicon-postgresql-plain" title="PostgreSQL"></i></li>

  <li className="list-inline-item"><i className="devicon-amazonwebservices-original" title="AWS"></i></li>
  <li className="list-inline-item"><i className="devicon-docker-plain" title="Docker"></i></li>

  {/* Sin icono oficial → usamos genérico */}
  <li className="list-inline-item"><i className="fas fa-network-wired" title="Microservices"></i></li>
  <li className="list-inline-item"><i className="fas fa-envelope" title="Mailgun"></i></li>
  <li className="list-inline-item"><i className="fas fa-image" title="Cloudinary"></i></li>
  <li className="list-inline-item"><i className="fas fa-project-diagram" title="n8n"></i></li>
  <li className="list-inline-item"><i className="fas fa-brain" title="LLM"></i></li>
  <li className="list-inline-item"><i className="fas fa-lightbulb" title="Prompt Engineering"></i></li>
  <li className="list-inline-item"><i className="fas fa-robot" title="Ollama"></i></li>
  <li className="list-inline-item"><i className="fas fa-database" title="RAG"></i></li>
  <li className="list-inline-item"><i className="fas fa-cogs" title="AI Agents"></i></li>

</ul>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            REACT, NATIVE, NODE, JEST, NEXT, NEST, MICROSERVICIOS, TYPESCRIPT, PRISMA, GRAPHQL, MONGODB, POSTGRES, MAILGUN, CLAUDINARY, AWS, DOCKER, N8N, LLM, SKILL, PROMPT Ollama, RAG, Agentes,.
          </li>
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Mobile-First, Responsive Design
          </li>
        </ul>
      </div>
    </section>
    <hr className="m-0" />
    {/* Interests*/}
    {/* <section className="resume-section" id="interests">
      <div className="resume-section-content">
      <h2 className="mb-5">Interests</h2>
      <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
      <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
      </div>
    </section> */}
    <hr className="m-0" />
    {/* Awards*/}
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Clientes </h2>
        <ul className="fa-ul mb-0">
          <li>
            KUTLY INTERNACIONAL SA - Comercializadora y Exportadora de Legumbres y Limon
          </li>
          <li>
            Legumbres SACIFIA - Produccion y Exportacion Legumbres y Limon
          </li>
          <li>
            Sanda SA - Produccion y Exportacion de Legumbres / Molino.
          </li>
          <li>
            La Teresina - Molino y Alimentos.
          </li>
          <li>
            Julio Pastorino - Agronegocios.
          </li>
          <li>
            EL CARMEN S.A. - Produccion y Comercializacion Naranjas.
          </li>
          <li>
            Ing. Otto Gramajo - Produccion y Comercializacion Azucar y Limon.
          </li>
          <li>
            AZUCARERA CONCEPCIÓN S.A. - Produccion y Comercializacion Azucar.
          </li>
          <li>
            S.A. AZUCARERA J. FRIAS - Agronegocios.
          </li>
          <li>
            LA DONOSA SA - Produccion y Exportacion de Limon.
          </li>
          <li>
            Juan Manuel Poviña - SYNAgro.
          </li>
          <li>
            Grupo El Azul - Grupo empresario Agronegocios.
          </li>
          <li>
            Los Colorados SA - Produccion Agropecuaria.
          </li>





        </ul>
      </div>
    </section>
  </div>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</div>

      </>
  )
}

export default Home
