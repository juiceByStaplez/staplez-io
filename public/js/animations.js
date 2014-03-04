angular.module('sio.animations', [])
.animation('.toggle', function() {
  'use strict';
  return {
    leave: function(element, done) {
      TweenMax.to(element, 1, {opacity:0, onComplete: done});
    },
    enter: function(element, done) {
      TweenMax.from(element, 1, {opacity: 0, onComplete: done});
    }
  }
})
.animation('.slideIn', function() {
  return {
    leave:function(element,done) {
      TweenMax.to(element, 0.4, {x:-600, opacity:0, onComplete: done});
    },
    enter: function(element, done) {
      TweenMax.to(element, 0.4, {x:0, opacity: 1, onComplete: done});
    }
  }
})

.animation('.collapsed', function() {
  return {
    leave: function(element, done) {
      TweenMax.to(element, 0.4, {y: -400, onComplete: done});
    },
    enter: function(element, done) {
      TweenMax.to(element, 0.4, {y: 0, onComplete: done})
    }
  }
});