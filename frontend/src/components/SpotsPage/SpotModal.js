import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotForm from './SpotForm';

// import { Button } from 'reactstrap';

const SpotModal = ({ name = 'Become a Host', edit = props.edit, spot = props.spot }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button className={'nav-link' + edit ? 'edit' : ''} color="primary" onClick={() => setShowModal(true)}>{name}</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SpotForm edit={edit} spot={spot} closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </div>
    );
}

export default SpotModal;
