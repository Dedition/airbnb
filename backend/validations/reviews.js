const { check, validationResult } = require('express-validator');

const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors
            .array()
            .map((error) => `${error.msg}`);

        const err = Error('Bad request.');
        err.errors = errors;
        err.status = 400;
        err.title = 'Bad request.';
        next(err);
    }
    next();
};

const validatePut = [
    check('id')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an id.')
        .notEmpty()
];


const validateReview = [
    check('content')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('How about some info about your experience?'),
    check('checkIn')
        .exists({ checkFalsy: true })
        .withMessage('Was the check-in process to your liking at all?'),
    check('rating')
        .exists({ checkFalsy: true })
        .withMessage('What was your experience like?'),
    check('communication')
        .exists({ checkFalsy: true })
        .withMessage('Was communication with the host helpful?'),
    check('cleanliness')
        .exists({ checkFalsy: true })
        .withMessage('Was the cleanliness of the property up to standard?'),
    handleValidationErrors
];
