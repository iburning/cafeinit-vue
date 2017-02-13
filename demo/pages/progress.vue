<template>
  <div id="page-progress">
    <ci-block>
      <ci-block-header>Progress</ci-block-header>
      <ci-block-body>
        <ci-progress
          v-bind:max="500"
          v-bind:value="325">
        </ci-progress>

        <ci-progress width="250" round="round"
          v-bind:max="1000"
          v-bind:value="880">
        </ci-progress>

        <ci-progress color="warning" round="round"
          v-bind:max="1000"
          v-bind:value="325"
          v-bind:isShowValue="false">
        </ci-progress>

        <ci-progress color="info" round="round"
          v-bind:max="progressMax"
          v-bind:value="progressValue"
          v-bind:isShowValue="false">
        </ci-progress>
      </ci-block-body>
    </ci-block>
  </div>
</template>

<script>
// import CIProgress from '../components/CIProgress'

export default {
  name: 'page-progress',

  components: {
    // 'ci-progress': CIProgress
  },

  data() {
    return {
      progressMax: 500,
      progressValue: 0
    }
  },

  created() {
    let timer = window.setInterval(() => {
      this.progressValue += 5
      if (this.progressValue >= this.progressMax) {
        window.clearInterval(timer)
      }
    }, 30)
  }
}
</script>
