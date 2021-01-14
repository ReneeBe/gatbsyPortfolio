import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Renee Berger | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Renee L Berger.com', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm",
  name: 'Renee',
  subtitle: 'a Full Stack Software Engineer in NYC.',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'I used to work in the fast-paced world of logistics and operations. I loved making different pieces of the operation work together better, but realized I wanted to make things work together better from a more powerful platform, so I enrolled in the Grace Hopper software immersive.',
  paragraphTwo:
    'Now, I am a curious and enthusiastic software engineer looking to work on a team where we can collaboratively develop intuitive, efficient, and aesthetic tools.',
  paragraphThree:
    'In my free time, I love crossword puzzles, trying new foods, maps, and bicycling. ',
  resume: 'https://drive.google.com/file/d/197DezlNem75HKJKiE_xyTJqe7D-Lp0F5/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'SokoCity',
    info:
      'A puzzle adventure game built by myself, Esther Kim, Marie Luongo, and Jasmin Soltani. Technologies used include: Phaser.io, React.JS, Node.JS, Google Cloud Firestore, and a sokoban generator npm package.',
    info2: 'My contributions here',
    url: 'https://soko-city.firebaseapp.com/',
    repo: 'https://github.com/destination-pop/soko-city', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Fame-X',
    info:
      'An ecommerce site selling experiences with celebrities. This app was built using React.JS, Redux.JS, Express.JS, Node.JS, Sequelize, PostgreSQL, Passport, and Material UI.',
    info2: 'My contributions here',
    url: 'https://famex.herokuapp.com/',
    repo: 'https://github.com/Kill-9-Mockingbird/grace-shopper', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Word Search App',
    info: '',
    info2: 'My contributions here',
    url: '',
    repo: 'https://github.com/ReneeBe/wordSearchApp', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Got any side project ideas, job opportunities, or just want to chat?',
  btn: "Let's Set Up a Time",
  email: 'mailto:reneelberger@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope-o',
      url: 'mailto:reneelberger@gmail.com',
    },
    {
      id: nanoid(),
      name: 'phone',
      url: 'tel:3475838729',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/reneeberger/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ReneeBe',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
