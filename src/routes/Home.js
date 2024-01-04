import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";

function Home (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg={require("../assets/12.jpg")}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination."
                buttonText="Travel Plan"
                url="/"
                buttonClass="show"
            />
            <Destination/>
        </>
    )
}

export default Home;