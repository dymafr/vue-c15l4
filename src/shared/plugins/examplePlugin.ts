import type { Plugin } from 'vue';

declare module 'vue' {
  interface ComponentCustomProperties {
    $greeting: (name: string) => string;
  }
}

export const examplePlugin: Plugin = {
  install: (app, options) => {
    app.config.globalProperties.$greeting = (name: string) => {
      return `Bonjour ${name} !`;
    };
  },
};
