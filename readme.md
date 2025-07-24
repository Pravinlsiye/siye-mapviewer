# Siye MapViewer

A Stencil web component for displaying interactive maps using Leaflet with multiple tile layer providers.

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation & Running

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to: http://localhost:3333

### Build for Production
```bash
npm run build
```

## Project Structure

```
siye-mapviewer/
├── src/
│   ├── components/
│   │   └── siye-viewer/          # Main map component
│   │       ├── Helper/           # Map configuration & layer management
│   │       ├── siye-viewer.tsx   # Component logic
│   │       └── siye-viewer.css   # Component styles
│   ├── index.html                # Demo page
│   └── index.ts                  # Entry point
├── package.json                  # Dependencies & scripts
└── stencil.config.ts            # Build configuration
```

## Component Usage

The map component can be used in any HTML page:

```html
<siye-viewer></siye-viewer>
```

## Available Map Layers

- HERE Satellite
- OpenStreetMap
- OpenStreetMap DE
- HERE Normal Day
- HERE Normal Day Grey
- CartoDB Positron
- Alidade Satellite
- Toner

Click the layer switcher in the bottom-left corner to change maps.

## Debugging

### Browser Developer Tools

1. **Open DevTools**: Press F12 or right-click → Inspect
2. **Console Tab**: View component logs and errors
   - Look for "Component is being constructed"
   - Check for API or network errors
3. **Network Tab**: Monitor map tile loading
   - Filter by Images to see tile requests
   - Check for 404 or CORS errors
4. **Elements Tab**: Inspect the shadow DOM
   - Find `<siye-viewer>` element
   - Expand #shadow-root to see internal structure

### Common Issues & Solutions

**Map not visible?**
- Check browser console for errors
- Ensure component has height (check computed styles)
- Verify map tiles are loading in Network tab

**Tiles not loading?**
- Check API keys in `mapLayerConfig.ts`
- Look for CORS or 403/401 errors
- Try different map layers

**Component not rendering?**
- Check if JavaScript is enabled
- Verify the build completed successfully
- Look for TypeScript errors in console

### Development Tips

- The dev server auto-reloads on changes
- Use `console.log()` in component methods for debugging
- Map configuration is in `src/components/siye-viewer/Helper/mapConfig.ts`
- Default center is Chennai, India [13.1, 80.2]

## License

MIT