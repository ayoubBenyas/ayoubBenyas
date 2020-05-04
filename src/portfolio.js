
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const me = {
  firstName : "Ayoub", lastName : "BENYAS", fullName : "Ayoub BENYAS"
}

const greeting = {
  /* Your Summary And Greeting Section */
  title: `Hello world, I'm ${me.firstName} ` ,
  subTitle: emoji("A Student Engineer 👨🏻‍🎓 and software developer  💻 with good experience in the development of simple Web and mobile applications\
   using 🔥 JavaScript / Angular / Nodejs / React / Ionic 🔥."),
  resumeLink: "#greeting"
};

// Your Social Media Link

const socialMediaLinks = {

  facebook: "https://facebook.com/ayoub.benyass.77",
  github: "https://github.com/ayoubBenyas",
  linkedin: "https://linkedin.com/in/ayoub-benyas",
  gmail: "aubbenyas717@gmail.com",
  //gitlab: "https://gitlab.com/..",
};

// Your Skills Section

const skillsSection = {
  title: "What i do 💪",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("👾 Develop interactive Front (user) and Back end interfaces for web and hybrid mobile applications"),
    emoji("👾 Great capacity for modeling large information systems and handling almost all kinds of databases"),
    emoji("👾 Good knowledge of new technologies and mastery of the basics")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "C language",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "87a8c9260d59061b556f18a91252e9a1d0abb821",
  githubUserName: "ayoubBenyas"
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME MODEST PROJECTS THAT I CREATED OR I HELPED TO THEIR TECH",
  projects: [
    {
      title : "Course management system (CMS) platform",
      image: "https://i.ibb.co/qmFKZmW/logo-word.png",
      link: "#"
    },
    {
      title : "Collecting YouTube videos data via the YouTube API",
      image: "https://i.ibb.co/p1CBDCq/youtube-data-api.png",
      link: "#"
    }
  ]
};

// Your Education Section Include Your Certification Talks and More

const educationSection = {

  title: emoji("Education 🎓"),
  subtitle: "Some education stations and formations that i'm very satisfied with and proud of ",

  educationsCards: [
    {
      title: "National school For Computer Science - Rabat",
      subtitle: "Web Engineering and Mobile Computing (IWIM)",
      image: "https://i.ibb.co/GCq5crr/ensias.png",
      footerLink: [
        { name: "Engineering Degree", finish : false, time: "2019 - 2022"},
      ]
    },
    {
      title: "Faculty of Science Semlalia - Marrakech",
      subtitle: "Mathematical and computer sciences",
      image: "https://i.ibb.co/dgBwxzt/fssm.png",
      footerLink: [
        { name: "Licence", finish : true , time: "2018 - 2019"},
        { name: "Diploma of General University Studies", finish : true , time: "2016 - 2018"}
      ]
    },
  ]
};

// Experience Section

const blogSection = {

  title: "Experience and Internships 💼",
  subtitle: "Actually i didn't do lot of internships ,but the one that i did was a great experience",

  blogs: [
    {
      url: "https://drive.google.com/open?id=1J25D3FZg-GGbxtnZujPcbN-T_dJnJL0v",
      title: "Ge🌍graphic Information System (GIS) at the Service of Rural Development.",
      description: "The main objective of this internship is the conception and implementation of a GIS 🗺️ \
      (Geographic Information System) that will enable the collection, management, manipulation, analysis📊,\
       modelling and display of spatially referenced data in order to solve complex problems of planning and\
        management of rural communities."
    },
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me 🤙"),
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+212-641837818",
  email_address: "aubbenyas717@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { me, greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, educationSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
