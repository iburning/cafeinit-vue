<template>
  <div id="page-rate">
    <ci-list>
      <ci-list-cell>
        <span class="title">
          <ci-rate v-model="rate"></ci-rate>
        </span>
        <span class="sub-title">{{rate}}</span>
      </ci-list-cell>

      <ci-list-cell>
        <span class="title">
          <ci-rate value="4.75" v-bind:disabled="true"></ci-rate>
        </span>
        <span class="sub-title">4.75</span>
      </ci-list-cell>
    </ci-list>
  </div>
</template>

<script>
export default {
  name: 'page-rate',

  data() {
    return {
      rate: 4
    }
  }
}
</script>
