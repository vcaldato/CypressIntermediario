const { defineConfig } = require('cypress') // Importa o Cypress

module.exports = defineConfig({ // Cria o arquivo de configuração do Cypress
  e2e: {
    baseUrl: 'http://localhost', // Define o URL base para os testes
    env: {
      hideCredentials: true, // Oculta as credenciais
      requestMode: true,  // Habilita o modo de requisição
    },
    experimentalRunAllSpecs: true, // Habilita a execução de todos os testes
  },
  fixturesFolder: false,  // Desabilita os arquivos de fixtures
  video: false, // Desabilita o video
})


