import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { SpotForm } from './SpotForm';

// import { Button } from 'reactstrap';

const SpotFormModal = ({ name = 'Become a Host', edit = false, spot = null }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SpotForm edit={edit} spot={spot} closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default SpotFormModal;
