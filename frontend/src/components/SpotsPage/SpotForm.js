import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as spotActions from "../../store/spots";
import { NewForm, TypeInput, NumInput } from "../Form/Form.js";
import "./Spot.css";

const SpotForm = ({ edit, spot, closeModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [address, setAddress] = useState(edit ? spot?.address : "");
    const [city, setCity] = useState(edit ? spot?.city : "");
    const [state, setState] = useState(edit ? spot?.state : "");
    const [country, setCountry] = useState(edit ? spot?.country : "");
    const [name, setName] = useState(edit ? spot?.name : "");
    const [price, setPrice] = useState(edit ? spot?.price : "");
    const [errors, setErrors] = useState([]);
    const [validationErrors, setValidationErrors] = useState([]);


    const userId = useSelector(state => state.session.user.id);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newInfo = { userId: userId, address, city, state, country, name, price };

        if (edit) {
            const updated = await dispatch(spotActions.updateSpot(newInfo, spot?.id))
            if (updated?.errors) setErrors(updated?.errors);
            return closeModal();
        }

        const created = await dispatch(spotActions.createSpotAction(newInfo));

        if (created?.id) {
            history.push("/listing/" + created?.id);
            return closeModal();
        }
        return alert('Oops. Something went wrong. :( ');
    };

    useEffect(() => {
        const errors = [];
        if (address.length < 1 || address.length > 100) errors?.push("Address must be between 1 and 100 characters.");
        if (city.length < 1 || city.length > 10) errors?.push("City must be between 1 and 10 characters.");
        if (state.length < 1 || state.length > 2) errors?.push("State must be between 1 and 2 characters.");
        if (country.length < 1 || country.length > 10) errors?.push("Country must be between 1 and 10 characters.");
        if (name.length < 1 || name.length > 100) errors?.push("Name must be between 1 and 100 characters.");
        if (price < 100) errors?.push("Price must be unreasonable. (Greater than 100)");
        setValidationErrors(errors);
    }, [address, city, state, country, name, price]);

    return (
        <NewForm onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={edit ? 'Update' : 'Host Your Spot'}>
            <div className={edit ? '' : 'create_spot_form_modal'}>
                <>
                    <TypeInput name='Address' value={address} setState={setAddress} />
                    <TypeInput name='City' value={city} setState={setCity} />
                    <TypeInput name='State' value={state} setState={setState} />
                    <TypeInput name='Country' value={country} setState={setCountry} />
                    <TypeInput name='Name' value={name} setState={setName} />
                    <NumInput name='Price' value={price} setState={setPrice} />
                </>
            </div>

            <img id="close-modal" src="https://img.icons8.com/ios/50/000000/cancel.png" alt="close" onClick={closeModal} />
        </NewForm>
    )
};

export default SpotForm;
