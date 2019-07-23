 (function() {
     var IDelement = document.getElementById('custplaceWidget');
     if (IDelement) {

         var frame = document.createElement('iframe');
         frame.src = "https://houria-ch.github.io/projet-widget/";
         IDelement.appendChild(frame);
         frame.style.height = "195px";
         frame.style.paddingTop = "25px";
         frame.style.marginBottom = "-75px";
         frame.style.border = "none";
         frame.style.width = "100%";

     } else {
         console.log("error: id is incorrect");

     }
 })();