$(document).ready(function(){


         function realTime(){
         var today = new Date();
         var hour = today.getHours();
         var minute = today.getMinutes();
         var second = today.getSeconds();

         hour = (hour < 10) ? "0" + hour : hour;
         minute = (minute < 10) ? "0" + minute : minute;
         second = (second < 10) ? "0" + second : second;

         $(".time-txt").text(hour + ":" + minute + ":" + second);

         setTimeout(realTime, 1000);

         }

         realTime();
})