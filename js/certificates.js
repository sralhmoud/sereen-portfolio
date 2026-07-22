/* =========================================================
   Sereen Alhmoud — Certificates Rendering
   Cards + Image Lightbox
   ========================================================= */

(function () {

  const certificatesGrid = document.getElementById('certificates-grid');

  if (!certificatesGrid) return;


  /* =========================================
     Certificates Data
     ========================================= */

  const CERTIFICATES = [

    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      date: "2025",
      description:
        "Completed the Artificial Intelligence Fundamentals credential, demonstrating foundational knowledge of artificial intelligence concepts and applications.",
      image: "assets/certificates/ibm-ai-fundamentals.jpg",
      link: "https://www.credly.com/badges/109cf86e-5c9d-46af-b548-e5ae412e6d75/linked_in_profile"
    },


    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft — Elevate Women Empowerment in AI",
      date: "September 19, 2025",
      description:
        "Successfully completed a 5-week Microsoft Azure AI Fundamentals program focused on building foundational knowledge in Artificial Intelligence and Azure AI technologies.",
      image: "assets/certificates/microsoft-azure-ai-fundamentals.jpg",
      link: ""
    },


    {
      title: "Certificate of Participation — IT 312 Web Applications Engineering",
      issuer: "King Saud University",
      date: "May 6, 2024",
      description:
        "Certificate of participation in the First ITers Day, presented by the Information Technology Department at the College of Computer and Information Sciences.",
      image: "assets/certificates/web-applications-engineering.jpg",
      link: ""
    },


    {
      title: "Principles of Data Science",
      issuer: "King Saud University",
      date: "November 27–28, 2024",
      description:
        "Certificate of Appreciation for winning in the Principles of Data Science course during IT Fair 2024.",
      image: "assets/certificates/principles-of-data-science.jpg",
      link: ""
    },


    {
      title: "Creative Designing in Power BI",
      issuer: "Microsoft — Coursera",
      date: "September 7, 2024",
      description:
        "Completed a Microsoft-authorized course focused on creative dashboard design, interactive data visualization, data storytelling, and Power BI.",
      image: "assets/certificates/creative-designing-power-bi.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/QLSJ9F2WUXLB"
    }

  ];


  /* =========================================
     Build Certificate Card
     ========================================= */

  function buildCertificateCard(certificate) {

    const card = document.createElement('article');

    card.className = 'certificate-card glass';

    card.setAttribute('data-reveal', '');

    card.innerHTML = `

      <div class="certificate-image-wrapper">

        <img
          src="${certificate.image}"
          alt="${certificate.title}"
          class="certificate-image"
          loading="lazy"
        >

        <div class="certificate-image-overlay">
          <i class="fa-solid fa-expand"></i>
          <span>Click to enlarge</span>
        </div>

      </div>

      <div class="certificate-content">

        <span class="certificate-issuer">
          <i class="fa-solid fa-award"></i>
          ${certificate.issuer}
        </span>

        <h3 class="certificate-title">
          ${certificate.title}
        </h3>

        <span class="certificate-date">
          <i class="fa-regular fa-calendar"></i>
          ${certificate.date}
        </span>

        <p class="certificate-description">
          ${certificate.description}
        </p>

        ${
          certificate.link
          ? `
            <a
              href="${certificate.link}"
              target="_blank"
              rel="noopener"
              class="certificate-link"
            >
              Verify Credential
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          `
          : ''
        }

      </div>

    `;


    /* =========================================
       Open Image Lightbox
       ========================================= */

    const image = card.querySelector('.certificate-image');

    image.addEventListener('click', function () {
      openLightbox(
        certificate.image,
        certificate.title
      );
    });


    return card;
  }


  /* =========================================
     Lightbox
     ========================================= */

  function openLightbox(imageSrc, title) {

    const lightbox = document.createElement('div');

    lightbox.className = 'certificate-lightbox';

    lightbox.innerHTML = `

      <button
        class="certificate-lightbox-close"
        aria-label="Close certificate"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div class="certificate-lightbox-content">

        <img
          src="${imageSrc}"
          alt="${title}"
        >

      </div>

    `;

    document.body.appendChild(lightbox);

    document.body.classList.add('modal-open');


    /* Animate open */

    requestAnimationFrame(() => {
      lightbox.classList.add('open');
    });


    /* Close button */

    const closeButton =
      lightbox.querySelector('.certificate-lightbox-close');

    closeButton.addEventListener('click', closeLightbox);


    /* Click outside image */

    lightbox.addEventListener('click', function (e) {

      if (e.target === lightbox) {
        closeLightbox();
      }

    });


    /* Escape key */

    document.addEventListener(
      'keydown',
      handleEscape
    );


    function handleEscape(e) {

      if (e.key === 'Escape') {
        closeLightbox();
      }

    }


    function closeLightbox() {

      lightbox.classList.remove('open');

      document.body.classList.remove('modal-open');

      document.removeEventListener(
        'keydown',
        handleEscape
      );

      setTimeout(() => {
        lightbox.remove();
      }, 250);

    }

  }


  /* =========================================
     Render Certificates
     ========================================= */

  CERTIFICATES.forEach(function (certificate) {

    const card =
      buildCertificateCard(certificate);

    certificatesGrid.appendChild(card);

  });


  /* Re-run reveal animation */

  if (window.reobserveReveal) {
    window.reobserveReveal();
  }

})();