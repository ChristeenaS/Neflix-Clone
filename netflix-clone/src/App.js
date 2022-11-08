import React from "react";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {action,orginals,comedy, horror} from "./urls"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action Thrillers' isSmall/>
      <RowPost url={comedy} title='Comedies' isSmall/>
      <RowPost url={horror} title='Horror Movies' isSmall/>    </div>
  );
}

export default App;
