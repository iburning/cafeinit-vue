<template>
  <ci-modal class="ci-modal-dialog"
    v-bind:size="size"
    v-bind:is-close-via-dimmer="isCloseViaDimmer"
    v-on:close="onCloseModal">
    <div class="ci-modal-header" v-if="title">{{title}}</div>
    <div class="ci-modal-body" v-if="content">{{content}}</div>
    <div class="ci-modal-body" v-else><slot>Hello CafeInit</slot></div>
    <div class="ci-modal-footer">
      <a class="ci-modal-btn" href="javascript:;" v-on:click="onClickButton">
        {{okText}}
      </a>
    </div>
  </ci-modal>
</template>

<script src="./_alert.js"></script>
