import About_us from "./components/Abdelrahman_components/About_us";
import Special_recipes from './components/Abdelrahman_components/Special_recipes';
import Photos3 from './components/Abdelrahman_components/Photos3';
import Photos4 from './Photos4';
import Before from "./components/yassmen component/before";
import Navbar from "./components/yassmen component/navbar";
import HomePage from "./components/yassmen component/homePage";
import './App.css'
import Paragraph from "./components/nouran component/paragraph";
import Grid from "./components/nouran component/component";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notfound from "./notfound";

function App() {
  return (
    <><BrowserRouter>
      <div className="App">
        <Before />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About_us />} />
          <Route path="*" element={<Notfound />} />  /////style In Css
          <Route path="/Special" element={<Special_recipes />} />
          <Route path="/pages" element={<Paragraph/>} />
        </Routes>
      </div>
      <div class="parent" id="Pages">

          <Paragraph />

          <div class="grid-container">
            <Grid />

          </div>
        </div>
      </>
      );
}

// ############################################################################
// ############################################################################
// ############################################################################
export default App;