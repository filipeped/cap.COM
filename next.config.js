module.exports = {
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.digitalpaisagismo.com"
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,OPTIONS"
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type"
          }
        ]
      }
    ];
  }
};
