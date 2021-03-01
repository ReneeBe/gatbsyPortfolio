import { nanoid } from 'nanoid';
import rBergerResume from '../images/rBergerResume.pdf';
// import { sokoCityInfo } from './projectDescriptions';

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
  subtitle: 'a Software Engineer in NYC.',
  aboutMeLabel: 'About me',
  projectsLabel: 'Projects',
  contactLabel: 'Contact',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'I used to work in logistics and operations at growing startups. I loved making different pieces of the operation work together better, but realized I wanted to make things work together better from a more powerful platform, so I enrolled in the Grace Hopper software immersive.',
  paragraphTwo:
    'Now, I am a curious and enthusiastic software engineer looking to work on a team where we can collaboratively develop intuitive, efficient, and aesthetic tools.',
  paragraphThree:
    'In my free time, I love bicycling, trying new foods, crossword puzzles, and maps.',
  resume: rBergerResume,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sokocitySquare.jpg',
    title: 'SokoCity',
    info:
      'An RPG adventure game featuring Sokoban puzzles, level progression, and randomly-generated inventory and terrain, this web game was developed with 3 other collaborators. SokoCity was built out programmatically so that the levels can continue indefinitely. The current game features five dynamic levels. This web app was built using a sokoban generator npm package.',
    info2:
      "A major challenge of our project was determing how to use the puzzle generating node library we found in Phaser.io and add in puzzle solving functionality. The puzzle generator library made technically solvable puzzles, but we needed to make the output visible and functional as puzzle pieces in Phaser.io. I took on the challenge of translating the generator's output into actual game pieces, putting the puzzle sprites in the game's scene and adding game play physics to those pieces.",
    techs: ['Phaser.io', 'React', 'Node.js', 'Google Cloud Firestore'],
    url: 'https://soko-city.firebaseapp.com/',
    repo: 'https://github.com/destination-pop/soko-city', // if no repo, the button will not show up
    youtube: 'https://www.youtube.com/watch?v=9Yr-5DsVitw&feature=youtu.be',
  },
  {
    id: nanoid(),
    img: 'famexSquare.jpg',
    title: 'FameX',
    info:
      'An ecommerce site selling experiences with celebrities developed with 3 other collaborators. FameX features a persistent cart and seamless checkout experience.',
    info2:
      'I worked to design the database schema, backend seed data, develop backend routes, and implement cart updates. Our first major developing project, we mostly developed and debugged in the pair programming format. ',
    techs: [
      'React',
      'Redux',
      'Express',
      'Node.js',
      'Sequelize',
      'PostgreSQL',
      'Passport',
      'Material UI',
      'Google OAuth',
      'Travis CI',
    ],
    url: 'https://famex.herokuapp.com/',
    repo: 'https://github.com/Kill-9-Mockingbird/grace-shopper', // if no repo, the button will not show up
    youtube: '',
  },
  {
    id: nanoid(),
    img: 'wordSearchPreview.gif',
    title: 'Word Search App',
    info: 'A word search mobile app for iOS using a custom word search board generator.',
    info2:
      'I started building this app for an internship application, but have continued since as I have found React-Native to be a fun challenge. I am currently fine-tuning my latest feature: allowing users to input their own words. ',
    techs: ['React', 'React-Native', 'Node.js', 'Expo.io'],
    url: '',
    repo: 'https://github.com/ReneeBe/wordSearchApp', // if no repo, the button will not show up
    youtube: '',
    // 'img WAS wordSearchApp.jpeg',
    // https://exp.host/@reneebe/wordSearchApp
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Got any side project ideas, job opportunities, or just want to talk?',
  btn: "Let's Chat",
  email: 'reneelberger@gmail.com',
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
