
/* import { ToastContainer } from 'react-toastify'; */
import { Route, Routes } from "react-router-dom";

import Experience from 'components/Experience/Experience';
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Projects from "components/Projects/Projects";
import Video from "components/Video/Video";
import Home from "pages/Home/Home";
import About from "pages/About/About";




export const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="video" element={<Video />} />
            <Route path="projects" element={<Projects />} />
            <Route path="work_experience" element={<Experience />} />
          </Route>
          </Route>
      </Routes>
      <Footer />
    </>
  );
};
