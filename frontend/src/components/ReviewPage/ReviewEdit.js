import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateReview } from "../../store/review";
import { NewForm, NumInput } from '../Form/Form';

const ReviewEdit = ({ review, closeModal }) => {
    const dispatch = useDispatch();
    // const userId = useSelector(state => state.session.user.id);

    const [content, setContent] = useState(review.content);
    const [cleanliness, setCleanliness] = useState(review.cleanliness);
    const [communication, setCommunication] = useState(review.communication);
    const [rating, setRating] = useState(review.rating);
    const [errors, setErrors] = useState({});
    const [validationErrors, setValidationErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();


        const updatedReview = await dispatch(updateReview({ ...review, content, cleanliness, communication, rating })).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });

        if (updatedReview?.errors) setErrors(updatedReview?.errors);

        return closeModal();
    }

    // const updatedReview = await dispatch(updateReview({ ...review, content, cleanliness, communication, rating })
    //     .catch(async (res) => {
    //         const data = await res.json();
    //         if (data && data.errors) setErrors(data.errors);
    //     })

    // if (updatedReview?.errors) setErrors(updatedReview?.errors);

    // return closeModal();
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const updatedReview = {
    //         ...review, content, cleanliness, communication, rating
    //     }.catch(async (res) => {
    //         const data = await res.json();
    //         if (data && data.errors) setErrors(data.errors);
    //     });

    //     dispatch(updateReview(updateReview))
    //         .then(() => closeModal())
    //         .catch(async (res) => {
    //             const data = await res.json();
    //             if (data && data.errors) setErrors(data.errors);
    //         });

    //     return closeModal();
    // }

    useEffect(() => {
        const errors = [];
        if (content.length < 1) errors.push('Review content is required');
        if (cleanliness < 1 || communication < 1 || rating < 1) errors.push(`Sorry, but [REPLACE] rating must be between 1 and 5`);
        setValidationErrors(errors);
    }, [content, cleanliness, communication, rating]);

    return (
        <NewForm onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={'Update'}>
            <ul>
                <li><label htmlFor='content'>Review Content</label></li>
                <li><textarea name='content' id='content' value={content} onChange={(e) => setContent(e.target.value)} placeholder="C'mon, do it" /></li>
            </ul>
            <NumInput min={1} name='Cleanliness' state={cleanliness} setState={setCleanliness} required={false} />
            <NumInput min={1} name='Communication' state={communication} setState={setCommunication} required={false} />
            <NumInput min={1} name='Rating' state={rating} setState={setRating} required={false} />
        </NewForm>
    )

};


export default ReviewEdit;
