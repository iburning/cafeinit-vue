<template>
  <div id="page-slider">
    <ci-list>
      <ci-list-cell>
        <ci-slider v-model="x"></ci-slider>
        {{x}}
      </ci-list-cell>
      <ci-list-cell>
        <ci-slider v-model="x" v-bind:width="300" v-bind:step="10"></ci-slider>
        {{x}}
      </ci-list-cell>
    </ci-list>
  </div>
</template>

<script>
export default {
  name: 'page-slider',

  data() {
    return {
      x: 50
    }
  }
}
</script>
