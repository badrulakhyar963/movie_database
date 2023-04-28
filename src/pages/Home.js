import Footer from "../components/Footer/footer";
import Hero from "../components/Hero/hero";
import Navbar from "../components/Navbar/navbar";
import Provinces from "../components/Provinces/provinces";
import FormCovid from "../components/formCovid/formCovid";
import { useState } from "react";
import data from "../utils/constants/provinces";
import Globals from "../components/globals/globals";


function Main() {

  const [provinces, setProvinces] = useState(data.provinces); 
  return (
    <main>
      <Hero/>
      <Globals/>
      <Provinces provinces={provinces} setProvinces={setProvinces}/>
      <FormCovid  provinces={provinces} setProvinces={setProvinces}/>
      
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Footer/>
    </>
  );
}

export default Home;
