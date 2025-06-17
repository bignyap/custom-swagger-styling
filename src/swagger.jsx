import React, { useEffect, useState } from "react";
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import './custom-swagger-styles.css';

const AugmentingLayout = ({ getComponent, headerTitle }) => {
  const BaseLayout = getComponent("BaseLayout", true);

  return (
    <div>
      <div className="myCustomHeader">
        <h1>{headerTitle}</h1>
      </div>
      <BaseLayout />
    </div>
  );
};

const SwaggerUIComponent = () => {
  const [swaggerUrl, setSwaggerUrl] = useState(null);
  const [headerTitle, setHeaderTitle] = useState("Swagger Documentation");

  useEffect(() => {
    if (window.apiConfig) {
      setSwaggerUrl(window.apiConfig.swaggerJson || 'apidoc/swagger.yaml');
      setHeaderTitle(window.apiConfig.swaggerHeader || 'Swagger Documentation');
    } else {
      setSwaggerUrl('apidoc/swagger.yaml');
      setHeaderTitle('Swagger Documentation');
    }
  }, []);
  

  const AugmentingLayoutPlugin = () => {
    return {
      components: {
        AugmentingLayout: (props) =>
          <AugmentingLayout {...props} headerTitle={headerTitle} />
      },
      wrapComponents: {
        Topbar: () => () => null,
        Models: () => () => null
      }
    };
  };

  if (!swaggerUrl) return <div>Loading Swagger UI...</div>;

  return (
    <div>
      <style>{`
        .swagger-ui .info {
          display: none !important;
        }
      `}</style>
      <SwaggerUI
        url={swaggerUrl}
        plugins={[AugmentingLayoutPlugin]}
        layout={"AugmentingLayout"}
        deepLinking
        docExpansion="none"
        defaultModelsExpandDepth={-1}
        defaultModelExpandDepth={0}
        // layout="BaseLayout"
      />
    </div>
  );

  // return (
  //   <SwaggerUI
  //     url={swaggerUrl}
  //     plugins={[AugmentingLayoutPlugin]}
  //     layout={"AugmentingLayout"}
  //     docExpansion="none"
  //     defaultModelsExpandDepth={-1}
  //     defaultModelExpandDepth={0}
  //   />
  // );
};

export default SwaggerUIComponent;
