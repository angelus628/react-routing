import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
    const favoritesCtx = useContext(FavoritesContext);

    if (favoritesCtx.totalFavorites === 0) {
        return (
            <section>
                <h1>My Favorites</h1>
                <p>You got no favorites. Start adding some</p>
            </section>
        );
    }

    return (
        <section>
            <h1>My Favorites</h1>
            <MeetupList meetups={favoritesCtx.favorites}></MeetupList>
        </section>
    );
};

export default Favorites;
