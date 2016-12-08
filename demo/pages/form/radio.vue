<template>
  <div id="page-radio">
    <ci-list>
      <ci-list-cell>
        <ci-form-group title="Gender">
          <ci-radio name="gender" inline="inline" v-model="gender"
            v-bind:options="[
              { title: 'Male', value: 'm' },
              { title: 'Female', value: 'f' }
            ]"></ci-radio>
        </ci-form-group>
      </ci-list-cell>

      <ci-list-cell>
        <ci-form-group title="Skill">
          <ci-radio name="skill" v-model="skill"
            v-bind:options="skillOptions"></ci-radio>
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
  name: 'page-radio',

  data() {
    return {
      skillOptions: [
        { value: 'javascript', title: 'Javascript' },
        { value: 'html', title: 'HTML' },
        { value: 'css', title: 'CSS' },
        { value: 'oc', title: 'Objective-C', disabled: true },
        { value: 'swift', title: 'Swift' }
      ],
      skill: 'javascript',
      gender: ''
    }
  },

  methods: {
    submit() {
      __alert('skill: ' + this.skill + ' gender: ' + this.gender)
    }
  }
}
</script>
