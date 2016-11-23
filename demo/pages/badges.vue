<template>
  <div id="page-badage">
    <ci-list>
      <ci-list-cell>
        Badge <ci-badge v-bind:value="21"></ci-badge>
      </ci-list-cell>
      <ci-list-cell>
        未读消息 <ci-badge v-bind:value="21" v-bind:max="9"></ci-badge>
      </ci-list-cell>
      <ci-list-cell>
        未读消息 <ci-badge v-bind:value="21" v-bind:max="9" shape="dot"></ci-badge>
      </ci-list-cell>
      <ci-list-cell>
        <ci-button style="primary">按钮 <ci-badge v-bind:value="21" v-bind:max="9"></ci-badge></ci-button>
      </ci-list-cell>
    </ci-list>
  </div>
</template>

<script>
export default {
  name: 'page-badage'
}
</script>
