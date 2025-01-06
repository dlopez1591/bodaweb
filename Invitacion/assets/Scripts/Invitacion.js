const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Nos Casamos!')
      return {
        message
      }
    }
  }).mount('#app')