<template>
  <ci-modal class="ci-modal-dialog"
    v-bind:size="size"
    v-bind:is-close-via-dimmer="false">
    <div class="ci-modal-header" v-if="title">{{title}}</div>
    <div class="ci-modal-body" v-if="content">{{content}}</div>
    <div class="ci-modal-body" v-else><slot>Hello CafeInit</slot></div>
    <div class="ci-modal-footer">
      <a class="ci-modal-btn" href="javascript:;" v-on:click="cancel">
        {{concelText}}
      </a>
      <a class="ci-modal-btn" href="javascript:;" v-on:click="ok">
        {{okText}}
      </a>
    </div>
  </ci-modal>
</template>

<script src="./_confirm"></script>
