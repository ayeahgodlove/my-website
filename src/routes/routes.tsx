import React from "react";
import AboutPage from "../pages/about/about.page";
import BlogsPage from "../pages/blog/blogs.page";
import ContactPage from "../pages/contact/contact.page";
import GalleryPage from "../pages/gallery/gallery.page";
import HomePage from "../pages/home/home.page";
import WelcomePage from "../pages/home/welcome.page";
import PortfoliosPage from "../pages/portfolio/portfolios.page";
import ResumePage from "../pages/resume/resume.page";
interface IRoutes {
  path: string;
  private: boolean;
  exact: boolean;
  component: React.FC | React.ComponentClass;
}

export const routes: IRoutes[] = [
  {
    path: "/welcome",
    private: false,
    exact: true,
    component: WelcomePage,
  },
  {
    path: "/",
    private: false,
    exact: true,
    component: HomePage,
  },
  {
    path: "/about",
    private: false,
    exact: true,
    component: AboutPage,
  },
  {
    path: "/resume",
    private: false,
    exact: true,
    component: ResumePage,
  },
  {
    path: "/portfolios",
    private: false,
    exact: true,
    component: PortfoliosPage,
  },
  {
    path: "/blogs",
    private: false,
    exact: true,
    component: BlogsPage,
  },
  {
    path: "/blogs/:title",
    private: false,
    exact: true,
    component: BlogsPage,
  },
  {
    path: "/gallery",
    private: false,
    exact: true,
    component: GalleryPage,
  },
  {
    path: "/contact",
    private: false,
    exact: true,
    component: ContactPage,
  },
];
