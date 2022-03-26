import { createApp } from 'vue';
import App from './App.vue';
import { vFocus } from './shared/directives/vFocus';
import { examplePlugin } from './shared/plugins/examplePlugin';

const app = createApp(App);

app.directive('focus', vFocus);

app.use(examplePlugin);

app.mount('#app');
