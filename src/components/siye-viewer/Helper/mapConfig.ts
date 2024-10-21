export class MapConfig {
    center: [number, number];
    zoom: number;
    maxZoom: number;

    constructor( center: [number, number], zoom: number, maxZoom: number) {
        this.center = center;
        this.zoom = zoom;
        this.maxZoom = maxZoom;
    }
  
    static GetDefault() : MapConfig {
      return new MapConfig([13.1, 80.2], 10, 20);
    }
  }