
import About_us from "./components/Abdelrahman_components/About_us";
import Button from "./components/Abdelrahman_components/button";
// import Photos1 from "./components/Abdelrahman_components/Photos1";
import Photos2 from "./components/Abdelrahman_components/Photos2";
import Special_recipes from './components/Abdelrahman_components/Special_recipes';
import Photos3 from './components/Abdelrahman_components/Photos3';
import Photos4 from './Photos4';
import Before from "./components/yassmen component/before";
import Navbar from "./components/yassmen component/navbar";
import HomePage from "./components/yassmen component/homePage";
import './App.css'
import paragraph from "./components/nouran component/paragraph";
function App() {
  return (
    <>
      <div className="App">
        <Before />
        <Navbar />
        <HomePage />
        <About_us />
        <div className="section2">
          <div className="contanier">
            <div className="special-recipes">
              <Special_recipes />
              <Button />
            </div>
            <Photos3 />
            <Photos4 />
          </div>
        </div>
      </div>
      {/* <Paragraph/>
      <Container/> */}
    </>
  );
}

// ############################################################################
// ############################################################################
// ############################################################################
export default App;



// ############################################################################
// ############################################################################
// ############################################################################