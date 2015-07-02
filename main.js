var element = $("<div></div>");

element.css({
  backgroundColor: "red",
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%",
  zIndex: "999",
  opacity: 0,
  pointerEvents: "none"
});

$("body").append(element);

var opacity = 0;

function increaseOpacity() {
    element.css({
      opacity: opacity
    });

    if (opacity < 1)
      opacity += .01;
}

setInterval(increaseOpacity, 18000);
