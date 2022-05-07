import React, { useState, useEffect } from "react";
import { Modal } from '../../context/Modal';
import ReviewForm from "./ReviewForm";

// TODO ——————————————————————————————————————————————————————————————————————————————————
// TODO                                Render a modal page with a new review button
// TODO ——————————————————————————————————————————————————————————————————————————————————

const ReviewModal = ({ reviews }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button id="new-review-button" className="btn btn-primary" onClick={(e) => setShowModal(true)}>Would you like to leave a review?</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm reviews={reviews} closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default ReviewModal;
