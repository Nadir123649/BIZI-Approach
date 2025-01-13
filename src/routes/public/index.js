import About from "../../views/about";
import Home from "../../views";
import { home, about } from "../pathName";

export const PublicRoutes = [
  {
    title: "Home",
    component: Home,
    path: home,
  },
  {
    title: "About",
    component: About,
    path: about,
  },
];
