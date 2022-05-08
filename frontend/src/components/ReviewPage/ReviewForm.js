import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createReview, getReviews } from "../../store/review";
import { NewForm, NumInput } from '../Form/Form';

const ReviewForm = ({ closeModal }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const userId = useSelector(state => state.session.user.id);

    useEffect(() => { dispatch(getReviews(id)) }, [dispatch, id]);

    const [content, setContent] = useState('');
    const [cleanliness, setCleanliness] = useState(0);
    const [communication, setCommunication] = useState(0);
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState({});
    const [validationErrors, setValidationErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = await dispatch(createReview({ content, cleanliness, communication, rating, userId }, id)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });

        if (newReview?.errors) setErrors(newReview?.errors);

        return closeModal();
    }

    useEffect(() => {
        const errors = [];
        if (content.length < 1) errors.push('Review content is required');
        if (cleanliness < 1 || cleanliness > 5) errors.push('Cleanliness rating must be between 1 and 5');
        if (communication < 1 || communication > 5) errors.push('Communication rating must be between 1 and 5');
        if (rating < 1 || rating > 5) errors.push('Rating must be between 1 and 5');
        setValidationErrors(errors);
    }, [content, cleanliness, communication, rating]);

    return (
        <NewForm onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={'Post'}>
            <div className="form-input">
                <label htmlFor='content'>Review Content</label>
            </div>
            <div className="form-input">
                <textarea name='content' id='content' value={content} onChange={(e) => setContent(e.target.value)} placeholder="Review" />
            </div>
            <NumInput min={1} name='Cleanliness' state={cleanliness} setState={setCleanliness} required={false} />
            <NumInput min={1} name='Communication' state={communication} setState={setCommunication} required={false} />
            <NumInput min={1} name='Rating' state={rating} setState={setRating} required={false} />
        </NewForm>
    )
}



export default ReviewForm;
