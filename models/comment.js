'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    name: DataTypes.STRING,
    content: {
      type: 'DataTypes.STRING',
      validate: {
        len: {
          args: [20, 200],
          msg: 'Comments should be between 20-200 characters'
        }
      },
    }, 
  postId: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};