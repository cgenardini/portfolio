import recipe from "../../src/images/projects/therecipe.jpg";
import wtwr from "../../src/images/projects/wtwr.jpg";
import aroundus from "../images/projects/aroundtheus.jpg";
import coffee from "../images/projects/coffeeshop.jpg";
import library from "../images/projects/library.jpg";

export const projectsArray = [
  {
    id: 0,
    name: "The Recipe",
    link: "https://therecipe.make.com.ar/",
    frontend: "https://github.com/cgenardini/the_recipe_frontend",
    backend: "https://github.com/cgenardini/the_recipe_backend",
    summary:
      "Discover culinary inspiration with The Recipe, a comprehensive application designed to revolutionize how users explore, and save recipes. Built as a Single Page Application using React, React Hooks, and React Router, it offers a seamless user experience, enhanced security through token-based authentication, and data encoding/hashing. It's not just an app; it's your next meal planner and culinary guide, all in one.",
    image: recipe,
    tools:
      "HTML | CSS | JSX | React | React Hooks | React Routes | Node | Express | MongoDB | REST API | Google Cloud | Nginx",
  },
  {
    id: 1,
    name: "WTWR",
    link: "https://wtwr.app.happyforever.com/",
    frontend: "https://github.com/cgenardini/se_project_react",
    backend: "https://github.com/cgenardini/se_project_express",
    summary:
      "WTWR redefines how users select their daily attire by aligning fashion with the forecast. This innovative application suggests clothing based on real-time weather conditions, ensuring users not only look their best but are also prepared for the elements. With capabilities for users to add their fashion items, create personal profiles, and contribute to a weather-wise wardrobe database, WTWR blends style with practicality, secured with advanced data encoding and token authentication.",
    image: wtwr,
    tools:
      "HTML | CSS | JSX | React | React Hooks | React Routes | Node | Express | MongoDB | Google Cloud | Nginx",
  },
  {
    id: 2,
    name: "Around the US",
    link: "https://cgenardini.github.io/se_project_aroundtheus/",
    frontend: "https://github.com/cgenardini/se_project_aroundtheus",
    summary:
      "Around the US is an immersive frontend social media platform that allows users to embark on a digital journey across the United States through image sharing. This platform enables users to personalize their experience by adding image cards, editing profiles, and interacting with content through likes. Developed using advanced JavaScript and Object-Oriented Programming principles, it offers a dynamic, responsive user interface crafted with Webpack and Babel for a seamless online community experience.",
    image: aroundus,
    tools:
      "HTML | CSS | JavaScript | Object-Oriented Programming | Webpack | Babel",
  },
  {
    id: 3,
    name: "The Coffee Shop",
    link: "https://cgenardini.github.io/se_project_coffeeshop/",
    frontend: "https://github.com/cgenardini/se_project_coffeeshop",
    summary:
      "Step into The Coffee Shop, a landing page that welcomes you with the warm aroma of coffee through its visually appealing and accessibility-friendly design. Utilizing HTML and CSS, this project employs animation to bring dynamic features to life, creating an inviting online presence for coffee lovers. The design principles of BEM and Flexbox ensure a fluid, intuitive navigation experience, mirroring the comfort and ease of your favorite coffee shop.",
    image: coffee,
    tools: "HTML | CSS | BEM | Flexbox | Animation",
  },
  {
    id: 4,
    name: "The Library",
    link: "https://cgenardini.github.io/se_project_library/",
    frontend: "https://github.com/cgenardini/se_project_library",
    summary:
      "The Library's landing page stands as a gateway to a world of knowledge, designed with accessibility at its forefront. Through the meticulous use of HTML and CSS, this project emphasizes clarity and ease of use, employing BEM and Flexbox to structure content in a way that's both appealing and straightforward. It's an online space where the love for books and the pursuit of learning are celebrated, inviting users into a community that values accessibility and elegant design.",
    image: library,
    tools: "HTML | CSS | BEM | Flexbox",
  },
];
