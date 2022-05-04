import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as spotActions from "../../store/spots";
import { NewForm, TypeInput, NumInput } from "../Form/Form.js";

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
    // console.log(typeof userId);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        if (edit) {
            formData.append("id", spot?.id);
        }
        formData.append('userId', userId);
        formData.append("address", address);
        formData.append("city", city);
        formData.append("state", state);
        formData.append("country", country);
        formData.append("name", name);
        formData.append("price", price);


        if (edit) {
            const updated = await dispatch(spotActions.updateSpot(formData, spot?.id))
            if (updated?.errors) setErrors(updated?.errors);
            return closeModal();
        }

        const created = await dispatch(spotActions.createSpotAction(formData));

        if (created?.errors) setErrors(created?.errors);
        if (created?.id) {
            history.push("/listings/" + created?.id);
            return closeModal();
        }
        return 'Oops. Something went wrong. :( ';
    };

    useEffect(() => {
        const errors = [];
        if (address.length < 1) errors.push("Address is required");
        if (city.length < 1) errors.push("City is required");
        if (state.length < 1) errors.push("State is required");
        if (country.length < 1) errors.push("Country is required");
        if (name.length < 1) errors.push("Name is required");
        if (price < 1) errors.push("Price is required");
        setValidationErrors(errors);
    }, [address, city, state, country, name, price]);

    return (
        <NewForm onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={edit ? 'Update' : 'Host Your Spot'}>
            <div className={edit ? '' : 'create_spot_form_modal'}>
                <div>
                    <TypeInput name='Address' value={address} setState={setAddress} />
                    <TypeInput name='City' value={city} setState={setCity} />
                    <TypeInput name='State' value={state} setState={setState} />
                    <TypeInput name='Country' value={country} setState={setCountry} />
                    <TypeInput name='Name' value={name} setState={setName} />
                    <NumInput name='Price' value={price} setState={setPrice} />
                </div>
            </div>

            <input styles={{ cursor: 'pointer' }} type="submit" value="Submit" />
            <img id="close-modal" src="https://img.icons8.com/ios/50/000000/cancel.png" alt="close" onClick={closeModal} />
        </NewForm>
    )
};

export default SpotForm;
