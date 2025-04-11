import './App.css';
import SwaggerUIComponent from './swagger';

function App() {
  return (
    <div className="App">
      <SwaggerUIComponent 
        url="swagger.yaml" 
      />
    </div>
  );
}

export default App;
