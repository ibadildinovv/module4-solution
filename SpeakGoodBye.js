// Шаг 6: Обернуть весь код в IIFE
(function(window) {
  // Шаг 7: Создать объект byeSpeaker
  var byeSpeaker = {};
  
  // Не прикрепляем переменную speakWord к объекту
  var speakWord = "Good Bye";

  // Шаг 8: Прикрепить функцию speak к byeSpeaker
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // Шаг 9: Экспортировать byeSpeaker в глобальную область видимости
  window.byeSpeaker = byeSpeaker;
})(window);