import 'leaflet';

declare module 'leaflet' {
  interface MapOptions {
    rotate?: boolean;
    rotateControl?: false | {
      closeOnZeroBearing?: boolean;
      position?: L.ControlPosition;
    };
    bearing?: number;
    touchRotate?: boolean;
    shiftKeyRotate?: boolean;
    compassBearing?: boolean;
  }
  
  interface Map {
    getBearing(): number;
    setBearing(bearing: number): this;
    rotateTo(bearing: number, options?: any): this;
  }
} 