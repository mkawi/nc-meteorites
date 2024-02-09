import Earth from "../components/Earth";
import Navigation from "../components/Navigation";

function Globe({ meteorites }) {
    return (
        <main>
            <Navigation total={meteorites.length} />
            <Earth meteorites={meteorites} />
        </ main>
    );
}

export default Globe;
