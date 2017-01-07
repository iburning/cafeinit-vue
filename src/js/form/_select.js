/**
 * @fileoverview select
 * @author: burning <www.cafeinit.com>
 * @version: 2017-01-07
 */

 export default {
   name: 'ci-select',

   props: {
     ns: String,
     name: String,

     options: {
       type: Array,
       default() {
         return []
       }
     },

     groups: {
       type: Array,
       default() {
         return null
       }
     },

     value: {
       type: [String, Number],
       default: ''
     }
   },

   data() {
     return {
      //  currentValue: function () {
      //    if (typeof this.value === 'object') {
      //      return Object.assign({}, this.value)
      //    }
      //    else {
      //      return this.value
      //    }
      //  }
      myValue: this.value
     }
   },

   watch: {
    //  value(val) {
    //    if (typeof val ==='object') {
    //      this.currentValue = Object.assign({}, val)
    //    }
    //    else {
    //      this.currentValue = val
    //    }
    //  }
    value(val) {
      this.myValue = val
    }
   },

   methods: {
     onChange: function (evt) {
       this.$emit('change', this.myValue)
       this.$emit('input', this.myValue)
     }
   }
 }
