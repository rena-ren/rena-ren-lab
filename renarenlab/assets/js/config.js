/* =============================================================================
   RENA REN LAB — SITE CONFIGURATION  (edit this file to change the whole site)
   -----------------------------------------------------------------------------
   This is the SINGLE SOURCE OF TRUTH for structured content:
     • brand wordmark + tagline
     • the top navigation links
     • the clickable "cells" on the home landscape (which cell -> which page)
     • lab members
     • publications
     • contact details
   Long prose (Research description, Rena's bio) lives inside the matching
   .html files, clearly marked with <!-- EDIT --> comments, so it stays easy
   to find and rewrite.
   ============================================================================= */

window.SITE = {

  /* -------------------------------------------------------------------------
     BRAND  (top-left wordmark)
     ------------------------------------------------------------------------- */
  brand: {
    name: "RENA REN LAB",                                   // wordmark text
    tagline: "Laboratory of Spatial RNA Biology & Technology"
  },

  /* -------------------------------------------------------------------------
     INSTITUTION LOGO  (top-right of the page)
     Replace assets/img/astar-gis-logo.svg with the official transparent PNG/SVG
     from A*STAR GIS to use the real mark. 'alt' is for screen readers.
     ------------------------------------------------------------------------- */
  logo: {
    src: "assets/img/astar-gis-logo.svg",
    alt: "A*STAR Genome Institute of Singapore",
    href: "https://www.a-star.edu.sg/gis"
  },

  /* -------------------------------------------------------------------------
     NAVIGATION  (horizontal links at the top — same order on every page)
     'page' must match the <body data-page="..."> attribute so the active
     link can be highlighted automatically.
     ------------------------------------------------------------------------- */
  nav: [
    { label: "HOME",        href: "index.html",        page: "home" },
    { label: "RESEARCH",    href: "research.html",     page: "research" },
    { label: "LAB MEMBERS", href: "lab-members.html",  page: "members" },
    { label: "PUBLICATION", href: "publications.html", page: "publications" },
    { label: "CONTACT US",     href: "contact.html",      page: "contact" }
  ],

  /* -------------------------------------------------------------------------
     HOME HERO
     'heading' is the large floating line over the cream sky.
     ------------------------------------------------------------------------- */
  hero: {
    heading: "Building next-generation tools to investigate RNA in space and time",
    image: "assets/img/cell-landscape.jpg"
  },

  /* -------------------------------------------------------------------------
     CLICKABLE CELLS  (home page only)
     Each entry turns a region of the cellular landscape into a doorway to a
     page. x / y are PERCENT positions over the artwork (0–100). 'r' is the
     glow radius in px. 'accent' is a CSS variable name used for the hover glow.
     To move a doorway, just change x / y. To point it somewhere else, change
     'page' to any nav page key above (except "home").
     ------------------------------------------------------------------------- */
  cells: [
    { page: "research",     label: "Research",     x: 47, y: 60, r: 70, accent: "--terracotta" },
    { page: "members",      label: "Lab Members",  x: 25, y: 70, r: 64, accent: "--dusty-blue" },
    { page: "publications", label: "Publications", x: 70, y: 80, r: 66, accent: "--sage" },
    { page: "contact",      label: "Contact",      x: 17, y: 82, r: 58, accent: "--plum" }
  ],

  /* -------------------------------------------------------------------------
     LAB MEMBERS  (one per row on the Lab Members page)
     Add a new member by copying a block. 'photo' is optional — leave "" to
     show a soft placeholder. Put images in assets/img/.
     ------------------------------------------------------------------------- */
  members: [
    {
      name: "Jingyi Rena Ren, PhD",
      role: "Principal Investigator",
      photo: "assets/img/rena-ren.jpg",
      blurb: "Rena is founding the lab at the Genome Institute of Singapore (A*STAR). She received her B.A. in Biochemistry at Bryn Mawr College and completed her PhD in Chemistry at Massachusetts Institute of Technology in the United States, under the supervision of Dr. Xiao Wang. She completed her postdoctoral training with Dr. Yi Zhang as a Helen Hay Whitney Postdoctoral Fellow in Harvard Medical School. Outside the lab, Rena has a range of hobbies including reading books, watching movies, music & singing, and exploring artworks."
    }
    ,{
      name: "You can be next!",
      role: "",
      photo: "assets/img/placeholder-cat.png",
      blurb: ""
    }
    /* Future members will appear below automatically. Example template:
    ,{
      name: "Full Name",
      role: "PhD Student | Postdoc | Research Officer",
      photo: "assets/img/filename.jpg",
      blurb: "One or two sentences about their background and focus."
    }
    */
  ],

  /* If there are open positions, these cards render after the members list.
     Set to [] to hide the section entirely. */
  openings: [
    {
      title: "Postdoctoral Scientists",
      qualification: "PhD degree in chemical biology, molecular biology, bioengineering, genomics, neuroscience, computational biology, or a related field.",
      howToApply: "Interested applicants should contact Rena at renarenlab@gmail.com to submit (1) cover letter describing your research experience, (2) CV with a list of publications, and (3) contact for three references. Postdoc fellowships are strongly encouraged."
    },
    {
      title: "Research Officers",
      qualification: "Bachelor’s or Master’s degree in life sciences, bioinformatics, data science, bioengineering, or a related field. General lab skills in molecular biology or genomics. Strong analytical background is preferred.",
      howToApply: "Interested applicants should contact Rena at renarenlab@gmail.com with CV."
    },
    {
      title: "PhD Students",
      qualification: "Bachelor’s or Master’s degree in life sciences or data sciences, broadly defined. Strong interest in RNA biology or tool development.",
      howToApply: "Current Singapore-based graduate students and A*STAR scholars are encouraged to find a co-supervisor at home university and email Rena with CV and research interest to discuss opportunities.\nProspective students are encouraged to apply A*STAR graduate scholarships and a partnering Singaporean or overseas university."
    },
    {
      title: "Undergrad & RA",
      qualification: "Bachelor’s or ongoing degree in life sciences, or data sciences, broadly defined. General lab skills in molecular biology or genomics, or computational and programming language skills, are preferred.",
      howToApply: "Interested applicants should contact Rena at renarenlab@gmail.com with CV."
    }
  ],

  /* -------------------------------------------------------------------------
     PUBLICATIONS  (one per row, newest first)
     Add a paper by copying a block. 'thumb' is a screenshot of the paper —
     put the image in assets/img/ and reference it here. Leave "" for a
     placeholder until you have the figure.
     ------------------------------------------------------------------------- */
  publications: [
    {
      year: 2025,
      title: "Spatially resolved in situ profiling of mRNA life cycle at transcriptome scale in intact cells and tissues",
      venue: "Nature Protocols",
      authors: "Ren, J., Zeng, H., Huang, J.*, Shi, H., Sui, X., Tang, Z., Luo, S., Tian, J., Wu, M., Wang, X.#",
      link: "https://www.nature.com/articles/s41596-025-01248-3"
    },
    {
      year: 2024,
      title: "Spatial omics advances for in situ RNA biology",
      venue: "Molecular Cell 84(19), 3737–3757",
      authors: "Ren, J., Luo, S., Shi, H., Wang, X.#",
      link: "https://www.cell.com/molecular-cell/fulltext/S1097-2765(24)00656-7"
    },
    {
      year: 2024,
      title: "Chemically and topologically engineered branched mRNA with ultra translation capacity",
      venue: "Nature Biotechnology 43, 194–203",
      authors: "Chen, H., Liu, D., Guo, J., Aditham, A., Zhou, Y., Tian, J., Luo, S., Ren, J., Hsu, A., Huang, J., Kostas, F., Wu, M., Liu, D.R., Wang, X.#",
      link: "https://www.nature.com/articles/s41587-024-02174-7"
    },
    {
      year: 2023,
      title: "Spatial Atlas of Molecular Cell Types and AAV Accessibility across the Mouse Central Nervous System",
      venue: "Nature 622 (7983): 552–61",
      authors: "Shi, H., He, Y., Zhou, Y., Huang, J., Wang, B., Tang, Z., Tan, P., Wu, M., Lin, M., Ren, J., Thapa, Y., Tang, X., Liu, A., Chan, K.Y., Liu, J.#, Wang, X.#",
      link: "https://www.nature.com/articles/s41586-023-06569-5"
    },
    {
      year: 2023,
      title: "Spatially Resolved Single-cell Translatomics at Subcellular Resolution",
      venue: "Science 380 (6652): eadd3067",
      authors: "Zeng, H.*, Huang, J.*, Ren, J.*, Wang, C.K., Tang, Z., Zhou, Y., Aditham, A., Shi, H., Sui, X., Wang, X.#",
      link: "https://www.science.org/doi/10.1126/science.add3067",
      intro: "A long-held objective in biological research is to accurately measure protein translation at the single-cell level with spatial resolution. Current techniques like ribosome profiling provide only the averaged protein translation across many cells and without spatial resolution. Meanwhile, the current spatial transcriptomics methods are not able to provide the translation state of RNA. In this work, we developed a highly multiplexed, ribosome-bound messenger RNA imaging technique called RIBOmap.",
      figure: "assets/img/ribomap-figure.png",
      figureHalf: true
    },
    {
      year: 2023,
      title: "Spatiotemporally resolved transcriptomics reveals subcellular RNA kinetic landscape",
      venue: "Nature Methods 20 (5): 695–705",
      authors: "Ren, J., Zhou, H., Zeng, H., Wang, C.K., Huang, J., Qiu, X., Maher, K., Lin, Z., He, Y., Tang, X., Li, B., Liu, J., Wang, X.#",
      link: "https://www.nature.com/articles/s41592-023-01829-8",
      intro: "Understanding the full landscape of RNA dynamics from birth to death at subcellular resolution is critical for understanding the highly dynamic aspects of molecular and cellular biology. However, this important question cannot be addressed by the current spatial transcriptomics methods. In this work, we developed a highly-multiplexed, nascent RNA imaging technology called TEMPOmap, a novel method that, for the first time to our knowledge, tracks the evolution of single-cell nascent transcriptomics in time and space. Using TEMPOmap, we were able to simultaneously profile spatiotemporal transcriptomes of ~1000 RNA species with 1 hr resolution in time and 200 nm resolution in space.",
      figure: "assets/img/tempomap-figure.png"
    },
    {
      year: 2023,
      title: "Integrative in situ mapping of single-cell transcriptional states and tissue histopathology in an Alzheimer's disease model",
      venue: "Nature Neuroscience 26 (3): 430–40",
      authors: "Zeng, H., Huang, J., Zhou, H., Meilandt, W.J., Dejanovic, B., Zhou, Y., Bohen, C.J., Lee, S., Ren, J., Liu, A., Sheng, H., Liu, J., Wang, X.#",
      link: "https://www.nature.com/articles/s41593-022-01251-x"
    },
    {
      year: 2021,
      title: "ClusterMap for multi-scale clustering analysis of spatial gene expression",
      venue: "Nature Communications 12 (1): 5909",
      authors: "He, Y.*, Tang, X.*, Huang, J., Ren, J., Zhou, H., Chen, K., Liu, A., Shi, A., Lin, Z., Li, Q., Aditham, A., Ounadjela, J., Grody, E.I., Shu, J., Liu, J.#, Wang, X.#",
      link: "https://www.nature.com/articles/s41467-021-26044-x"
    }
  ],

  /* -------------------------------------------------------------------------
     CONTACT
     ------------------------------------------------------------------------- */
  contact: {
    primaryName: "Rena Ren, PhD",
    primaryRole: "Principal Investigator",
    email: "renarenlab@gmail.com",
    institution: "Genome Institute of Singapore (GIS), A*STAR",
    location: "Singapore"
  }
};
