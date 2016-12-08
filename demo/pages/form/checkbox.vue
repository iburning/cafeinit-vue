<template>
  <div id="page-checkbox">
    <ci-list>
      <ci-list-cell>
        <ci-form-group title="Skills">
          <ci-checkbox name="skills" inline="inline"
            v-model="skills" v-bind:options="skillOptions"></ci-checkbox>
        </ci-form-group>
      </ci-list-cell>

      <ci-list-cell>
        <ci-form-group title="Skills">
          <ci-checkbox name="skills"
            v-model="skills" v-bind:options="skillOptions"></ci-checkbox>
        </ci-form-group>
      </ci-list-cell>
    </ci-list>

    <ci-list>
      <ci-list-cell>
        <ci-checkbox name="select-all"
          v-model="isSelectAll" v-bind:option="{ title: 'Select All' }"
          v-on:click="isSelectAllSilent = false"></ci-checkbox>
      </ci-list-cell>
    </ci-list>

    <!-- <ci-checkbox-list title="Skills" name="skills" v-model="skills"
      v-bind:options="skillOptions"></ci-checkbox-list> -->

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
      skillOptions: [
        { value: 'javascript', title: 'Javascript' },
        { value: 'html', title: 'HTML' },
        { value: 'css', title: 'CSS' },
        { value: 'oc', title: 'Objective-C', disabled: true },
        { value: 'swift', title: 'Swift' }
      ],
      skills: ['javascript'],
      isSelectAll: false,
      isSelectAllSilent: false
    }
  },

  computed: {
    skillOptionsRealeCount() {
      let count = 0
      for (let i = 0; i < this.skillOptions.length; i++) {
        if (!this.skillOptions[i].disabled) {
          count++
        }
      }
      return count
    }
  },

  watch: {
    isSelectAll(val) {
      console.log('isSelectAll', val)
      if (val) {
        let skills = []
        for (let i = 0; i < this.skillOptions.length; i++) {
          if (!this.skillOptions[i].disabled) {
            skills.push(this.skillOptions[i].value)
          }
        }
        this.skills = skills
      }
      else {
        if (!this.isSelectAllSilent) {
          this.skills = []
        }
      }
    },

    skills(val) {
      this.isSelectAllSilent = true
      if (val.length == this.skillOptionsRealeCount) {
        this.isSelectAll = true
      }
      else if (val.length < this.skillOptionsRealeCount) {
        this.isSelectAll = false
      }
    }
  },

  methods: {
    submit() {
      __alert('skills: ' + this.skills + ' isSelectAll: ' + this.isSelectAll)
    }
  }
}
</script>
