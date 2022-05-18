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
      <h2 style={{textAlign: "center"}} className="text-white w-full font-Bahnschrift pb-2 text-7xl "  > Admin Side     </h2>
      <form style={{ position: 'relative', marginLeft: 460  } }>

  </form>
  <div style={{display:'flex',width:'100vw',justifyContent:'center'}}>
  <Link to={`editword`}>
  <button style={{
    zIndex:'999',
    padding:'1vh',
    width:'10vw',
    background:'white',
    marginTop:'3%',
    marginLeft:'10px'
  }}>Edit Words </button></Link>
        </div>
</div>
    </section>    
  )
}

export default App
