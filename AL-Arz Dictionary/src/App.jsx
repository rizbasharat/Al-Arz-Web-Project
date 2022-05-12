import Nav from "./components/Nav"
function App ()
{
  return (
    <section className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2">
      <Nav />
      <div className="md:container px-2  pt-5 md:text-left text-center">
        <h1 className="text-2xl  text-white">
          <span className="text-[#ffffff70] font-bold mr-2"></span> !السلام علیکم</h1>
        <div className="md:flex items-center md:justify-between  pt-6 ">
          <img src="./src/assets/image-moon.png" className="md:w-[36%] w-[52%]  md:mx-0 mx-auto md:py-0 py-4" />
          <div className="md:w-1/2 ">
            
            <h1 className="text-white w-full font-Bellefair pb-2 text-7xl">ہماری دوزبانی لغت میں خوش آمدید</h1>
            <p className="text-[#d2d8f9] font-extralight text-sm md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10 border-b-[0.0px] border-[#ffffff66]">
            ایک کامل لغت جو رضوان ، احمد اور زینب نے بنائی ہے جو پہلے کبھی نہیں دیکھی گئی۔
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default App
