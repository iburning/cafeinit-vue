<template>
  <div class="page-step">
    <ci-step v-bind:current="1">
      <ci-step-item index="1" title="Buy"></ci-step-item>
      <ci-step-item index="2" title="Pay"></ci-step-item>
      <ci-step-item index="3" title="Send"></ci-step-item>
      <ci-step-item index="4" title="Recive"></ci-step-item>
      <ci-step-item index="5" title="Comment"></ci-step-item>
    </ci-step>

    <ci-step v-bind:current="0">
      <ci-step-item index="Buy"></ci-step-item>
      <ci-step-item index="Pay"></ci-step-item>
      <ci-step-item index="Send"></ci-step-item>
      <ci-step-item index="Recive"></ci-step-item>
      <ci-step-item index="Comment"></ci-step-item>
    </ci-step>

    <ci-step v-bind:current="2">
      <ci-step-item index="A1"></ci-step-item>
      <ci-step-item index="A2"></ci-step-item>
      <ci-step-item>
        <div class="my-index">
          <ci-image width="60" height="60" border="3" radius="30"
            src="http://tva4.sinaimg.cn/crop.0.0.180.180.180/4e724670jw1e8qgp5bmzyj2050050aa8.jpg">
          </ci-image>
        </div>
      </ci-step-item>
      <ci-step-item index="A4"></ci-step-item>
      <ci-step-item index="A5"></ci-step-item>
    </ci-step>
  </div>
</template>

<script>
import CIStep from '../components/CIStep'
import CIStepItem from '../components/CIStepItem'

export default {
  name: 'page-step',

  components: {
    'ci-step': CIStep,
    'ci-step-item': CIStepItem
  },

  data() {
    return {
    }
  },

  methods: {
  }
}
</script>

<style lang="less" scope="scope">
.my-index {
  z-index: 10;
  position: relative;
  margin: -10px auto 0 auto;
  width: 60px;

  .ci-image {
    border-color: #1abc9c;
  }
}
</style>
