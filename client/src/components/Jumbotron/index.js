import React from "react"; 

function Jumbotron ({ children }) {
    return (
        <div
        style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
         <h1>(React) Google Books Search </h1>
         <h2>Search for and save Books of Interest</h2>


        </div>
    );
}

export default Jumbotron; 
