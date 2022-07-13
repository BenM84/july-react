import React from "react";
import Time from "./Time";
import "./Time.css";
import Date from "./Date";
import "./Date.css";
import Footer from  "./Footer";
import "./Footer.css";




function App(){

    return(
        <div>
 <header>Simple July App</header>
            <Time/>
            <Date/>
            <Footer/>
           </div>
    );
}
export default App;
