// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of my research and personal projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CJ O&#39;Neill CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-undead-reckoning",
          title: 'Undead Reckoning',
          description: "A GNSS-denied autonomous sensor-fusion aircraft",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dead_reckoning/";
            },},{id: "projects-emirates-mission-to-the-asteroid-belt",
          title: 'Emirates Mission to the Asteroid Belt',
          description: "My Time as an Undergraduate Researcher",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ema/";
            },},{id: "projects-climbing",
          title: 'Climbing',
          description: "Mostly Bouldering around Boulder",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mountains/";
            },},{id: "projects-ohia-sar-research",
          title: 'Ohia SAR Research',
          description: "An Ecological Synthetic-aperature Radar Application",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ohiasar/";
            },},{id: "projects-autonomous-soil-rover",
          title: 'Autonomous Soil Rover',
          description: "My First Experience from Ideation to Creation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/soil_rover/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%43%68%72%69%73%74%6F%70%68%65%72%4F%6E%65%69%6C%6C%4A%72@%63%6F%6C%6F%72%61%64%6F.%65%64%75", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
