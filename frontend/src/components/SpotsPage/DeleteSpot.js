import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
    Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row
} from "reactstrap";
import * as spotActions from "../../store/spots";

// Delete a spot that a user created

const DeleteSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [spotId, setSpotId] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    const userId = useSelector(state => state.session.user.id);
    const spot = useSelector((state) => state.spots.spot);
    const error = useSelector((state) => state.spots.error);
    // console.log(typeof userId);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(spotActions.removeSpot({
            userId,
            spotId
        }));

        history.push("/listings");
    };

    useEffect(() => {
        if (spot) {
            setSpotId(spot.id);
            setIsLoaded(true);
        }
    }, [spot]);

    return (
        <div>
            <Card>
                <CardHeader>Delete Spot</CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="spotId">Spot Id</Label>

                                    <Input type="text" name="spotId" id="spotId" placeholder="Spot Id" value={spotId} onChange={(e) => setSpotId(e.target.value)} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button type="submit">Delete Spot</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default DeleteSpot;
