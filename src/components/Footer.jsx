import React from "react";

function Footer(){

    const name = "Ben";

    const year = new Date().getFullYear();

    return(
        <div className="Footer-container">
<p>Powered by {name} Techs &#x2122;</p>
<p>Copyright &#xa9; {year} Inc.</p>
            </div>
    );
}


export default Footer;