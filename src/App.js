import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import AboutMePage from "./pages/AboutMePage";
import BannerPage from "./pages/BannerPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Router>
            <Header />
            <HeaderMobile />
            <Routes>
              <Route exact path="/" element={<BannerPage />}>
              </Route>
              <Route exact path="/about_me" element={<AboutMePage />}>
              </Route>
              <Route exact path="/experience" element={<ExperiencePage />}>
              </Route>
              <Route exact path="/projects" element={<ProjectsPage />}>
              </Route>
              <Route exact path="/contact" element={<ContactPage />}>
              </Route>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
