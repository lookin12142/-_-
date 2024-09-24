onload = () => {
  document.querySelector(".play").addEventListener("click", function () {
    document.body.classList.remove("container");
    document.querySelectorAll(".play")[0].style.display = "none";
    var audio = document.getElementById("music");
    audio.volume = "0.25";
    audio.play();
  });
};

