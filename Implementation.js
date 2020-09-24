const { Text } = require("@keystonejs/fields");
const { LocalFileAdapter } = require('@keystonejs/file-adapters')


class GrapeJSEditorImplementation extends Text.implementation {
    constructor(path, { ...fieldConfig }, listConfig) {
        super(...arguments)
        if (fieldConfig.adminConfig) {
            new LocalFileAdapter({
                src: fieldConfig.adminConfig.filePath,
                path: fieldConfig.adminConfig.filePath,
            });
        }

    }
}

module.exports = {
    GrapeJSEditorImplementation,
    MongoIntegerInterface: Text.adapters.mongoose,
    KnexIntegerInterface: Text.adapters.knex,
}
