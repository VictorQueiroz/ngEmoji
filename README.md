ngEmoji
=======

AngularJS module to compile any emoji code

## Examples
- [Plunker](http://plnkr.co/edit/64Pf4LDDBhZFwxMKcmEm?p=preview)

## Bower
```
bower install --save ng-emoji
```

## Usage
```js
angular.module('app', ['ngEmoji', 'ngSanitize'])

.run(function($emoji){
  $emoji.setConfig({
    img_dir: '/img/emoji'
  });
});
```

```html
<input ng-model="text">

<div ng-bind-html="text | emoji"></div>
```
