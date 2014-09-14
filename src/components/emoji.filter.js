angular.module('ngEmoji.filters.emoji', [])

.filter('emoji', function ($emoji) {
  return function (input) {
  	if(!input) return '';
    return $emoji.replace(input);
  };
});