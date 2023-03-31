
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import Navbar from "../components/navbar/Navbar";

function Main() {
    return (
        <main>
            <Hero />
            <Movies />
            <AddMovieForm />
        </main>
    );
}

function Home() {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default Home;