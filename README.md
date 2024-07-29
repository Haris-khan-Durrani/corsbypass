# URL Proxy Server

This is a simple proxy server built with Express.js that allows you to forward requests to other URLs. It includes support for  GET requests.

## Features

- CORS support
- Proxy GET requests to any URL provided as a query parameter

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/corsbypass.git
   cd url-proxy-server

2. Install dependencies:
   ```bash
   npm install

4. Start the server:
   ```bash
   node server.js

# Example
   ```bash
   curl http://localhost:3030/anyurl?slug=https%3A%2F%2Fcreo.findtheproperty.ae%2Fassets%2Ffonts%2Fhelvetica-neue-ltstd-bold%2Fstylesheet.css
