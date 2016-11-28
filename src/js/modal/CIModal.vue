<template>
  <transition name="cci">
    <div v-bind:class="ns + 'modal'" v-on:click="onClick">
      <div v-bind:class="ns + 'modal-container'">
        <slot></slot>
      </div>

      <div v-bind:class="ns + 'dimmer'"></div>
    </div>
  </transition>
</template>

<script src="./_modal.js"></script>
