/**
 * @fileOverview main
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-26
 */

import CIBlock from './block/CIBlock.vue'
import CIBlockBody from './block/CIBlockBody.vue'
import CIBlockFooter from './block/CIBlockFooter.vue'
import CIBlockHeader from './block/CIBlockHeader.vue'

import CIBreadcrumb from './breadcrumb/CIBreadcrumb.vue'

import CIGallery from './gallery/CIGallery.vue'
import CIGalleryCell from './gallery/CIGalleryCell.vue'

import CIGrid from './grid/CIGrid.vue'
import CIGridCell from './grid/CIGridCell.vue'

import CIList from './list/CIList.vue'
import CIListCell from './list/CIListCell.vue'
import CIListCheckbox from './list/CIListCheckbox.vue'
import CIListRadio from './list/CIListRadio.vue'

import CILoading from './loading/CILoading.vue'

import CIPagination from './pagination/CIPagination.vue'

import CITabBar from './tabView/CITabBar.vue'

import CITable from './table/CITable.vue'


/* for form */
import CICheckbox from './form/CICheckbox.vue'
// import CIDatetimePicker from './form/CIDatetimePicker.vue'
import CIInput from './form/CIInput.vue'
import CIRadio from './form/CIRadio.vue'
import CISelect from './form/CISelect.vue'

import CIButton from './button/CIButton.vue'
import CILinkButton from './button/CILinkButton.vue'


/* for modal */
import CIModal from './modal/CIModal.vue'
import CIActions from './modal/CIActions.vue'
import CIAlert from './modal/CIAlert.vue'
import CIConfirm from './modal/CIConfirm.vue'


import CIScrollHelper from './utils/CIScrollHelper'


const CIomponents = {
  'ci-block': CIBlock,
  'ci-block-body': CIBlockBody,
  'ci-block-footer': CIBlockFooter,
  'ci-block-header': CIBlockHeader,

  'ci-breadcrumb': CIBreadcrumb,

  'ci-gallery': CIGallery,
  'ci-gallery-cell': CIGalleryCell,

  'ci-grid': CIGrid,
  'ci-grid-cell': CIGridCell,

  'ci-list': CIList,
  'ci-list-cell': CIListCell,
  'ci-list-checkbox': CIListCheckbox,
  'ci-list-radio': CIListRadio,

  'ci-loading': CILoading,

  'ci-pagination': CIPagination,

  'ci-tab-bar': CITabBar,
  'ci-table': CITable,

  /* for form */
  'ci-button': CIButton,
  'ci-link-button': CILinkButton,

  'ci-checkbox': CICheckbox,
  // 'ci-datetime-picker': CIDatetimePicker,
  'ci-input': CIInput,
  'ci-radio': CIRadio,
  'ci-select': CISelect,

  /* form modal */
  'ci-modal': CIModal,
  'ci-actions': CIActions,
  'ci-alert': CIAlert,
  'ci-confirm': CIConfirm
}

// export default {
module.exports = {
  name: 'CafeinitVue',
  ver: '1.0.0',

  components: (Vue) => {
    for (let name in CIomponents) {
      Vue.component(name, CIomponents[name])
    }
  },

  utils: {
    CIScrollHelper: CIScrollHelper
  }
}
