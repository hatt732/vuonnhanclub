(function($) {
    'use strict';
    $(document).ready(function() {
         (function() {
         const second = 1000,
         minute = second * 60,
         hour = minute * 60,
         day = hour * 24;

         const birthday = "Oct 1, 2022 00:00:00",
         countDown = new Date(birthday).getTime(),
         x = setInterval(function() {

             let now = new Date().getTime(),
                 distance = countDown - now;

             document.getElementById("days").innerText = Math.floor(distance / (day)),
                 document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                 document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                 document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

             //do something later when date is reached
             if (distance < 0) {
                document.getElementById("days").innerText = '00',
                document.getElementById("hours").innerText = '00',
                document.getElementById("minutes").innerText = '00',
                document.getElementById("seconds").innerText = '00';
                document.getElementById("comming").innerText = 'Het Han';
                let headline = document.getElementById("headline"),
                     countdown = document.getElementByClassName("countdown"),
                     content = document.getElementById("content");

                 headline.innerText = "It's my birthday!";
                 countdown.style.display = "none";
                 content.style.display = "block";

                 clearInterval(x);
             }
             //seconds
         }, 0)
         }());
             });
})(jQuery);