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

     groups: {
       type: Array,
       default: null
     },

     value: {
       type: [String, Number, Object],
       default: ''
     }
   },

   data() {
     return {
       currentValue: function () {
         if (typeof this.value === 'object') {
           return Object.assign({}, this.value)
         }
         else {
           return this.value
         }
       }
     }
   },

   watch: {
     value(val) {
       if (typeof val ==='object') {
         this.currentValue = Object.assign({}, val)
       }
       else {
         this.currentValue = val
       }
     }
   },

   methods: {
     onChange: function (evt) {
       this.$emit('change', this.currentValue)
       this.$emit('input', this.currentValue)
     }
   }
 }
