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
      "Recipe finding application. Users can create accounts to save recipes their profiles. User data is secure with token authentication and data encoding/hashing. SPA created with React, React Hooks and React Router.",
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
      "Clothing recommendations application. Clothing items added by users will be shown on the home page based on what the current weather is. Users may create profiles and add new clothing items to their profile and the database. User data is secure with data encoding and token authentication.",
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
      "Front End Social media application. Image cards can be added to profile. Users information and avatar can be edited using form modal. Images can be liked/unliked.",
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
      "Coffee Shop Landing Page. HTML/CSS used to create accessibiltiy friendly landing paging. Animation is used for dynamic feature.",
    image: coffee,
    tools: "HTML | CSS | BEM | Flexbox | Animation",
  },
  {
    id: 4,
    name: "The Library",
    link: "https://cgenardini.github.io/se_project_library/",
    frontend: "https://github.com/cgenardini/se_project_library",
    summary:
      "Library Landing Page. HTML/CSS used to create accessibiltiy friendly landing paging. Focus on BEM and Flexbox.",
    image: library,
    tools: "HTML | CSS | BEM | Flexbox",
  },
];
