import './App.css';
import SwaggerUIComponent from './swagger';

function App() {
  const swaggerUrl = process.env.SWAGGER_JSON || 'swagger.yaml';

  return (
    <div className="App">
      <SwaggerUIComponent 
        url={swaggerUrl} 
      />
    </div>
  );
}

export default App;
