import IceCream from '../images/IceCream.jpeg';
import Cinemania from '../images/Cinemania.jpeg';
import Portfolio from '../images/Portfolio.jpeg';

const projectsData = [
    {
    title: 'Cinemania',
    year: '2023',
    githubLink: 'https://github.com/nzend/team-project-cinemania',
    websiteLink: 'https://nzend.github.io/team-project-cinemania/',
    description: 'Contributed to the development of a collaborative movie search project,incorporating keyword search, dynamic content rendering, and personalized watchlists, highlighting strong teamwork and front-end development skills to deliver a user-friendly interface.',
    technologies: ['JS', 'SASS', 'HTML', 'Parcel', 'Axios'],
    image: Cinemania,
    },
    {
    title: 'Ice Cream',
    year: '2022',
    githubLink: 'https://github.com/MargoMarm/team-project-icecream',
    websiteLink: 'https://margomarm.github.io/team-project-icecream/',
    description: 'Collaboratively designed and developed a visually appealing café website, showcasing an array of product offerings, capturing the cafés ambiance, and featuring location information. Implemented interactive elements, seamless navigation, and a unique brand identity, resulting in an enhanced user experience.',
    technologies: ['JS', 'SASS', 'HTML', 'Parcel'],
    image: IceCream,
    },
    {
    title: 'My Portfolio',
    year: '2023',
    githubLink: 'https://github.com/Yuraro/dev-portfolio-yuraro',
    websiteLink: 'http://localhost:3000/dev-portfolio-yuraro',
    description: 'Explore My Work - Dive into a compilation of JavaScript, CSS, HTML, and React projects that embody my commitment to blending creativity and technology for an unforgettable user experience.',
    technologies: ['JS', 'CSS', 'HTML', 'React'],
    image: Portfolio,
    }
];

export default projectsData;