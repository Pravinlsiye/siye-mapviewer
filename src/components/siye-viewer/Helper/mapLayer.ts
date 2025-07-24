import * as L from "leaflet";
import { MapProvider } from "./mapLayerConfig";

export default function AddLayers(map: any , callback: any) {
  const providers =  new MapProvider().getProviders();
  providers["ESRI_WorldImagery"].layer.addTo(map);
  const customLayerControl = L.control.layers(undefined, undefined, {
    position: "bottomleft",
  });
  const markerLayer = L.layerGroup().addTo(map);
  customLayerControl.onAdd = function () {
    const div = L.DomUtil.create("div", "custom-layer-control collapsed");
    var firstTime = false;
    for (const key in providers) {
      const provider = providers[key];
      var collapsed = firstTime ? "collapsed" : "";
      firstTime = true;
      const button = L.DomUtil.create("button", collapsed, div);
      button.innerHTML = `<img src="${provider.icon}" alt="${provider.title}" title="${provider.title}" />`;
      button.onclick = (() => {
        let isCollapsed = false;
        return () => {
          map.eachLayer((layer: any) => {
            if (layer !== provider.layer) {
              map.removeLayer(layer);
            }
          });
          provider.layer.addTo(map);
          markerLayer.addTo(map);
          callback();

          const buttons = div.querySelectorAll("button");
          if (!isCollapsed) {
            buttons.forEach((btn) => {
              if (btn !== button) {
                btn.classList.add("collapsed");
              }
            });
            div.classList.add("collapsed");
            isCollapsed = true;
          } else {
            buttons.forEach((btn) => {
              btn.classList.remove("collapsed");
            });
            div.classList.remove("collapsed");
            isCollapsed = false;
          }
        };
      })();
    }
    return div;
  };
  customLayerControl.addTo(map);
  return markerLayer;
}
