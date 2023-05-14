import { useContext } from 'react';
import Card from '../ui/Card';
import styles from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)
    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    };
    return (
        <li className={styles.item}>
            <Card>
                <div className={styles.image}><img src={props.image} alt={props.title} /></div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from favorites' : 'To favorites'}</button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
