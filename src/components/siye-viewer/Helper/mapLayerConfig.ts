import L from "leaflet";

export class MapProvider {
  private providers: { [key: string]: any } = {};

  constructor() {
    this.initializeProviders();
  }

  private initializeProviders() {
    this.providers["ESRI_WorldImagery"] = {
      title: "satellite",
      icon: "https://cdn-icons-png.flaticon.com/128/2642/2642502.png",
      layer: L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
          maxZoom: 20,
        }
      ),
    };

    this.providers["OpenStreetMap_Mapnik"] = {
      title: "osm",
      icon: "https://cdn-icons-png.flaticon.com/128/854/854878.png",
      layer: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    };

    this.providers["OpenStreetMap_DE"] = {
      title: "osm de",
      icon: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
      layer: L.tileLayer(
        "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          subdomains: "abc",
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap DE</a>',
        }
      ),
    };

    this.providers["OpenTopoMap"] = {
      title: "topo map",
      icon: "https://cdn-icons-png.flaticon.com/128/7441/7441629.png",
      layer: L.tileLayer(
        "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        {
          attribution:
            'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
          maxZoom: 17,
        }
      ),
    };

    this.providers["CartoDB_DarkMatter"] = {
      title: "dark",
      icon: "https://cdn-icons-png.flaticon.com/128/1076/1076928.png",
      layer: L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ),
    };

    this.providers["CartoDB_Positron"] = {
      title: "positron",
      icon: "https://cdn-icons-png.flaticon.com/128/1076/1076744.png",
      layer: L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ),
    };

    this.providers["Stadia_AlidadeSmooth"] = {
      title: "alidade smooth",
      icon: "https://cdn-icons-png.flaticon.com/128/4207/4207253.png",
      layer: L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
        {
          minZoom: 0,
          maxZoom: 20,
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        }
      ),
    };

    this.providers["Stadia_StamenToner"] = {
      title: "toner",
      icon: "https://cdn-icons-png.flaticon.com/128/2907/2907151.png",
      layer: L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png",
        {
          minZoom: 0,
          maxZoom: 20,
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://stamen.com/">Stamen Design</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        }
      ),
    };
  }

    /**
   * Method to dynamically add a new provider to the providers list
   * @param providerId - Unique identifier for the new provider
   * @param title - Title of the provider
   * @param icon - Path to the icon image
   * @param tileUrl - Tile layer URL for the provider
   * @param options - Options for the Leaflet tile layer (optional)
   */
    public addProvider(
        providerId: string,
        title: string,
        icon: string,
        tileUrl: string,
        options: L.TileLayerOptions = {}
      ) {
        this.providers[providerId] = {
          title: title,
          icon: icon,
          layer: L.tileLayer(tileUrl, options),
        };
    }
  getProviders() {
    return this.providers;
  }
}
