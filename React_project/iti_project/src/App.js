import About_us from "./components/Abdelrahman_components/About_us";

import Special_recipes from './components/Abdelrahman_components/Special_recipes';
import Before from "./components/yassmen component/before";
import Navbar from "./components/yassmen component/navbar";
import HomePage from "./components/yassmen component/homePage";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./components/yassmen component/notfound";
// import Pages from "./components/nouran component/pages";
import Pages from "./components/nouran component/pages";
import Nav_bar_menu from "./components/yassmen component/nav_bar_menu";
import Menu from "./components/Abdelrahman_components/menu";
// import FeedBack from "./components/yassmen component/feedback";
import Footer from "./components/yassmen component/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Before />
          <Nav_bar_menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About_us />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Special" element={<Special_recipes />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/feedback" element={<Footer/>} />
            {/* <Route path="/App" element={<Mobile />} /> */}
          </Routes>


        </div>
      </BrowserRouter>
    </>
  );
}

// ############################################################################
// ############################################################################
// ############################################################################
export default App;