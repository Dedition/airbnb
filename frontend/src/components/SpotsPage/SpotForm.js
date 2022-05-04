import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as spotActions from "../../store/spots";
import { Form } from "reactstrap";
import { newForm, typeInput, numInput } from "../Form/Form";

const SpotForm = ({ edit, spot, closeModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [address, setAddress] = useState(edit ? spot?.address : "");
    const [city, setCity] = useState(edit ? spot?.city : "");
    const [state, setState] = useState(edit ? spot?.state : "");
    const [country, setCountry] = useState(edit ? spot?.country : "");
    const [name, setName] = useState(edit ? spot?.name : "");
    const [price, setPrice] = useState(edit ? spot?.price : 0);
    const [errors, setErrors] = useState([]);
    const [validationErrors, setValidationErrors] = useState([]);


    const userId = useSelector(state => state.session.user.id);
    // console.log(typeof userId);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (edit) {
            dispatch(spotActions.updateSpot({
                userId,
                address,
                city,
                state,
                country,
                name,
                price
            }));

            history.push("/listings");
        }

        const updated = await dispatch(spotActions.updateSpot(newForm, spot?.id))
        if (updated?.errors) {
            setErrors(updated?.errors);
            return closeModal();
        }

        const created = await dispatch(spotActions.createSpotAction(newForm));

        if (created?.errors) {
            setErrors(created?.errors);
            return closeModal();
        }
        if (created?.id) {
            history.push("/listings");
            return closeModal();
        }
        return 'Failed to Create';
    };

    useEffect(() => {
        const errors = [];
        if (address.length < 1) errors.push("Address is required");
        if (city.length < 1) errors.push("City is required");
        if (state.length < 1) errors.push("State is required");
        if (country.length < 1) errors.push("Country is required");
        if (name.length < 1) errors.push("Name is required");
        if (price < 1) errors.push("Price is required");
        setErrors(errors);
    }, [address, city, state, country, name, price]);

    return (
        <newForm onSub={handleSubmit} validationErrors={validationErrors} errors={errors}
            btnName={edit ? 'Update' : 'Host Your Spot'}>
            <div className={edit ? '' : 'create-spot-form'}>
                <typeInput name='Address' value={address} onChange={e => setAddress(e.target.value)} />
                <typeInput name='City' value={city} onChange={e => setCity(e.target.value)} />
                <typeInput name='State' value={state} onChange={e => setState(e.target.value)} />
                <typeInput name='Country' value={country} onChange={e => setCountry(e.target.value)} />
                <typeInput name='Name' value={name} onChange={e => setName(e.target.value)} />
                <numInput name='Price' value={price} onChange={e => setPrice(e.target.value)} />
            </div>

            <input styles={{ display: 'none' }} type="submit" value="Submit" />
            <img id="close-modal" src="https://img.icons8.com/ios/50/000000/cancel.png" alt="close" onClick={closeModal} />
        </newForm>
    )
};

export default SpotForm;
