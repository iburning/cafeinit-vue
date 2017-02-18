<template>
  <div class="page-steps">
    <ci-steps v-bind:index="1" v-on:click-item="onClickItem">
      <ci-step title="1" tip="Buy"></ci-step>
      <ci-step title="2" tip="Pay"></ci-step>
      <ci-step title="3" tip="Send"></ci-step>
      <ci-step title="4" tip="Recive"></ci-step>
      <ci-step title="5" tip="Comment"></ci-step>
    </ci-steps>

    <ci-steps v-bind:can-change-by-click="true">
      <ci-step title="Buy" tip="Select &amp; buy"></ci-step>
      <ci-step title="Pay"　tip="Pay online"></ci-step>
      <ci-step title="Send"　tip="Express on the way"></ci-step>
      <ci-step title="Recive"　tip="Recive your item"></ci-step>
      <ci-step title="Comment"　tip="Like it?"></ci-step>
    </ci-steps>

    <ci-steps class="my-steps" v-bind:index="2">
      <ci-step title="A1"></ci-step>
      <ci-step title="A2"></ci-step>
      <ci-step>
        <div slot="title" class="user">
          <ci-image width="60" height="60" border="3" radius="30"
            src="http://tva4.sinaimg.cn/crop.0.0.180.180.180/4e724670jw1e8qgp5bmzyj2050050aa8.jpg">
          </ci-image>
        </div>
      </ci-step>
      <ci-step title="A4"></ci-step>
      <ci-step title="A5"></ci-step>
    </ci-steps>
  </div>
</template>

<script>
export default {
  name: 'page-steps',

  components: {},

  data() {
    return {}
  },

  methods: {
    onClickItem(index) {
      console.log('onClickItem', index)
    }
  }
}
</script>

<style lang="less" scope="scope">
.my-steps {
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
