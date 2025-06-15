import './App.css';
import SwaggerUIComponent from './swagger';

function App() {
  const swaggerUrl = process.env.REACT_APP_SWAGGER_URL || 'swagger.yaml';

  return (
    <div className="App">
      <SwaggerUIComponent 
        url={swaggerUrl} 
      />
    </div>
  );
}

export default App;
