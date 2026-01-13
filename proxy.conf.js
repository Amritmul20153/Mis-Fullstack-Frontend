// Advanced dev proxy: handles redirects and cookies
module.exports = [
  {
    target: 'http://localhost:8080',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
    cookieDomainRewrite: 'localhost',
    followRedirects: true,
    onProxyRes: (proxyRes, req, res) => {
      const location = proxyRes.headers && proxyRes.headers.location;
      if (location && location.startsWith('http://localhost:8080')) {
        // Rewrite absolute redirects to stay on dev origin (4200)
        proxyRes.headers.location = location.replace('http://localhost:8080', 'http://localhost:4200');
      }
    }
  }
];