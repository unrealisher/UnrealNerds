var contacts = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-contacts");
var close = popup.querySelector(".button-close");

ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: [59.9390,30.3200],
    zoom: 17,
    controls: []
  });

  var placemark = new ymaps.Placemark([59.938635, 30.323055], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/map-marker.png",
    iconImageSize: [231, 190],
    iconImageOffset: [-100,-190]
  });
  map.geoObjects.add(placemark);
};


contacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
