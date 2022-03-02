import Home from "components/Home"
import About from "components/About"
import Contact from "components/Contact"
import Projects from "components/Projects"

import StripeMenu from "components/Projects/StripeMenu"
import PricingComparator from "components/Projects/PricingComparator"
import CreditCardForm from "components/Projects/CreditCardForm"
import WavesCanvas from "components/Projects/WavesCanvas"
import StackedMenu from "components/Projects/StackedMenu"
import VirtualTicket from "components/Projects/VirtualTicket"

export const PAGES = [
  {
    name: "Home",
    url: "/",
    component: Home,
  },
  {
    name: "Career",
    url: "/career",
    component: About,
  },
  {
    name: "Personal work",
    url: "/projects",
    component: Projects,
  },
  {
    name: "Contact",
    url: "/contact",
    component: Contact,
  },
]

export const SOCIAL_LINKS = [
  {
    url: "https://www.linkedin.com/in/carlosramirezdev/",
    icon: "fab fa-linkedin",
  },
  {
    url: "https://github.com/chakkyy",
    icon: "fab fa-github-alt",
  },
  {
    url: "mailto:cmramirez1996@gmail.com",
    icon: "far fa-paper-plane",
  },
]

export const CONTACT_PAGE_WORDS = [
  "an app from scratch",
  "a great feature to develop",
  "some refactoring",
  "a collaboration",
  "a brand new app concept ",
  "a cool project ",
]

export const EXPERIENCE = [
  {
    name: "Poincenot Technology Studio",
    isFreelance: false,
    img: "doit",
    date: "Nov '21 - Now",
    sector: "Fintech & SaaS",
    description: [
      "Development of a homebanking experience solution",
      "React Native / ReactJs / Redux / Elixir / Typescript",
      "AntDesign to generate the UI",
      "Unitary and integration testing",
      "Code refactoring",
      "App performance improvement",
      "Backend development with Elixir and the framework Phoenix",
      "Release into production and preproduction with Docker",
    ],
  },
  {
    name: "Web Developer",
    isFreelance: true,
    img: "free",
    date: "August '20 - Now",
    sector: "Freelancing",
    description: [
      "Development of landing pages and web applications",
      "Understanding and analyzing clients requirements to elaborate a user-first approach for the creative process of the website",
      "React / HTML / SCSS / Javascript",
      "Redux : Selectors / Hooks Redux / Redux Saga",
      "Bootstrap / TailwindCSS / ChakraUI",
      "Research, design and test the prototypes to have a well oriented idea of the technologies and requirements for each project",
      "Design with Figma & Adobe Photoshop",
      "Successfully delivered quality work to the clients and maintain the code for always still at the top technologies and standards of the industry.",
    ],
  },
  {
    name: "SoyHenry Bootcamp",
    isFreelance: false,
    img: "henry",
    date: "August '21 - October '21",
    sector: "Education & E-Learning",
    description: [
      "Teaching assistant",
      "Guide students through the bootcamp",
      "Help them to understand core concepts of programming",
      "Provide extracurricular projects to reinforce knowledge",
      "Provide practices to test students level before bootcamp test",
      "Guide them to work together",
    ],
  },
]

export const WEBSITES = [
  {
    name: "My old portfolio",
    subtitle: "Frontend Developer",
    link: "https://cramirez.vercel.app/",
    component: null,
  },
  {
    name: "16Bit Gamestore",
    subtitle: "E-commerce (Bootcamp project)",
    link: "https://16-bit-gamestore.vercel.app/home",
    component: null,
  },
  {
    name: "Pokedex",
    subtitle: "Bootcamp project",
    link: "https://pokedexapp-gold.vercel.app/",
    component: null,
  },
  {
    name: "Zest Bank",
    subtitle: "Landing Page",
    link: "https://zestbank.vercel.app/",
    component: null,
  },
  {
    name: "Born in Garage",
    subtitle: "Car engine sound library",
    link: "https://borningarage.vercel.app/",
    component: null,
  },
  {
    name: "Jiro",
    subtitle: "Ticketing app made with react-beautiful-dnd",
    link: "https://jiro-psi.vercel.app/",
    component: null,
  },
  {
    name: "Weather App",
    subtitle: "Bootcamp project",
    link: "https://weather-app-seven-red.vercel.app/",
    component: null,
  },
  {
    name: "Todo App",
    subtitle: "The well-known todo app that uses local storage",
    link: "https://todo-listreact.vercel.app/",
    component: null,
  },
]

export const FRONT_END_CHALLENGES = [
  {
    name: "Stacked Menu",
    subtitle: "CSS - UI/UX",
    link: "/stacked-menu",
    component: StackedMenu,
  },
  {
    name: "Virtual Ticket",
    subtitle: "CSS - UI/UX",
    link: "/virtual-ticket",
    component: VirtualTicket,
  },
  {
    name: "Credit Card Form",
    subtitle: "CSS - UI/UX",
    link: "/credit-card-form",
    component: CreditCardForm,
  },
  {
    name: "Waves with Canvas",
    subtitle: "Animation / GUI",
    link: "/waves-canvas",
    component: WavesCanvas,
  },
  {
    name: "Pricing Comparator",
    subtitle: "CSS - UI/UX",
    link: "/pricing-comparator",
    component: PricingComparator,
  },
  {
    name: "Stripe Menu",
    subtitle: "CSS - UI/UX",
    link: "/stripe-menu",
    component: StripeMenu,
  },
]
