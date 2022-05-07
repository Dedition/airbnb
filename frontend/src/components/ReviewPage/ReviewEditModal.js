import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewForm from "./ReviewForm";

const ReviewFormModal = ({ reviews }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button id="new-review-button" className="btn btn-primary" onClick={(e) => setShowModal(true)}>
                Edit me
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm reviews={reviews} closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default ReviewFormModal;
