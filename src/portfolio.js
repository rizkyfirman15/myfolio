/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rizky Firman",
  title: "Hi all, I'm Rizky",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 waiting for errors to come soon, because with it skills can be trained and developed. Coding is easy & fun, if immediately done without much reason."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16xlD_DT-2QxnELmFry0WT_57n1laooMh/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rizkyfirman15",
  linkedin: "https://www.linkedin.com/in/rizkyfirman15/",
  gitlab: "https://gitlab.com/rizkyfirman15",
  facebook: "https://www.facebook.com/mobaarafat12321",
  instagram: "https://instagram.com/rizkyfirman_15",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive front end/user interfaces for your web applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "mysql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SMK Negeri 1 Tanara",
      logo: require("./assets/images/tanaraLogo.png"),
      subHeader: "Teknik Kendaraan Ringan",
      duration: "September 2016 - April 2018",
      desc: "Skills: Tune Up & Overhoul.",
      descBullets: [
      ]
    },
    {
      schoolName: "Politeknik Piksi Input Serang",
      logo: require("./assets/images/piksiLogo.png"),
      subHeader: "D3 Manajemen Informatika",
      duration: "September 2018 - April 2021",
      desc: "Skills: Web Development & Networking (Mikrotik).",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineering Chemical",
      company: "PT. Mitsuba Indonesia",
      companylogo: require("./assets/images/mitsubaLogo1.png"),
      date: "June 2017 – August 2017",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Entry Data",
      company: "Kejaksaan Tinggi Banten",
      companylogo: require("./assets/images/kejatiLogo.png"),
      date: "Sep 2020 – Oct 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "IT Staff",
      company: "Global Indonesia School",
      companylogo: require("./assets/images/gisLogo.png"),
      date: "Oct 2020 – Now",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/arturLogo.png"),
      projectName: "Artur.id",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://artur.id/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/gisprojectLogo.png"),
      projectName: "Global Indonesia School",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://globalindonesiaschool.sch.id/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Training And Certifications"),
  subtitle:
    "Here are some of the IT training and certification experiences I've participated in !",

  achievementsCards: [
    {
      title: "VSGA - Junior Web Developer",
      subtitle:
        "Junior Web Developer is one of the training schemes in Intensive Training and Certification (SKKNI) with the Junior Web Developer scheme.",
      image: require("./assets/images/dtsLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/10zV_ALkheeWA3XO_vVcBwXUW9PSUDgib/view?usp=sharing"
        },
        {
          name: "Digitalent Kominfo",
          url: "https://digitalent.kominfo.go.id/"
        }
      ]
    },
    {
      title: "Laravel - Web Development",
      subtitle:
        "Laravel is a PHP-based framework that is very popular, fast, and easy to create custom websites according to your needs and wants.",
      image: require("./assets/images/sanberLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/12TTIwsyUgf1o493x5hFEcKf8lI5qIvov/view?usp=sharing"
        },
        {
          name: "Sanbercode PT.Sanbersy",
          url: "https://sanbercode.com/"
        }
      ]
    },

    {
      title: "Mikrotik Academy - MTCNA",
      subtitle: "MikroTik Academy is a program prepared for the educational track, namely Polytechnic / University / Vocational School and the like to study MikroTik.",
      image: require("./assets/images/mikrotikLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1iBpSXAZPUvpv2KRx_ID91n7ri3fARtPW/view?usp=sharing"
        },
        {
          name: "Mikrotik Routers and Wireless",
          url: "https://mikrotik.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://rizkyfirman15.medium.com/wordpress-laravel-kapan-menggunakannya-b231516914f1",
      title: "WordPress & Laravel — when to use it?",
      description:
        "WordPress is a Content management System (CMS) created with the goal of building websites, either using customizable themes or creating custom-built solutions."
    },
    {
      url: "https://rizkyfirman15.medium.com/api-authentication-laravel-vue-spa-menggunakan-jwt-auth-888986b928d2",
      title: "Laravel-Vue SPA Authentication API using Jwt-auth",
      description:
        "Laravel is the fastest growing PHP framework and is used by thousands of developers around the world to quickly build powerful web applications."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build a portfolio website with React.js",
      subtitle: "Know what React is and how to use it.",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+6283899980939",
  email_address: "rizkyfirmansyah3344@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
