import About_us from "./components/Abdelrahman_components/About_us";
// import Button from "./components/Abdelrahman_components/button";
// import Photos1 from "./components/Abdelrahman_components/Photos1";
import Photos2 from "./components/Abdelrahman_components/Photos2";
import Special_recipes from './components/Abdelrahman_components/Special_recipes';
import Photos3 from './components/Abdelrahman_components/Photos3';
import Photos4 from './components/Abdelrahman_components/Photos4';
import Before from "./components/yassmen component/before";
import Navbar from "./components/yassmen component/navbar";
import HomePage from "./components/yassmen component/homePage";
import './App.css'
import Paragraph from "./components/nouran component/paragraph";
import Grid from "./components/nouran component/component";
function App() {
  return (
    <>
      <div className="App">
        <Before />
        <Navbar />
        <HomePage />
        <About_us />
              <Special_recipes />
            </div>

      {/* <div class="parent" id="Pages">

          <Paragraph />

          <div class="grid-container">
            <Grid />

          </div>
        </div> */}
      </>
      );
}

// ############################################################################
// ############################################################################
// ############################################################################
export default App;