import "./Form.css";
import React from "react";
// import { useState, useEffect } from 'react';
// import reactstrap form
// import { ButtonGroup } from "reactstrap";
import { Form, FormGroup, Label, Input, Button, } from 'reactstrap';

export const NewForm = ({ onSub, validationErrors, errors, buttonName, children }) => (
    <>
        <Form className='column-listing' onSubmit={onSub}>
            <div className="create_spot_form_modal">
                {children}
                <Button className='form-button' type='submit' disabled={validationErrors.length > 0}>{buttonName}</Button>
                </div>
        </Form>

        {validationErrors.length > 0 && (<>
            <div>Before You Submit...</div>
            <div className='line'></div>
        </>)}

        <ul className='state-errors'>
            {validationErrors.length > 0 && validationErrors.map(error =>
                <li key={error} className='error'>{error}</li>
            )}
        </ul>

        <ul className='form-errors'>
            {errors.lenth > 0 && (<li className='line'></li>)}
            {errors.length > 0 && errors.filter(error => error !== 'Invalid value')
                .map((error, id) => <li key={id}>{error}</li>)
            }
        </ul>
    </>
)

export const TypeInput = ({ type, state, setState, name }) => {
    const formattedType = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <FormGroup className='form-input'>
            <Label htmlFor={formattedType}>{name}</Label>
            <Input
                type={type || 'text'}
                id={formattedType}
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder={`Enter ${name}`}
                required={false}
            />
        </FormGroup>
    )
}

export const NumInput = ({ min, name, state, setState }) => {
    const formattedType = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <FormGroup className='form-input'>
            <Label htmlFor={formattedType}>{name}</Label>
            <Input className='inputField'
                type='number'
                id={formattedType}
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder={`Enter ${name}`}
                min={min}
                required={false}
            />
        </FormGroup>
    )
}
