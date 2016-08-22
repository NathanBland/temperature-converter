<template>
  <div id="app">
    <section class="hero is-primary is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Weather
        </h1>
        <h2 class="subtitle">
          An insanely over-the-top take on the temperature-converter project
        </h2>
      </div>
    </div>
  </section>
  <section>
    <div class='container'>
      <weather></weather>
    </div>
  </section>
  </div>
</template>

<script>
import Weather from './components/Weather'

export default {
  components: {
    Weather
  }
}
</script>

<style>
@import './assets/weather-icons.min.css'
</style>
