document.querySelector('.con-ques').addEventListener('click', function () {
  var expquesElement = document.querySelector('.exp-ques');
  expquesElement.classList.toggle('active');
});

document.querySelector('.con-perf').addEventListener('click', function () {
    var expperfElement = document.querySelector('.exp-perf');
    expperfElement.classList.toggle('active');
});

document.querySelector('.con-rule').addEventListener('click', function () {
    var expruleElement = document.querySelector('.exp-rule');
    expruleElement.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function() {
    var conceptElements = document.querySelectorAll('.concept');
    var backElement = document.querySelector('.back');

    conceptElements.forEach(function(conceptElement) {
        conceptElement.addEventListener('click', function () {
            backElement.classList.toggle('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var batuElements = document.querySelectorAll('.batu');
    var explainElements = document.querySelectorAll('.explain');

    batuElements.forEach(function(batuElement, index) {
        batuElement.addEventListener('click', function () {
            explainElements[index].classList.remove('active');
            
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var batuElements = document.querySelectorAll('.batu');
    var backElement = document.querySelector('.back');

    batuElements.forEach(function(batuElement) {
        batuElement.addEventListener('click', function () {
            backElement.classList.remove('active');
        });
    });
});
