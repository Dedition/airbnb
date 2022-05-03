import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as spotActions from "../../store/spots";
import { Button } from "reactstrap";

const DeleteSpot = ({ spotId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const handleDelete = async (e) => {
        e.preventDefault();
        const deletedSpot = await dispatch(spotActions.removeSpot(spotId));
        if (deletedSpot) return history.push("/listings");
    };

    return (
        <div>
            <Button color="danger" onClick={handleDelete}>Delete Spot</Button>
        </div>
    );
};

export default DeleteSpot;
