<template>
  <ci-grid>
    <ci-grid-cell size="md-12">
      <p>{{page}} / {{totalPage}}</p>

      <ci-pagination
        v-bind:current-page.sync="page"
        v-bind:total-page="totalPage"
        v-bind:show-count="5"
        v-bind:is-show-last="true">
      </ci-pagination>

      <ci-pagination
        v-bind:current-page.sync="page"
        v-bind:total-page="totalPage"
        v-bind:show-count="5"
        v-bind:is-show-next="true">
      </ci-pagination>
    </ci-grid-cell>
  </ci-grid>
</template>


<script>
export default {
  data() {
    return {
      page: 1,
      totalPage: 21
    }
  }
}
</script>
