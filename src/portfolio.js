
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hello welcome, I'm Ayoub ",
  subTitle: emoji("A Student Engineer 👨🏻‍🎓 and software developer  💻 with good experience in the development of simple Web and mobile applications\
   using JavaScript / Angular / Nodejs / React / Ionic, \
   And looking for a summer internship to enrich my professionanl experience"),
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
  title: "What i do",
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
      image: "https://i.ibb.co/qmFKZmW/logo-word.png",
      link: "#"
    },
  ]
};

// Your Education Section Include Your Certification Talks and More

const educationSection = {

  title: emoji("Education 🏫 "),
  subtitle: "Some education stations and formations that i'm satisfied with and proud of ",

  educationsCards: [
    {
      title: "National school For Computer Science - Rabat",
      subtitle: "Web Engineering and Mobile Computing (IWIM)",
      image: "https://cdn-04.9rayti.com/rsrc/cache/widen_292/uploads/2012/07/ensias.png",
      footerLink: [
        { name: "Engineering Degree", finish : false},
      ]
    },
    {
      title: "Faculty of Fcience Semlalia - Marrakech",
      subtitle: "Mathematical and computer sciences",
      image: "https://lh3.googleusercontent.com/proxy/C9X49ZuK6bKywCg-Ppn3rSPpuwp9W214Xx32fQGRTpyvyduCdAVhahFALjdkPhkwBG44cZ4FT16xEauoGMkzavpDBIh65zscvaJoFw",
      footerLink: [
        { name: "Licence", finish : true},
        { name: "Diploma of General University Studies", finish : true}
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Experience",
  subtitle: "With Love for Developing cool stuff. i love to write and teach others what i have learned",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT Is The Best?",
      description: "React is a JavaScript library for building the user interface. It is maintained by Facebook and a community of individual developers and companies."
    }
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
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, educationSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
