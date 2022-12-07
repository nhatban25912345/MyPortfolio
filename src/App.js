import Header from "./components/Header";
import "./App.css";
import Introduce from "./components/Introduce";
import Project from "./components/Project";
import Information from "./components/Information/Information";
import Contact from "./components/Contact";
import { Link, animateScroll as scroll } from "react-scroll";
import { useRef } from "react";


function App() {

  return (
    <div className="App" style={{"top": "1000"}}>
      <Header/>
      <Introduce id="introduce"/>
      <Project id="project"/>
      <Information id="information" />
      <Contact id="contact"/>

      <div className="footer">
        <span>Coded by <Link onClick={()=> {scroll.scrollToTop()}}>Shinha</Link></span>
      </div>

      <button onClick={()=> {scroll.scrollToTop()}}>Back to top</button>

    </div>
  );
}

export default App;
