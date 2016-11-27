<template>
  <div id="page-rate">
    <ci-list>
      <ci-list-cell>
        <ci-rate v-model="rate"></ci-rate> {{rate}}
      </ci-list-cell>
    </ci-list>
  </div>
</template>

<script>
export default {
  name: 'page-rate',

  data() {
    return {
      rate: 3.75
    }
  }
}
</script>
