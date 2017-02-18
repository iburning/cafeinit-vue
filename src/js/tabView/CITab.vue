<template>
  <div v-bind:class="{ 'ci-tab': true, 'ci-tab-active': isActive }"
    v-on:click="$emit('click')">
    <a v-bind:href="url || 'javascript:;'">
      <i v-if="icon" v-bind:class="['ci-icon', icon]"></i>
      <span v-if="title" class="ci-tab-title">{{title}}</span>
      <slot></slot>
    </a>
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
