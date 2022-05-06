import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createReview, getReviews } from "../../store/review";
import { NewForm, NumInput } from '../Form/Form';

const ReviewForm = ({ closeModal }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const userId = useSelector(state => state.session.user.id);

    useEffect(() => { dispatch(getReviews(id)) }, [dispatch]);

    const [content, setContent] = useState('');
    const [cleanliness, setCleanliness] = useState(0);
    const [communication, setCommunication] = useState(0);
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState({});
    const [validationErrors, setValidationErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = await dispatch(createReview({ content, cleanliness, communication, rating, userId })).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });

        if (newReview?.errors) setErrors(newReview?.errors);

        return closeModal();

        // const newReview = await dispatch(createReview({
        //     userId, id, content, cleanliness, communication, rating
        // })).catch(async (res) => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(data.errors);
        // });

        // if (newReview?.errors) setErrors(newReview?.errors);

        // return closeModal();
    }

    useEffect(() => {
        const errors = [];
        if (content.length < 1) errors.push('Review content is required');
        if (cleanliness < 1 || communication < 1 || rating < 1) errors.push(`Sorry, but [INCLUDE] rating must be between 1 and 5`);
        setValidationErrors(errors);
    }, [content, cleanliness, communication, rating]);

    return (
        <NewForm onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={'Post'}>
            <ul>
                <li><label htmlFor='content'>Review Content</label></li>
                <li><textarea name='content' id='content' value={content} onChange={(e) => setContent(e.target.value)} placeholder="Review" /></li>
            </ul>
            <NumInput min={1} name='Cleanliness' state={cleanliness} setState={setCleanliness} required={false} />
            <NumInput min={1} name='Communication' state={communication} setState={setCommunication} required={false} />
            <NumInput min={1} name='Rating' state={rating} setState={setRating} required={false} />
        </NewForm>
    )
}



export default ReviewForm;
