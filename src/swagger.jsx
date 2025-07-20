import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./custom-swagger-styles.css";

const AugmentingLayout = ({ getComponent }) => {
  const BaseLayout = getComponent("BaseLayout", true);
  return <BaseLayout />;
};

const SwaggerUIComponent = ({ url, headerTitle }) => {
  const AugmentingLayoutPlugin = () => ({
    components: {
      AugmentingLayout: (props) => <AugmentingLayout {...props} />,
    },
    wrapComponents: {
      Topbar: () => () => null,
      Models: () => () => null,
    },
  });

  if (!url) return <div>Loading Swagger UI...</div>;

  return (
    <div>
      <style>{`
        .swagger-ui .info {
          display: none !important;
        }
      `}</style>
      <SwaggerUI
        url={url}
        plugins={[AugmentingLayoutPlugin]}
        layout="AugmentingLayout"
        deepLinking
        docExpansion="none"
        defaultModelsExpandDepth={-1}
        defaultModelExpandDepth={0}
      />
    </div>
  );
};

export default SwaggerUIComponent;