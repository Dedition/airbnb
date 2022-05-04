import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import SpotForm from './SpotForm';
import { Button } from 'reactstrap';

// import { Button } from 'reactstrap';

const SpotFormModal = ({ name = 'Become a Host', edit = false, spot = null }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Button className={edit ? 'edit' : ''} color="primary" onClick={() => setShowModal(true)}>{name}</Button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SpotForm edit={edit} spot={spot} closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </div>
    );
}

export default SpotFormModal;
