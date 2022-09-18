import './App.css';
import Navbar from "./components/Navbar" 
import Footer from "./components/Footer" 
import Filters from "./components/Filters" 
import Content from "./components/Content" 
import Carousal from "./components/carousal"

function App() {
  return (
    <div>
    <div className='header'>
      <Navbar />
      <Filters />
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
