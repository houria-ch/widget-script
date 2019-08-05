 (function() {
     var IDelement = document.getElementById('custplaceWidget');
     var marque = IDelement.getAttribute('data-id-marque'); //pour obtenir la valeur du data attribute.
     if (IDelement && marque) {
         var frame = document.createElement('iframe');
         frame.src = "https://houria-ch.github.io/widget/#" + marque;
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
