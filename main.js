document.addEventListener("DOMContentLoaded", function () {
      const images = document.querySelectorAll(".portfolio-image");

      images.forEach(function (image) {
        image.addEventListener("click", function () {
          const info = this.querySelector(".portfolio-li-information");
          if (info.style.display === "none") {
            info.style.display = "block";
          } else {
            info.style.display = "none";
          }
        });
      });
    });