angular.module('ngEmoji.services.emoji', [])

.factory('$emoji', function () {
	return emojify;
});