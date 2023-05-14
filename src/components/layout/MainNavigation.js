import {Link} from 'react-router-dom';
import styles from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

const MainNavigation = () => {
    const favoritesCtx = useContext(FavoritesContext);
    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to='/'>All meetups</Link></li>
                    <li><Link to='/meetup/new'>New meetup</Link></li>
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={styles.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
