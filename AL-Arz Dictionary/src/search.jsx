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
      <h2 style={{textAlign: "center"}} className="text-white w-full font-Bahnschrift pb-2 text-7xl "  >لفظ کی تلاش</h2>
      <form style={{ position: 'relative', marginLeft: 460  } }>
  <label>
    <textarea style ={{Height: 250,width:'50%'}}  type="text" name="name" />
    
  </label>
  </form>
  <button style={{
    zIndex:'999',
    padding:'1vh',
    width:'10vw',
    background:'white',
    marginLeft:'45vw'
  }}>تلاش شروع کریں</button>

</div>
<div>

</div>

    </section>    
  )
}

export default App
