<template>
  <ci-block>
    <ci-block-body class="form">
      <ci-datetime-picker title="日期" v-bind:model.sync="date"></ci-datetime-picker>
    </ci-block-body>
  </ci-block>
</template>


<script>
export default {
  data() {
    return {
      date: ''
    }
  },

  ready() {
    // ...
  }
}
</script>
