<template>
  <h1>{{ $greeting('Jean') }}</h1>
  <input v-focus="{ firstFocus: true, color: 'green' }" type="text" />
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { symGreeting } from './shared/plugins/examplePlugin';
const greeting = inject(symGreeting);
console.log(greeting('Paul'));
</script>

<style lang="scss">
@import './assets/scss/base.scss';
</style>
