import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

let App = function Profile() {
  return (
    <img
      src="zhivotnye_tigr_21710.jpg"

    />
  )
}


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);