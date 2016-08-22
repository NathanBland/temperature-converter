<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <i class="wi wi-yahoo-{{data.item.condition.code}}"></i>
        </div>
        <div class="media-content">
          <p class="title is-5">{{data.item.condition.temp}}°F &amp; {{data.item.condition.text}}</p>
          <p class="subtitle is-6">{{data.location.city}}, {{data.location.region}}</p>
        </div>
      </div>
      <div class="content">
       Today’s temperature is {{data.item.condition.temp}}°F, which is {{tempInCelsius}}°C.
      </div>
    </div>
  </div>
</template>

<script>
import Temperature from '../temperature'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    tempInCelsius () {
      return Math.round(Temperature.toCelsius(this.data.item.condition.temp))
    }
  },
  props: ['data']
}
</script>


<style lang='sass' scoped>
  .weather
    margin: 1em
  .media-left i
    font-size: 5em
</style>
