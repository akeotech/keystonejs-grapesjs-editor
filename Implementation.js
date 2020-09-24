const { Text } = require("@keystonejs/fields");

class GrapeJSEditorImplementation extends Text.implementation {
    constructor(path, { ...fieldConfig }, listConfig) {
        super(...arguments)
    }
}

module.exports = {
    GrapeJSEditorImplementation,
    MongoIntegerInterface: Text.adapters.mongoose,
    KnexIntegerInterface: Text.adapters.knex,
}
