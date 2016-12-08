<template>
  <div id="page-slider">
    <ci-list>
      <ci-list-cell>
        <ci-form-group title="Slider" align="right">
          <ci-slider v-model="x"></ci-slider>
        </ci-form-group>
      </ci-list-cell>
    </ci-list>

    <div class="ci-btn-area ci-text-center">
      <ci-slider v-model="x"
        v-bind:is-show-value="false"
        v-bind:width="sliderWidth"></ci-slider>
    </div>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="submit">Submit</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-slider',

  data() {
    return {
      x: 50,
      sliderWidth: parseInt(window.screen.width * 0.8)
    }
  },

  methods: {
    submit() {
      __alert('x: ' + this.x)
    }
  }
}
</script>
