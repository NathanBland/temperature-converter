<template>
  <div class="weather">
    <h1 class='title is-4 has-text-centered'>Where do you want to look?</h1>
    <form @submit.prevent='getWeather'>
      <label class="label">Zip Code</label>
      <p class="control">
        <input v-model='zip' class="input" type="text" placeholder="68506">
      </p>
      <p class="control">
        <button class="button is-primary is-large">Submit</button>
        <a @click='clear' class="button is-link is-large">Cancel</a>
      </p>
    </form>
  </div>
  <div class='weather--result'>
    <weather-card v-if='data' :data='data'></weather-card>
  </div>
</template>

<script>
import WeatherCard from './WeatherCard'
import weather from 'yahoo-weather'
export default {
  components: {
    WeatherCard
  },
  data () {
    return {
      zip: '',
      data: false
    }
  },
  methods: {
    getWeather () {
      weather(this.$get('zip'), 'f').then(info => {
        console.log('info:', info)
        this.$set('data', info)
      }).catch((err) => {
        console.log('we had a bad time :(', err)
      })
    },
    clear () {
      this.zip = ''
    }
  }
}
</script>


<style lang='sass' scoped>
  .weather
    margin: 1em
  .weather--result .card
    margin-left: auto
    margin-right: auto
</style>
