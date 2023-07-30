import { lazy } from "react";

import { Route, Routes } from "react-router-dom";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

const Projects = lazy(() => import('../Projects/Projects'));
const Presentation = lazy(() => import('../Presentation/Presentation'));
const Experience = lazy(() => import('../Experience/Experience'));

const Home = lazy(() => import('../../pages/Home/Home'));
const About = lazy(() => import('../../pages/About/About'));



export const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="presentation" element={<Presentation />} />
            <Route path="projects" element={<Projects />} />
            <Route path="work_experience" element={<Experience />} />
          </Route>
          </Route>
      </Routes>
      <Footer />
    </>
  );
};
