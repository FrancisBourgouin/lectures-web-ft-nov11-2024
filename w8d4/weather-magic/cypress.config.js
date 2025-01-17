import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://light-motion-potato.surge.sh"
    // baseUrl:"http://localhost:5173"
  },
  
});
