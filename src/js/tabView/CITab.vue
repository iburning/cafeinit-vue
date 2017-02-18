<template>
  <div v-bind:class="{ 'ci-tab': true, 'ci-tab-active': isActive }"
    v-on:click="$emit('click')">
    <slot>
      <a v-bind:href="url || 'javascript:;'">
        <i v-if="icon" v-bind:class="['ci-icon', icon]"></i>
        <span class="ci-tab-title">{{title}}</span>
      </a>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ci-tab',

  props: {
    icon: String,
    title: String,
    url: String,
    to: String
  },

  data() {
    return {
      isActive: false
    }
  }
}
</script>
