'use strict';

module.exports = function(link){
	var count = link.split('/').length;
	if (count >= 4) {
		return 'sidebar-header-4';
	} else {
		return 'sidebar-header-3';
	}
};