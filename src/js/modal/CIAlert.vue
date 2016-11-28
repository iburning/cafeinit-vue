<template>
  <transition name="ci">
    <div v-bind:class="ns + 'modal'">
      <div v-bind:class="ns + 'modal-dialog'">
        <div class="ci-modal-header" v-if="title">{{title}}</div>
        <div class="ci-modal-body" v-if="content">{{content}}</div>
        <div class="ci-modal-body" v-else><slot>Hello CafeInit</slot></div>
        <div class="ci-modal-footer">
          <a class="ci-modal-btn" href="javascript:;" v-on:click="buttonOnClick">
            {{okText}}
          </a>
        </div>
      </div>

      <div v-bind:class="ns + 'dimmer'" v-on:click="modalOnClick"></div>
    </div>
  </transition>
</template>

<script src="./_alert.js"></script>
