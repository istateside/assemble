import ActiveModelAdapter from 'active-model-adapter';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:3000'
});
