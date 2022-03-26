import type { Plugin } from 'vue';

export const examplePlugin: Plugin = {
  install: (app, options) => {
    app.config.globalProperties.$greeting = (name: string) => {
      return `Bonjour ${name} !`;
    };
  },
};
