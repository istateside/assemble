import DS from 'ember-data';

const { attr, hasMany } = DS;

/**
  @class model:user
  @extends DS.Model
 */

export default DS.Model.extend({
  // Attributes

  /**
    User's email address.

    @attribute email
    @type String
   */
  email: attr('string'),

  /**
    User's username.

    @attribute username
    @type String
   */
  username: attr('string'),

  /**
    User's password.

     @attribute password
     @type String
  */
  password: attr('string'),

  /**
    User's password confirmation.

     @attribute password
     @type String
  */
  passwordConfirmation: attr('string'),

  /**
    The text of a user's profile.

    @attribute profileText
    @type String
   */
  profileText: attr('string'),

  // Relationships

  teams: hasMany()
});
