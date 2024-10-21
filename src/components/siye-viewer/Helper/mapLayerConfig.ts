import L from "leaflet";

export class MapProvider {
  private providers: { [key: string]: any } = {};

  constructor() {
    this.initializeProviders();
  }

  private initializeProviders() {
    this.providers["HERE_satelliteDay"] = {
      title: "satellite",
      icon: "./media/here_satelliteday.png",
      layer: L.tileLayer(
        "https://{s}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?app_id=Y8m9dK2brESDPGJPdrvs&app_code=dq2MYIvjAotR8tHvY8Q_Dg",
        {
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">SatelliteDay</a>',
          subdomains: "1234",
          maxZoom: 20,
        }
      ),
    };

    this.providers["OpenStreetMap_Mapnik"] = {
      title: "osm",
      icon: "./media/openstreetmap_mapnik.png",
      layer: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    };

    this.providers["OpenStreetMap_DE"] = {
      title: "osm de",
      icon: "./media/openstreetmap_de.png",
      layer: L.tileLayer(
        "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
        {
          maxZoom: 20,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap_De</a>',
        }
      ),
    };

    this.providers["HERE_normalDay"] = {
      title: "normalday",
      icon: "./media/here_normalday.png",
      layer: L.tileLayer(
        "https://{s}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=Y8m9dK2brESDPGJPdrvs&app_code=dq2MYIvjAotR8tHvY8Q_Dg",
        {
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">NormalDay</a>',
          subdomains: "1234",
          maxZoom: 20,
        }
      ),
    };

    this.providers["HERE_normalDayGrey"] = {
      title: "normalday grey",
      icon: "./media/here_normaldaygrey.png",
      layer: L.tileLayer(
        "https://{s}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day.grey/{z}/{x}/{y}/256/png8?app_id=Y8m9dK2brESDPGJPdrvs&app_code=dq2MYIvjAotR8tHvY8Q_Dg",
        {
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">NormalDayGrey</a>',
          subdomains: "1234",
          maxZoom: 20,
        }
      ),
    };

    this.providers["CartoDB_Positron"] = {
      title: "positron",
      icon: "./media/cartodb_positron.png",
      layer: L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">CartoDB_Positron</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ),
    };

    this.providers["here_AlidadeSatellite"] = {
      title: "alidade satellite",
      icon: "./media/alidade.png",
      layer: L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
        {
          minZoom: 0,
          maxZoom: 20,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">Aliade</a>',
        }
      ),
    };

    this.providers["Toner"] = {
      title: "toner",
      icon: "./media/toner.png",
      layer: L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png",
        {
          minZoom: 0,
          maxZoom: 20,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">Aliade</a>',
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
