<template>
  <div id="page-switch">
    <ci-list>
      <ci-list-cell>
        <ci-switch title="Active" v-model="isActived"></ci-switch>
      </ci-list-cell>

      <ci-list-cell>
        <ci-switch title="Unactive" v-model="isUnactived"></ci-switch>
      </ci-list-cell>

      <ci-list-cell>
        <ci-switch v-model="isActived"></ci-switch>
      </ci-list-cell>
    </ci-list>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="submit">Submit</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-switch',

  data() {
    return {
      isActived: true
    }
  },

  computed: {
    isUnactived() {
      return !this.isActived
    }
  },

  methods: {
    submit() {
      __alert('isActived: ' + this.isActived)
    }
  }
}
</script>
