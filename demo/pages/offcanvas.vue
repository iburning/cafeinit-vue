<template>
  <div id="page-offcanvas">
    <div class="ci-btn-area">
      <ci-button style="primary" v-on:click="isShowOffcanvas = true">
        Show Menu
      </ci-button>
    </div>

    <ci-offcanvas v-model="isShowOffcanvas">
      <h3>Menu</h3>
      <ul>
        <a v-on:click="test">test</a>
      </ul>
    </ci-offcanvas>
  </div>
</template>

<script>
export default {
  name: 'page-offcanvas',

  data() {
    return {
      isShowOffcanvas: false
    }
  },

  methods: {
    test(evt) {
      console.log(evt)
    }
  }
}
</script>
