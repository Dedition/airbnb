import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
    Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row
} from "reactstrap";
import * as spotActions from "../../store/spots";

const CreateSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const userId = useSelector(state => state.session.user.id);
    // console.log(typeof userId);

    const spots = useSelector((state) => state.spots.spots);
    const spot = useSelector((state) => state.spots.spot);
    const isLoading = useSelector((state) => state.spots.isLoading);
    const isLoaded = useSelector((state) => state.spots.isLoaded);
    const isError = useSelector((state) => state.spots.isError);
    const error = useSelector((state) => state.spots.error);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(spotActions.createSpotAction({
            userId,
            address,
            city,
            state,
            country,
            name,
            price
        }));

        history.push("/listings");
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(spotActions.updateSpot({
            address,
            city,
            state,
            country,
            name,
            price
        }));
        history.push("/listings");
    };

    useEffect(() => {
        if (spot) {
            setAddress(spot.address);
            setCity(spot.city);
            setState(spot.state);
            setCountry(spot.country);
            setName(spot.name);
            setPrice(spot.price);
        }
    }, [spot]);
    //
    return (
        <>
            <div className="app">
            </div>
            <div className="app-body">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">
                                    {spot ? "Update Spot" : "Create Spot"}
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={spot ? handleUpdate : handleSubmit}>
                                    <FormGroup row>
                                        <Label for="address" sm={2}>
                                            Address
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="text"
                                                name="address" id="address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="city" sm={2}>
                                            City
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="text"
                                                name="city" id="city"
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="state" sm={2}>
                                            State
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="text"
                                                name="state" id="state"
                                                value={state}
                                                onChange={(e) => setState(e.target.value)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="country" sm={2}>
                                            Country
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="text"
                                                name="country" id="country"
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="name" sm={2}>
                                            Name
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="text"
                                                name="name" id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="price" sm={2}>
                                            Price
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="number"
                                                name="price" id="price"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            <Button
                                                color="primary"
                                                type="submit"
                                                disabled={isLoading}>
                                                {spot ? "Update" : "Create"}
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CreateSpot;
