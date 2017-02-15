<template>
  <div class="page-step">
    <ci-step v-bind:current="current">
      <ci-step-item title="1" tip="Buy" v-on:click="itemOnClick"></ci-step-item>
      <ci-step-item title="2" tip="Pay" v-on:click="itemOnClick"></ci-step-item>
      <ci-step-item title="3" tip="Send"  v-on:click="itemOnClick"></ci-step-item>
      <ci-step-item title="4" tip="Recive"  v-on:click="itemOnClick"></ci-step-item>
      <ci-step-item title="5" tip="Comment"  v-on:click="itemOnClick"></ci-step-item>
    </ci-step>

    <ci-step v-bind:current="0">
      <ci-step-item title="Buy" tip="Select &amp; buy"></ci-step-item>
      <ci-step-item title="Pay"　tip="Pay online"></ci-step-item>
      <ci-step-item title="Send"　tip="Express on the way"></ci-step-item>
      <ci-step-item title="Recive"　tip="Recive your item"></ci-step-item>
      <ci-step-item title="Comment"　tip="Like it?"></ci-step-item>
    </ci-step>

    <ci-step class="my-step" v-bind:current="2">
      <ci-step-item title="A1"></ci-step-item>
      <ci-step-item title="A2"></ci-step-item>
      <ci-step-item>
        <div slot="title" class="user">
          <ci-image width="60" height="60" border="3" radius="30"
            src="http://tva4.sinaimg.cn/crop.0.0.180.180.180/4e724670jw1e8qgp5bmzyj2050050aa8.jpg">
          </ci-image>
        </div>
      </ci-step-item>
      <ci-step-item title="A4"></ci-step-item>
      <ci-step-item title="A5"></ci-step-item>
    </ci-step>
  </div>
</template>

<script>
// import CIStep from '../components/CIStep'
// import CIStepItem from '../components/CIStepItem'

export default {
  name: 'page-step',

  components: {
    // 'ci-step': CIStep,
    // 'ci-step-item': CIStepItem
  },

  data() {
    return {
      current: 2
    }
  },

  methods: {
    itemOnClick(index) {
      console.log('itemOnClick', index)
      this.current = index
    }
  }
}
</script>

<style lang="less" scope="scope">
.my-step {
  margin: 50px 0;

  .user {
    z-index: 10;
    position: relative;
    margin: -10px auto 0 auto;
    width: 60px;

    .ci-image {
      border-color: #1abc9c;
    }
  }
}
</style>
