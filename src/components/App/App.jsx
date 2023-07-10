
/* import { ToastContainer } from 'react-toastify'; */
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Experience from 'components/Experience/Experience';




export const App = () => {
  return (
    <>
{/*       <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="video" element={<Video />} />
            <Route path="projects" element={<Projects />} />
            <Route path="work_experience" element={<Experience />} />
          </Route>
          <Route path="/contacts" element={<Footer />} />
        </Route>
      </Routes>
    </>
  );
};
