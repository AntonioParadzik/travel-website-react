import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

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
        </>
    )
}

export default Home;