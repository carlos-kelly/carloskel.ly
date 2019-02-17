import { color } from "./constants";

export default ({ html, css }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>carloskel.ly</title>
      <meta name="theme-color" content="${color}">
      <meta name="description" content="Carlos Personal Webpage">
      <meta name="viewport" content="user-scalable=1.0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <style>${css}</style>
    </head>
    <body>
      ${html}
    </body>
  </html>
`;
