import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Justin Looi",
  title: "Hi all, I'm Justin",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink:
    "https://docs.google.com/document/d/1xvZxfABaTPM0mBdQffCvnqP9ASSEFARnA8qASt2VCxM/edit#heading=h.254fhrj2ehjh",
};

export const openSource = {
  githubUserName: "Just111n",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:justin_looi@mymail.sutd.edu.sg",
  linkedin: "https://www.linkedin.com/in/justin-looi-jw/",
  github: "https://github.com/Just111n",
  // instagram: "https://www.instagram.com/__justin100",
  // facebook: 'https://www.facebook.com/Just111n',
  // twitter: 'https://twitter.com/Just111n',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Singapore University Of Technology And Design",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2021 - Present",
    desc: "",
    grade: "2nd Class Honours",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  // {
  //   role: "Software Engineer Intern",
  //   company: "Meganos Software",
  //   companyLogo: "/img/icons/common/meganos.png",
  //   date: "Aug 2022 - Present",
  //   desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  // },
  {
    role: "Software Engineer Intern",
    company: "FPT Asia Pacific",
    companyLogo: "/img/icons/common/fpt.png",
    date: "Jan 2022 - Sept 2023",
    desc: "Developed an AI-powered chatbot using ReactJS, Python FastAPI, and OpenAI's API, enabling advanced functionalities like file uploads and vector search, demonstrating innovation in solving complex problems.Implemented Docker for efficient application deployment, ensuring consistent operation across different environments, which highlights your skills in modern deployment technologies and best practices.Utilized GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD), streamlining the development process and maintaining high code quality, showing your proficiency in software development and version control.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Software Engineer Intern",
    company: "FPT Software",
    companyLogo: "/img/icons/common/fpt.png",
    date: "Aug 2022 - Jun 2023",
    desc: "Specialized in front-end development for a digital health platform, using TypeScript, Redux Saga, and Material-UI to build and enhance chat message functionality. This pivotal feature allows doctors and clinicians to communicate remotely with patients, facilitating efficient and accessible healthcare.Contributed to the development of a user-centric interface, ensuring that the chat system is intuitive, responsive, and reliable for both healthcare professionals and patients.Collaborated closely with cross-functional teams to integrate chat functionality seamlessly with the platform's broader features, demonstrating strong teamwork and a commitment to creating a cohesive user experience.",
  },
  {
    role: "Software Engineer Intern",
    company: "Proccoli",
    companyLogo: "/img/icons/common/proccoli.png",
    date: "Sept 2021 - Oct 2021",
    desc: "Develop the front-end of admin site web application using ReactJs and Typescript so that admin accounts can help users to make changes to their account if they face any problems.Enabled admin accounts to make edits to company blog posts.Collaborate and coordinate with web design and back-end developer of admin site web application.Program a bot on telegram using Python.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Keep Mern",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/Just111n/KeepMERN",
    link: "https://keep-mern.vercel.app/",
  },
  {
    name: "Chatbot",
    desc: "A chatbot UI template that can be used to build chatbots for websites. It is built with React.js and styled-components.",
    // link: "https://gibeo.io/",
  },
  {
    name: "Telegram Bot",
    desc: "Telegram Bot that can help you to quickly find the id of people in your database. No longer need to manually search for the id of people in your database.",
    github: "https://github.com/Just111n/nodejs-telegram-bot",
  },
  {
    name: "Waywise",
    desc: "A web app that helps you to book taxi rides in advance according to your itinierary easily.",
    // link: "https://hooliganculture.com/",
  },
  {
    name: "Othello Game",
    desc: "This is a Python implementation of the traditional Othello game, featuring a graphical user interface (GUI) built using Tkinter.",
    github: "https://github.com/Just111n/Othello-Game/tree/main",
  },
];

export const feedbacks: FeedbackType[] = [
  //   {
  //     name: "Syed Jamal",
  //     role: "Frontend Developer at Meganos Software",
  //     feedback:
  //       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like justin is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  //   },
  //   {
  //     name: "Wajahat Malek",
  //     role: "CEO at Duseca Software",
  //     feedback:
  //       "justin has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. justin is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend justin for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  //   },
  //   {
  //     name: "Zaid Zaffar",
  //     role: "CEO at ZR Technologies",
  //     feedback:
  //       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  //   },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "justin Looi",
  description: greetings.description,
  author: "justin Looi",
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-Just111n.vercel.app",
  keywords: [
    "justin",
    "justin Looi",
    "@Just111n",
    "Just111n",
    "Portfolio",
    "justin Portfolio ",
    "justin Looi Portfolio",
  ],
};
