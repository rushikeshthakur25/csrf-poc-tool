import React, { useState } from 'react';
import BurpRequestForm from './components/BurpRequestForm';
import Footer from './components/Footer';
import { generatePoC } from './utils/generatePoC';

const App = () => {
  const [poc, setPoc] = useState('');

  const handleGenerate = (burpRequest) => {
    const generatedPoC = generatePoC(burpRequest);
    setPoc(generatedPoC);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl mb-4 text-center">CSRF PoC Generator</h1>
      <BurpRequestForm onSubmit={handleGenerate} />
      {poc && (
        <div className="mt-4 p-4 bg-gray-800 rounded">
          <h2 className="text-xl mb-2">Generated PoC</h2>
          <pre className="whitespace-pre-wrap">{poc}</pre>
          <button
            onClick={() => navigator.clipboard.writeText(poc)}
            className="mt-2 px-4 py-2 bg-green-600 rounded"
          >
            Copy to Clipboard
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
