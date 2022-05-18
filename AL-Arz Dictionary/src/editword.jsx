import Nav from "./components/Nav"
import React from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
function App ()
{
  return (
    <section className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2">
      <Nav />
      <div className="md:container px-2  pt-5 md:text-left text-center">
       
      </div>
      <div>
      <h2 style={{textAlign: "center"}} className="text-white w-full font-Bahnschrift pb-2 text-7xl "  > روٹ لفظ کی تلاش  </h2>
      
 
</div>

    </section>    
  )
}

export default App
