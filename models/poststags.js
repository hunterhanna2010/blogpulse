'use strict';
module.exports = (sequelize, DataTypes) => {
  const postsTags = sequelize.define('postsTags', {
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  postsTags.associate = function(models) {
    // associations can be defined here
  };
  return postsTags;
};