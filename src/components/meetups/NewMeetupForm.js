import {useRef} from 'react';
import Card from '../ui/Card';
import styles from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const title = titleInputRef.current.value;
        const image = imageInputRef.current.value;
        const address = addressInputRef.current.value;
        const description = descriptionInputRef.current.value;
        const meetupData = {
            title: title,
            image: image,
            address: address,
            description: description
        };

        props.onAddMeetup(meetupData);
    };

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Meetup image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'>Meetup address</label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Meetup description</label>
                    <textarea required id='description' rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
