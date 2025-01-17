const Joi = require('@hapi/joi');
const { CaseInsensitiveSchema } = require('../schema');

const constraints = require('./_constraints');

/**
 * Object used, when instantiating new Barion object.
 */
const schema = Joi.object({
    POSKey: Joi.string().required()
        .guid(),
    Environment: Joi.string().optional()
        .valid('test', 'prod')
        .default('test'),
    FundingSources: Joi.array().optional()
        .items(
            Joi.string().valid(...constraints.FundingSources)
        )
        .length(1)
        .default([ 'All' ]),
    GuestCheckOut: Joi.boolean().optional()
        .default(true),
    Locale: Joi.string().optional()
        .valid(...constraints.Locale)
        .default('hu-HU'),
    Currency: Joi.string().optional()
        .valid(...constraints.Currency)
        .default('HUF'),
    ValidateModels: Joi.boolean().optional()
        .default(true)
});

module.exports = new CaseInsensitiveSchema(schema);
