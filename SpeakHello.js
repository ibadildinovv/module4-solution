// Шаг 2: Обернуть весь код в IIFE
(function(window) {
  // Шаг 3: Создать объект helloSpeaker
  var helloSpeaker = {};

  // Не прикрепляем переменную speakWord к объекту
  var speakWord = "Hello";

  // Шаг 4: Прикрепить функцию speak к helloSpeaker
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // Шаг 5: Экспортировать helloSpeaker в глобальную область видимости
  window.helloSpeaker = helloSpeaker;
})(window);