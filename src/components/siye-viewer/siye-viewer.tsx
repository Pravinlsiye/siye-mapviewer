import { Component, h, Host, Prop } from '@stencil/core';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapConfig } from './Helper/mapConfig';
import AddLayers from './Helper/mapLayer';


@Component({
  tag: 'siye-viewer',
  styleUrl: '../../../node_modules/leaflet/dist/leaflet.css',
  shadow: true,
})
export class SiyeViewer {
  private mapContainer: HTMLElement;

  @Prop() mapConfig: MapConfig = MapConfig.GetDefault();

  private map: L.Map;

  constructor() {
    console.log('Component is being constructed');
  }

  componentDidLoad() {
    console.log('Component has been rendered', this.mapConfig);
    if (this.mapContainer) {
      this.map = L.map(this.mapContainer, {
        center: this.mapConfig.center,
        zoom: this.mapConfig.zoom,
        maxzoom: this.mapConfig.maxZoom
      });

      AddLayers(this.map, () => {console.log('Layer changed - may use for refresh map' )});

      setTimeout(() => {
        this.map.invalidateSize();
      }, 0);
    } else {
      console.error('Map container is not defined');
    }
  }

  public updateConfig(newConfig: MapConfig) {
    console.log('Updating map config...', newConfig);
    this.mapConfig = newConfig;

    if (this.map) {
      this.map.setView(this.mapConfig.center, this.mapConfig.zoom);
      this.map.options.maxZoom = this.mapConfig.maxZoom;
    }
  }

  render() {
    console.log('Rendering component');
    return (
      <Host>
        <div ref={(el) => this.mapContainer = el as HTMLElement} style={{ height: '100%', width: '100%', margin :'0px' }}></div>
      </Host>
    );
  }
}