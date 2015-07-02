var element = $("<div></div>");
element.css({
  backgroundColor: "red",
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%",
  zIndex: "999",
  opacity: .5
});
$("body").append(element);
