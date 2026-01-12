

const {validationResult, matchedData} = require("express-validator");

const withErrorHandling = (callback) => {
    return async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            await callback(req, res);
        } catch(err) {
            res.status(500).json({serverError:true, error:err});
        }
    }
}

module.exports = withErrorHandling;