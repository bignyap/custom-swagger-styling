import React, { useEffect, useState } from 'react';
import SwaggerUIComponent from './swagger';

function App() {
  const [swaggerUrl, setSwaggerUrl] = useState(null);

  useEffect(() => {
    if (window.apiConfig) {
      setSwaggerUrl(window.apiConfig.swaggerJson || 'apidoc/swagger.yaml');
    } else {
      setSwaggerUrl('apidoc/swagger.yaml');
    }
  }, []);
  

  if (!swaggerUrl) return <div>Loading...</div>;

  return (
    <div className="App">
      <SwaggerUIComponent url={swaggerUrl} />
    </div>
  );
}

export default App;
