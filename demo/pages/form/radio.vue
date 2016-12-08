<template>
  <div id="page-radio">
    <ci-list>
      <ci-list-cell>
        <ci-form-group title="Gender" title-width="3em">
          <ci-radio name="gender" inline="inline" v-model="gender"
            v-bind:options="[
              { title: 'Male', value: 'M' },
              { title: 'Female', value: 'F' }
            ]"></ci-radio>
        </ci-form-group>
      </ci-list-cell>

      <ci-list-cell>
        <ci-form-group title="Skill" title-width="3em">
          <ci-radio name="skill" v-model="skill"
            v-bind:options="skillOptions"></ci-radio>
        </ci-form-group>
      </ci-list-cell>
    </ci-list>

    <ci-radio-list title="Country" name="country" v-model="country"
      v-bind:options="countryOptions"></ci-radio-list>

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
      gender: '',

      countryOptions: [
        { value: 'AM', title: 'America' },
        { value: 'CN', title: 'China' },
        { value: 'EN', title: 'England' },
        { value: 'JP', title: 'Japan', disabled: true },
        { value: 'IN', title: 'India' }
      ],
      country: 'cn'
    }
  },

  methods: {
    submit() {
      let info = []
      info.push('gender: ' + this.gender)
      info.push('skill: ' + this.skill)
      info.push('country: ' + this.country)
      __alert(info.join('\n'))
    }
  }
}
</script>
