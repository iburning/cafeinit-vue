<template>
  <div id="page-scroll-view">
    <ci-scroll-view v-bind:size="scrollViewSize"></ci-scroll-view>
  </div>
</template>

<script>
import CIScrollView from '../components/CIScrollView'

export default {
  name: 'page-scroll-view',

  components: {
    'ci-scroll-view': CIScrollView
  },

  data() {
    return {
      scrollViewSize: {
        width: window.screen.width,
        height: window.screen.height
      }
    }
  }
}
</script>
