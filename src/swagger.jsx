import React from "react"
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import './custom-swagger-styles.css' // Import improved styles

class AugmentingLayout extends React.Component {
  render() {
    const { getComponent } = this.props
    const BaseLayout = getComponent("BaseLayout", true)

    return (
      <div>
        <div className="myCustomHeader">
          <h1>🚀 Swagger Petstore</h1>
        </div>
        <BaseLayout />
      </div>
    )
  }
}

const AugmentingLayoutPlugin = () => {
  return {
    components: {
      AugmentingLayout: AugmentingLayout
    },
    wrapComponents: {
      Topbar: () => () => null,
      Models: () => () => null
    }
  }
}

const SwaggerUIComponent = ({ url }) => {
    return (
      <SwaggerUI
        url={url}
        plugins={[AugmentingLayoutPlugin]}
        layout={"AugmentingLayout"}
        docExpansion="none"
        defaultModelsExpandDepth={-1}
        defaultModelExpandDepth={0}
      />
    )
  }
  

export default SwaggerUIComponent
