<template>
  <div id="page-number">
    <ci-list>
      <ci-list-cell>
        <ci-form-group title="Count" align="right">
          <ci-number v-model="count"></ci-number>
        </ci-form-group>
      </ci-list-cell>
      <ci-list-cell>
        <ci-form-group title="Count">
          <ci-text v-model="count"></ci-text>
        </ci-form-group>
      </ci-list-cell>
    </ci-list>

    <ci-list>
      <ci-list-cell>
        <ci-number v-model="count"
          v-bind:min="-10" v-bind:max="10" v-bind:step="2"></ci-number>
      </ci-list-cell>
    </ci-list>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="submit">Submit</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-number',

  data() {
    return {
      count: 5
    }
  },

  methods: {
    submit() {
      __alert('count: ' + this.count)
    }
  }
}
</script>
