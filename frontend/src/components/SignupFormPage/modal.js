import React, { useState } from 'react';
import Signup from './index';
import { Modal } from '../../context/Modal';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='nav-link' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <Signup />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;
