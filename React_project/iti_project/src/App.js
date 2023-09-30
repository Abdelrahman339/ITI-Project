import About_us from "./components/Abdelrahman_components/About_us";

import Special_recipes from './components/Abdelrahman_components/Special_recipes';
import Before from "./components/yassmen component/before";
import Navbar from "./components/yassmen component/navbar";
import HomePage from "./components/yassmen component/homePage";
import './App.css'
import Paragraph from "./components/nouran component/paragraph";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./components/yassmen component/notfound";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Before />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About_us />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/Special" element={<Special_recipes/>}/> 
          <Route path="/pages" element={<Paragraph/>}/> 
        </Routes>

          
            </div>

      {/* <div class="parent" id="Pages">

          <Paragraph />

          <div class="grid-container">
            <Grid />

          </div>
        </div> */}
        </BrowserRouter>
      </>
      );
}

// ############################################################################
// ############################################################################
// ############################################################################
export default App;