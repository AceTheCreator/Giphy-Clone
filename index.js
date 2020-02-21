// Setting up map view

window.onload = function () {
  L.mapquest.key = 'rLbzy3HX4G1X1meYxWAbstb1pAp9aayG';
  const baseLayer = L.mapquest.tileLayer('map');

  const map = L.mapquest.map('map', {
    center: [29.953745, -90.074158],
    layers: baseLayer,
    zoom: 10,
  });

  L.control.layers({
    Map: baseLayer,
  }).addTo(map);

  const drawnItems = L.featureGroup().addTo(map);

  map.addControl(new L.Control.Draw({
    edit: {
      featureGroup: drawnItems,
      poly: {
        allowIntersection: false,
      },
    },
    draw: {
      polygon: {
        allowIntersection: false,
        showArea: true,
      },
    },
  }));

  map.on(L.Draw.Event.CREATED, (event) => {
    const { layer } = event;

    drawnItems.addLayer(layer);
  });
};
