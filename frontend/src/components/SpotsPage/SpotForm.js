import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as spotActions from "../../store/spots";
import { newForm, typeInput, numInput } from "../Form/Form";

const SpotForm = () => {
