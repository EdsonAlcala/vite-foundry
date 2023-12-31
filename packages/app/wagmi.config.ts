import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    foundry({
      project: '../foundry',
      deployments: require('../foundry/deployments/deploymentAddresses.json')
    }),
    react()
  ],
})