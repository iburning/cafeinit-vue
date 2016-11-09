<template>
  <div id="form-list">
    <ci-list-checkbox title="技能" name="skills"
      v-bind:items="[
        {title: 'HTML', value: 'html'},
        {title: 'CSS', value: 'css'},
        {title: 'JavaScript', value: 'javascript'}
      ]"
      v-model="skills"></ci-list-checkbox>
    <strong>{{skills}}</strong>

    <ci-list-radio title="商家类型" name="type"
      v-bind:items="[
        {title: 'Personal', value: 1},
        {title: 'Bussiness', value: 2}
      ]"
      v-model="type"></ci-list-radio>
    <strong>{{type}}</strong>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="save">保存</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-list',

  data() {
    return {
      skills: ['html', 'javascript'],
      type: '1'
    }
  },

  methods: {
    save() {
      console.log('save', this.$data)
    }
  }
}
</script>
