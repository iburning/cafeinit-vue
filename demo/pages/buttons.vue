<template>
  <div class="page-buttons">
    <ci-block>
      <ci-block-header to="/home">Style</ci-block-header>
      <ci-block-body>
        <ci-link-button class="more" to="/home">more</ci-link-button>
        <ci-link-button class="my-class" to="/home">Href Button</ci-link-button>
        <ci-link-button v-on:click="click">Event Button</ci-link-button>

        <ci-button type="submit" v-on:click="submit">Submit Button</ci-button>

        <ci-button>Default Button</ci-button>
        <ci-button tag-name="a">An a Button</ci-button>
        <ci-button style="primary">Primary Button</ci-button>
        <ci-button style="secondary">Secondary Button</ci-button>
        <ci-button style="success">Success Button</ci-button>
        <ci-button style="warning">Warning Button</ci-button>
        <ci-button style="danger">Danger Button</ci-button>
        <ci-button style="link">Link Button</ci-button>
      </ci-block-body>
    </ci-block>

    <ci-block>
      <ci-block-header>Size</ci-block-header>
      <ci-block-body>
        <ci-button style="primary" size="xl">XL Button</ci-button>
        <ci-button style="primary" size="lg">LG Button</ci-button>
        <ci-button style="primary">Button</ci-button>
        <ci-button style="primary" size="sm">SM Button</ci-button>
        <ci-button style="primary" size="xs">XS Button</ci-button>
      </ci-block-body>
    </ci-block>

    <ci-block>
      <ci-block-header>Attributs</ci-block-header>
      <ci-block-body>

        <ci-button style="primary" block="block">Block Button</ci-button>
        <ci-button style="primary" radius="radius">Radius Button</ci-button>
        <ci-button style="primary" round="round">Round Button</ci-button>
      </ci-block-body>
    </ci-block>

    <ci-block>
      <ci-block-header>Status</ci-block-header>
      <ci-block-body>
        <ci-button style="primary" status="active">Actived Button</ci-button>
        <ci-button style="primary" status="disabled">Disabled Button</ci-button>
        <ci-button style="primary" status="loading">Loading Button</ci-button>
      </ci-block-body>
    </ci-block>
  </div>
</template>

<script>
export default {
  name: 'page-buttons',

  methods: {
    click: function (val) {
      console.log('click', val);
    },

    submit: function (obj) {
      console.log('submit', obj);
    }
  }
}
</script>

<style scoped>
.btn, .am-btn {
  margin-bottom: 1em;
}
</style>
