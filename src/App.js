import React, { useEffect, useState } from 'react';
import SwaggerUIComponent from './swagger';

function App() {
  const [availableDocs, setAvailableDocs] = useState({});
  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    const config = window.apiConfig || {};
    const docs = config.swaggerJson || { Default: 'apidoc/swagger.yaml' };
    setAvailableDocs(docs);
    const defaultKey = Object.keys(docs)[0];
    setSelectedKey(defaultKey);

    document.title = config.title || 'Swagger UI';
  }, []);

  const handleSelectChange = (e) => {
    setSelectedKey(e.target.value);
  };

  if (!selectedKey || !availableDocs[selectedKey]) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 24px',
          backgroundColor: 'rgba(33, 48, 66, 0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#fff',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 500 }}>
          {window.apiConfig?.swaggerHeader || 'API Documentation'}
        </h2>

        {/* Styled select container */}
        <div style={{ position: 'relative', minWidth: 200 }}>
          <select
            value={selectedKey}
            onChange={handleSelectChange}
            style={{
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              width: '100%',
              padding: '8px 40px 8px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer',
              outline: 'none',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#90caf9')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)')}
          >
            {Object.entries(availableDocs).map(([label]) => (
              <option key={label} value={label} style={{ color: '#000' }}>
                {label}
              </option>
            ))}
          </select>

          {/* Custom arrow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: 12,
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              color: '#fff',
              fontSize: '0.8rem',
            }}
          >
            ▼
          </div>
        </div>
      </div>

      <SwaggerUIComponent
        key={selectedKey}
        url={availableDocs[selectedKey]}
      />
    </div>
  );
}

export default App;