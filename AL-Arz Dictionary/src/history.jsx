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
      <h2 style={{textAlign: "center"}} className="text-white w-full font-Bahnschrift pb-2 text-7xl "  >  گُذَشْتَہ لفظ     </h2>
      <form style={{ position: 'relative', marginLeft: 460  } }>

  </form>
  <div style={{display:'flex',width:'100vw',justifyContent:'center'}}>

    <table style={{
        color:'white'
        ,marginTop:'2rem',
        fontSize:'2rem'
    }}>
        <tr style={{border:'1px solid white'}}>
            <td style={{border:'1px solid white',padding:'2rem'}}>WORD</td>
            <td style={{border:'1px solid white',padding:'2rem'}}>MEANING</td>
        </tr>
        <tr style={{padding:'6vh',border:'1px solid white'}}>
            <td style={{border:'1px solid white',padding:'2rem'}}>Rizwan</td>
            <td style={{border:'1px solid white',padding:'2rem'}}>Basharat</td>
        </tr>
        <tr style={{padding:'6vh',border:'1px solid white'}}>
                <td style={{border:'1px solid white',padding:'2rem'}}>Ahmad</td>
            <td style={{border:'1px solid white',padding:'2rem'}}>Younus</td>
        </tr>
    </table>

        </div>
</div>
<div>

</div>

    </section>    
  )
}

export default App
