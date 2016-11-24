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
import CIRate from '../components/CIRate.vue'

export default {
  name: 'page-rate',
  components: {
    'ci-rate': CIRate
  },
  data() {
    return {
      rate: 3.75
    }
  }
}
</script>
