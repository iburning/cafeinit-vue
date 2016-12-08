<template>
  <div id="page-select">
    <ci-list>
      <ci-list-cell>
        <ci-form-group title="Skills">
          <ci-select name="skills" v-model="skill"
            v-bind:options="skillOptions"></ci-select>
        </ci-form-group>
      </ci-list-cell>

      <ci-list-cell>
        <ci-select name="skills" v-model="skill"
          v-bind:options="skillOptions"></ci-select>
        </ci-form-group>
      </ci-list-cell>
    </ci-list>

    <div class="ci-btn-area">
      <ci-button style="primary" block="block" v-on:click="submit">Submit</ci-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-select',

  data() {
    return {
      skillOptions: [
        { value: 'javascript', title: 'Javascript' },
        { value: 'html', title: 'HTML' },
        { value: 'css', title: 'CSS' },
        { value: 'oc', title: 'Objective-C', disabled: true },
        { value: 'swift', title: 'Swift' }
      ],
      skill: 'javascript'
    }
  },

  methods: {
    submit() {
      __alert('skill: ' + this.skill)
    }
  }
}
</script>
