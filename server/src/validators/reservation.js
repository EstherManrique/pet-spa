const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateSave = [
  check("clientName")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .withMessage('Error reservation clientName'),
  check("petName")
    .exists()
    .not()
    .isEmpty()
    .isString()
    .withMessage('Error reservation petName'),
  check("date")
    .exists()
    .not()
    .isEmpty()
    .isISO8601()
    .withMessage('Error reservation date, must be aaaa/mm/dd hh:mm'),
  check("status")
    .exists()
    .not()
    .isEmpty()
    .isIn(['pending', 'confirmed', 'canceled'])
    .withMessage('Error reservation status'),
  check("clientEmail")
    .optional({
      checkFalsy: true
    })
    .isString()
    .isEmail()
    .withMessage('Must be a valid email'),
  check("clientPhone")
    .exists()
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({min: 10, max: 10})
    .withMessage('Error client phone, must be ten digits'),
  check('storeId')
    .isMongoId()
    .withMessage("Must be a valid storeID"),
  check('serviceId')
    .isMongoId()
    .withMessage("Must be a valid serviceId"),
  (request, response, next) => {
    validateResult(request, response, next);
  }  
];

const validateUpdate = [
  check('id')
    .isMongoId()
    .withMessage("Must be a valid MongoID"),
  check("clientName")
    .optional({
      checkFalsy: false
    })
    .not()
    .isEmpty()
    .isString(),
  check("petName")
    .optional({
      checkFalsy: false
    })
    .not()
    .isEmpty()
    .isString(),
  check("date")
    .optional({
      checkFalsy: false
    })
    .not()
    .isEmpty()
    .isISO8601()
    .withMessage('Error reservation date, must be aaaa/mm/dd hh:mm'),
  check("status")
    .optional({
      checkFalsy: false
    })
    .not()
    .isEmpty()
    .isIn(['pending', 'confirmed', 'canceled']),
  check("clientEmail")
    .optional({
      checkFalsy: true
    })
    .isString()
    .isEmail(),
  check("clientPhone")
    .optional({
      checkFalsy: false
    })
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({min: 10, max: 10})
    .withMessage('Error client phone, must be ten digits'),
  check('storeId')
    .optional({
      checkFalsy: false
    })
    .isMongoId(),
  check('serviceId')
    .optional({
      checkFalsy: false
    })
    .isMongoId(),
  (request, response, next) => {
    validateResult(request, response, next);
  }  
];

const validateDelete = [
  check('id')
    .isMongoId()
    .withMessage('Must be a valid MongoID'),
  (request, response, next) => {
    validateResult(request, response, next);
  }
];

const validateListStore = [
  check('storeId')
    .isMongoId()
    .withMessage('Must be a valid MongoID'),
  (request, response, next) => {
    validateResult(request, response, next);
  }  
];

module.exports = { validateSave, validateUpdate, validateDelete, validateListStore };