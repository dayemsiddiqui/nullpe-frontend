module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'yarn start',
      startServerReadyPattern: 'built|server',
      startServerReadyTimeout: 60000,
      headful: false,
      settings: {
        preset: 'desktop',
        throttling: { cpuSlowdownMultiplier: 2 },
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci-server.onrender.com/',
      token: '384a3436-7983-464a-962a-f0d45b173e3e',
    },
  },
}