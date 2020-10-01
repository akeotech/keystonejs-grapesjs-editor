const { GrapeJSEditorImplementation, MongoIntegerInterface, KnexIntegerInterface } = require('./Implementation');
const { Text } = require('@keystonejs/fields');


module.exports = {
  type: 'GrapeJSEditorImplementation',
  implementation: GrapeJSEditorImplementation,
  views: {
    Controller: require.resolve('./views/Controller'),
    Field: require.resolve('./views/Field'),
    Filter: Text.views.Filter,
    Cell: require.resolve('./views/Cell'),
  },
  adapters: {
    mongoose: MongoIntegerInterface,
    knex: KnexIntegerInterface,
  },
};
