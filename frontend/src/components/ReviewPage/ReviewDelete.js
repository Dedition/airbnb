import { deleteReview } from "../../store/review";
import { useDispatch, useSelector } from "react-redux";

//! This will be a button that deletes the review

const ReviewDelete = ({ id }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteReview(id));

    return (
        <button className="btn btn-danger" onClick={handleDelete}>
            Delete
        </button>
    );
};

export default ReviewDelete;
