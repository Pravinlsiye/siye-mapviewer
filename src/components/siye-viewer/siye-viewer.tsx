import { Component, h, Host, Prop } from '@stencil/core';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-rotate';
import '../../types/leaflet-rotate';
import { MapConfig } from './Helper/mapConfig';
import AddLayers from './Helper/mapLayer';
import { addCompassControl } from './Helper/compassControl';
import { addRotationInfo } from './Helper/rotationInfo';


@Component({
  tag: 'siye-viewer',
  styleUrl: 'siye-viewer.css',
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
        maxZoom: this.mapConfig.maxZoom,
        rotate: true,
        rotateControl: {
          closeOnZeroBearing: false,
          position: 'topleft'
        },
        bearing: 0, // Initial bearing (rotation angle)
        touchRotate: true,
        shiftKeyRotate: true,
        compassBearing: true
      });

      AddLayers(this.map, () => {console.log('Layer changed - may use for refresh map' )});
      
      // Add compass control
      addCompassControl(this.map, { position: 'topright' });
      
      // Add rotation info
      addRotationInfo(this.map, { position: 'bottomright' });

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