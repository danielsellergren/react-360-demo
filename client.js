// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import { ReactInstance } from 'react-360-web';
import CustomCameraController from './src/Controllers/CustomCameraController';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render a Location instead of a surface
  r360.renderToLocation(
    r360.createRoot('ReactRvaDemo'),
    r360.getDefaultLocation(),
  );

  // Clean normal CameraControllers and use our own
  r360.controls.clearCameraControllers;
  r360.controls.addCameraController(new CustomCameraController(r360._eventLayer));

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
