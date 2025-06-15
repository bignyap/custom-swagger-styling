import React, { useEffect, useState } from 'react';
import SwaggerUIComponent from './swagger';

function App() {
  const [swaggerUrl, setSwaggerUrl] = useState(null);

  useEffect(() => {
    fetch('/config.json')
      .then(res => res.json())
      .then(config => {
        setSwaggerUrl(config.SWAGGER_JSON || 'apidoc/swagger.yaml');
        console.log("Loaded Swagger URL from config:", config.SWAGGER_JSON);
      });
  }, []);

  if (!swaggerUrl) return <div>Loading...</div>;

  return (
    <div className="App">
      <SwaggerUIComponent url={swaggerUrl} />
    </div>
  );
}

export default App;
