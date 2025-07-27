import * as L from "leaflet";

export class CompassControl extends L.Control {
  private compassSvg: SVGElement | null = null;
  
  options = {
    position: 'topright' as L.ControlPosition
  };

  onAdd(map: L.Map): HTMLElement {
    const container = L.DomUtil.create('div', 'leaflet-compass-control leaflet-bar');
    
    // Create compass button
    const compassButton = L.DomUtil.create('a', 'leaflet-compass', container);
    compassButton.href = '#';
    compassButton.title = 'Reset North';
    
    // Create compass SVG
    compassButton.innerHTML = `
      <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="13" fill="white" stroke="#333" stroke-width="2"/>
        <path d="M15 5 L11 20 L15 17 L19 20 Z" fill="#e74c3c" />
        <text x="15" y="11" text-anchor="middle" font-size="8" font-weight="bold" fill="white">N</text>
        <circle cx="15" cy="15" r="2" fill="#333"/>
      </svg>
    `;
    
    // Get reference to SVG element for rotation
    this.compassSvg = compassButton.querySelector('svg');
    if (this.compassSvg) {
      this.compassSvg.style.transition = 'transform 0.25s ease-in-out';
    }
    
    // Click handler to reset rotation
    L.DomEvent.on(compassButton, 'click', (e) => {
      L.DomEvent.preventDefault(e);
      // Reset map rotation to north
      if ('setBearing' in map) {
        (map as any).setBearing(0);
      }
    });
    
    // Update compass rotation when map rotates
    if ('on' in map) {
      map.on('rotate', () => {
        if ('getBearing' in map && this.compassSvg) {
          const bearing = (map as any).getBearing();
          this.compassSvg.style.transform = `rotate(${-bearing}deg)`;
        }
      });
    }
    
    // Prevent map interactions when hovering over control
    L.DomEvent.disableClickPropagation(container);
    L.DomEvent.disableScrollPropagation(container);
    
    return container;
  }
}

export function addCompassControl(map: L.Map, options?: L.ControlOptions): CompassControl {
  const compassControl = new CompassControl(options);
  compassControl.addTo(map);
  return compassControl;
} 