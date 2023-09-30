import About_us from "./components/Abdelrahman_components/About_us";
// import Button from "./components/Abdelrahman_components/button";
// import Photos1 from "./components/Abdelrahman_components/Photos1";
import Photos2 from "./components/Abdelrahman_components/Photos2";
import Special_recipes from './components/Abdelrahman_components/Special_recipes';
import Photos3 from './components/Abdelrahman_components/Photos3';
import Photos4 from './Photos4';
import Before from "./components/yassmen component/before";
import Navbar from "./components/yassmen component/navbar";
import HomePage from "./components/yassmen component/homePage";
import './App.css'
import Paragraph from "./components/nouran component/paragraph";
import Grid from "./components/nouran component/component";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Before />
          <Navbar />
          <HomePage />
          <About_us />
          <Routes>
            <Route>
            </Route>
          </Routes>
          <div className="section2">
            <div className="contanier">
              <div className="special-recipes">
                <Special_recipes />
              </div>
              <Photos3 />
              <Photos4 />
            </div>
          </div>
        </div>
        <div class="parent" id="Pages">

          <Paragraph />

          <div class="grid-container">
            <Grid />

          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

// ############################################################################
// ############################################################################
// ############################################################################
export default App;