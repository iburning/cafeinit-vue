<template>
  <div id="page-checkbox">
    <ci-list>
      <ci-list-cell>
        <ci-checkbox title="Skills" name="skills" inline="inline"
          v-model="skills"
          v-bind:items="skillItems"></ci-checkbox>
      </ci-list-cell>

      <ci-list-cell>
        <ci-checkbox title="Skills" name="skills" disabled="disabled"
          v-model="skills"
          v-bind:items="skillItems"></ci-checkbox>
      </ci-list-cell>
    </ci-list>

    <ci-checkbox-list title="Skills" name="skills" v-model="skills"
      v-bind:items="skillItems"></ci-checkbox-list>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="submit">Submit</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-checkbox',

  data() {
    return {
      skillItems: [
        { value: 'javascript', title: 'Javascript' },
        { value: 'html', title: 'HTML' },
        { value: 'css', title: 'CSS' }
      ],
      skills: ['javascript']
    }
  },

  methods: {
    submit() {
      __alert('skills: ' + JSON.stringify(this.skills))
    }
  }
}
</script>
