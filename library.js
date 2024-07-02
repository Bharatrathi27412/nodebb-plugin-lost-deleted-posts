'use strict';

const controllers = require('nodebb-plugin-lost-deleted-posts/lib/controllers');

const plugin = {};

plugin.filteredTopics = function ({tids, topics, fields, keys}) {
	const removeDeletedTopics = topics.filter(topic => !topic.deleted);

	return({tids, topics:removeDeletedTopics, fields, keys})
}


module.exports = plugin;
