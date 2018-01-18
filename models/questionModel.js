const orm = require("../config/orm.js");

const question = 
{
	findAll: function(cb)
	{
		orm.findAll("questions", function(result)
		{
			cb(result)
		});
	},

	findDistinct: function(field, cb)
	{
		orm.findDistinct(field, "questions", function(result)
		{
			cb(result)
		})
	},

	findDistinctWhere: function(field, whereField, whereValue, cb)
	{
		orm.findDistinct(field, "questions", whereField, whereValue, function(result)
		{
			cb(result)
		})
	}
}


module.exports = question;