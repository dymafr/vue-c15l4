import type { InjectionKey, Plugin } from 'vue';
import { vFocus } from './vFocus';

declare module 'vue' {
  interface ComponentCustomProperties {
    $greeting: (name: string) => string;
  }
}

export const symGreeting = Symbol() as InjectionKey<(name: string) => string>;

export const examplePlugin: Plugin = {
  install: (app, options) => {
    const greeting = (name: string) => {
      return `Bonjour ${name} !`;
    };

    app.config.globalProperties.$greeting = greeting;

    app.provide(symGreeting, greeting);
    app.directive('focus', vFocus);
  },
};
