import React, { useState } from 'react';

const BurpRequestForm = ({ onSubmit }) => {
  const [burpRequest, setBurpRequest] = useState('');
  const [error, setError] = useState('');

  const validateRequest = (request) => {
    const lines = request.split('\n');
    const requestLine = lines[0];
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
    const [method, url] = requestLine.split(' ');

    if (!validMethods.includes(method)) {
      return 'Invalid HTTP method. Supported methods are: GET, POST, PUT, DELETE, PATCH.';
    }
    if (!url) {
      return 'Invalid request format. URL is missing.';
    }

    const hasContentType = lines.some(line => line.startsWith('Content-Type:'));
    const hasContentLength = lines.some(line => line.startsWith('Content-Length:'));
    if (method === 'POST' && (!hasContentType || !hasContentLength)) {
      return 'POST requests must include Content-Type and Content-Length headers.';
    }

    const hasBody = lines.some(line => line === '');
    if (method === 'POST' && !hasBody) {
      return 'POST requests must include a body.';
    }

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validateRequest(burpRequest);
    if (errorMsg) {
      setError(errorMsg);
    } else {
      setError('');
      onSubmit(burpRequest);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Burp Suite Request</label>
        <textarea
          value={burpRequest}
          onChange={(e) => setBurpRequest(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
          rows="10"
        />
      </div>
      {error && (
        <div className="text-red-500">
          {error}
        </div>
      )}
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Generate PoC
      </button>
    </form>
  );
};

export default BurpRequestForm;
