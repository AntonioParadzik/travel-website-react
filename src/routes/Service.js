import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Service (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={require("../assets/night.jpg")}
                title="Service"
            />
            <Footer/>
        </>
    )
}

export default Service;