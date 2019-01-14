import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr('string'),
	email:DS.attr('string'),
	phone:DS.attr('string'),
	website:DS.attr('string'),
	post: DS.hasMany('post', { async: true})
});