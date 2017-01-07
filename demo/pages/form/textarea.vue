<template>
  <div id="page-textarea">
    <ci-list>
      <ci-list-cell>
        <ci-textarea v-model="desc" placeholder="Hello Cafeinit"
          cols="100" rows="5" maxlength="200"></ci-textarea>
      </ci-list-cell>
    </ci-list>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="submit">Submit</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-textarea',

  data() {
    return {
      desc: ''
    }
  },

  methods: {
    submit() {
      __alert('desc: ' + this.desc)
    }
  }
}
</script>
