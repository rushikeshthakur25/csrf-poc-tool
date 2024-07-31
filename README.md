# CSRF PoC Generator

## Overview

The CSRF PoC Generator is a tool designed to validate and parse Burp Suite requests, ensuring correct formatting, and automatically generate Cross-Site Request Forgery (CSRF) Proof-of-Concept (PoC) forms. This tool is aimed at helping security researchers and developers identify and mitigate CSRF vulnerabilities in web applications.

## Features

- **Request Validation:** Validates Burp Suite requests to ensure they are correctly formatted.
- **Request Parsing:** Parses request data to extract necessary information.
- **PoC Generation:** Automatically generates CSRF PoC forms based on the parsed request data.
- **Error Handling:** Displays error messages for incorrect or malformed inputs.

## Usage

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/csrf-poc-generator.git
    cd csrf-poc-generator
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm run dev
    ```

4. **Access the application:**
    Open your browser and navigate to `http://localhost:3000`.

5. **Generate PoC:**
    - Paste your Burp Suite request into the textarea.
    - Click "Generate PoC".
    - The generated PoC form will be displayed if the request is valid.
    - Copy the generated PoC and use it to test CSRF vulnerabilities.

## Example Burp Suite Request

```plaintext
POST /login HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Content-Type: application/x-www-form-urlencoded
Content-Length: 45
Origin: https://example.com
Connection: keep-alive
Referer: https://example.com/login
Cookie: sessionid=abcd1234
Upgrade-Insecure-Requests: 1

username=testuser&password=testpassword
```

## Notes

- This tool does not host but future versions will be open-source for public access.
- Ensure you have permission to test the endpoints you are targeting.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any sections as needed.
