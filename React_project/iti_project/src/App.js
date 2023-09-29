
import About_us from "./components/Abdelrahman_components/About_us";
import Button from "./components/Abdelrahman_components/button";
import Photos1 from "./components/Abdelrahman_components/Photos1";
import Photos2 from "./components/Abdelrahman_components/Photos2";
import Special_recipes from './components/Abdelrahman_components/Special_recipes';
import Photos3 from './components/Abdelrahman_components/Photos3';
import Photos4 from './Photos4';
import Before from "./components/yassmen component/before";
import Navbar from "./components/yassmen component/navbar";
import HomePage from "./components/yassmen component/homePage";
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="section1">
        <div className="container">
          <div className="Photos1">
            <Photos1 />
          </div>
          <div className="about-us">
            <About_us />

            <div className="button">
              <Button />
            </div>
          </div>
          <div className="Photos2">
            <Photos2 />
          </div>
        </div>
      </div>
      {/* #################################### */}
      <div className="section2">
        <div className="contanier">
          <div className="special-recipes">
            <Special_recipes />
            <div className="button">
              <Button />
            </div>
          </div>
          <div className="photos3">
          <Photos3/>
          </div>
          <div className="photos4">
          <Photos4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
