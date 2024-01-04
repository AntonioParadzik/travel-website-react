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
        </>
    )
}

export default Service;