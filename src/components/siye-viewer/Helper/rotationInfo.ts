import * as L from "leaflet";

export class RotationInfoControl extends L.Control {
  options = {
    position: 'bottomright' as L.ControlPosition
  };

  onAdd(_map: L.Map): HTMLElement {
    const container = L.DomUtil.create('div', 'leaflet-rotation-info leaflet-bar');
    
    container.innerHTML = `
      <div style="padding: 8px; background: white; font-size: 12px; max-width: 200px;">
        <strong>Map Rotation:</strong><br>
        • Hold <kbd>Shift</kbd> + drag to rotate<br>
        • Use rotation control (↻) in top-left<br>
        • Click compass to reset north
      </div>
    `;
    
    // Prevent map interactions when hovering over control
    L.DomEvent.disableClickPropagation(container);
    L.DomEvent.disableScrollPropagation(container);
    
    return container;
  }
}

export function addRotationInfo(map: L.Map, options?: L.ControlOptions): RotationInfoControl {
  const infoControl = new RotationInfoControl(options);
  infoControl.addTo(map);
  return infoControl;
} 