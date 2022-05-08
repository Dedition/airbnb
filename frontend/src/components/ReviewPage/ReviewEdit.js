import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/review";
import { NewForm, NumInput } from '../Form/Form';
import ReviewFormModal from "./ReviewEditModal";


const ReviewEdit = ({ review, closeModal }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user?.id);
    const reviewId = review?.id;

    const [content, setContent] = useState(review.content);
    const [cleanliness, setCleanliness] = useState(review.cleanliness);
    const [communication, setCommunication] = useState(review.communication);
    const [rating, setRating] = useState(review.rating);
    const [errors, setErrors] = useState({});
    const [validationErrors, setValidationErrors] = useState([]);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();


    //     const updatedReview = dispatch(updateReview({ ...review, content, cleanliness, communication, rating })).catch(async (res) => {
    //         const data = await res.json();
    //         if (data && data.errors) setErrors(data?.errors);
    //     });

    //     if (updatedReview?.errors) setErrors(updatedReview?.errors);

    //     return closeModal();
    // }
    useEffect(() => {
        const errors = [];
        if (content.length < 1) errors.push('Review content is required');
        if (cleanliness.length < 1 || cleanliness.length > 5) errors.push('Cleanliness is required to be between 1 and 5');
        if (communication.length < 1 || communication.length > 5) errors.push('Communication is required to be between 1 and 5');
        if (rating.length < 1 || rating.length > 5) errors.push('Rating is required to be between 1 and 5');
        setValidationErrors(errors);
    }, [content, cleanliness, communication, rating]);


    // If there is a sessionUser show ReviewFormModal. If there isn't, render a h3
    // asking them to login to leave a review.
    return (
        <>
            {sessionUser && <ReviewFormModal closeModal={closeModal} review={review} />}
        </>
    )
};


export default ReviewEdit;
