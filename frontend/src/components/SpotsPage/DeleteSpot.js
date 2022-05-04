// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import * as spotActions from "../../store/spots";
// import { Button } from "reactstrap";

// const DeleteSpot = ({ id }) => {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     console.log(id)
//     // const spot = useSelector((state) => state.spots.listOfSpots.find(spot => spot.id === id));
//     // const sessionUser = useSelector(state => state.session.user);

//     const handleDelete = async (e) => {
//         e.preventDefault();
//         const deletedSpot = await dispatch(spotActions.removeSpot(id))
//             .then(() => history.push("/listings"));
//     };

//     return (
//         <div>
//             <Button color="danger" onClick={handleDelete}>Delete Spot</Button>
//         </div>
//     );
// };

// export default DeleteSpot;
