<template>
  <h1>{{ $greeting('Jean') }}</h1>
  <input v-focus type="text" />
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './assets/scss/base.scss';
</style>
