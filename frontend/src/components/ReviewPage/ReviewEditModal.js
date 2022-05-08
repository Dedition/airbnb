import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewForm from "./ReviewForm";
import EditReal from "./EditReal";
import { useSelector } from "react-redux";

const ReviewEditModal = ({ review }) => {
    const sessionUser = useSelector(state => state?.session?.user);
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            {sessionUser && (
                <button id="new-review-button" className="btn btn-primary" onClick={(e) => setShowModal(true)}>
                    Edit me
                </button>
            )}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditReal review={review} closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default ReviewEditModal;
