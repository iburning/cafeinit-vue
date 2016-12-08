/**
 * @fileoverview select
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-08
 */

 export default {
   name: 'ci-select',

   props: {
     ns: String,
     name: String,

     options: {
       type: Array,
       default: function () {
         return []
       }
     },

     value: {
       type: String,
       default: ''
     }
   },

   data() {
     return {
       currentValue: this.value
     }
   },

   watch: {
     value(val) {
       this.currentValue = val
     }
   },

   methods: {
     onChange: function (evt) {
       this.$emit('input', this.currentValue)
     }
   }
 }
