import { Component, h, Host } from '@stencil/core';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

@Component({
  tag: 'siye-viewer',
  styleUrl: '../../../node_modules/leaflet/dist/leaflet.css',
  shadow: true,
})
export class SiyeViewer {
  private mapContainer: HTMLElement;

  componentDidLoad() {
    console.log('Component has been rendered');
    if (this.mapContainer) {
      const map = L.map(this.mapContainer, {
        center: [13.1,80.2],
        zoom: 10
      });

      const mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
      }).addTo(map);

      setTimeout(() => {
        map.invalidateSize();
      }, 0);
    } else {
      console.error('Map container is not defined');
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