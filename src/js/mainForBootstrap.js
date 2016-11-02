/**
 * @fileoverview main for bootstrap
 * @author: burning <www.cafeinit.com>
 * @version: 2016-09-28
 */

import CIAlertTip from './alertTip/BSAlertTip'

import CIBlock from './block/CIBlock'
import CIBlockBody from './block/CIBlockBody'
import CIBlockFooter from './block/CIBlockFooter'
import CIBlockHeader from './block/CIBlockHeader'

import CIBreadcrumb from './breadcrumb/BSBreadcrumb'

import CIGallery from './gallery/CIGallery'
import CIGalleryCell from './gallery/CIGalleryCell'

import CIGrid from './grid/BSGrid'
import CIGridCell from './grid/BSGridCell'

import CIList from './list/CIList'
import CIListCell from './list/CIListCell'
// import CIListCheckbox from './list/BSListCheckbox'
// import CIListRadio from './list/BSListRadio'

import CILoading from './loading/CILoading'

// import CIPagination from './pagination/BSPagination'
//
import CITabBar from './tabView/CITabBar'
import CITreeNav from './treeNav/CITreeNav'
//
// import CITable from './table/BSTable'
//
//
// /* for form */
// import CICheckbox from './form/BSCheckbox'
// // import CIDatetimePicker from './form/BSDatetimePicker'
// import CIInput from './form/BSInput'
// import CIRadio from './form/BSRadio'
// import CISelect from './form/BSSelect'

import CIButton from './button/BSButton'
import CILinkButton from './button/BSLinkButton'

//
// /* for modal */
// import CIModal from './modal/BSModal'
// import CIActions from './modal/BSActions'
// import CIAlert from './modal/BSAlert'
// import CIConfirm from './modal/BSConfirm'
//
//
import CIScrollHelper from './utils/CIScrollHelper'


const CIComponents = {
  'ci-alert-tip': CIAlertTip,

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
  // 'ci-list-checkbox': CIListCheckbox,
  // 'ci-list-radio': CIListRadio,

  'ci-loading': CILoading,

  // 'ci-pagination': CIPagination,
  //
  'ci-tab-bar': CITabBar,
  // 'ci-table': CITable,
  'ci-tree-nav': CITreeNav,
  //
  // /* for form */
  'ci-button': CIButton,
  'ci-link-button': CILinkButton,
  //
  // 'ci-checkbox': CICheckbox,
  // // 'ci-datetime-picker': CIDatetimePicker,
  // 'ci-input': CIInput,
  // 'ci-radio': CIRadio,
  // 'ci-select': CISelect,
  //
  // /* form modal */
  // 'ci-modal': CIModal,
  // 'ci-actions': CIActions,
  // 'ci-alert': CIAlert,
  // 'ci-confirm': CIConfirm
}

// export default {
module.exports = {
  name: 'CafeinitVue for Bootstrap',
  ver: '1.0.0',

  components: (Vue) => {
    for (let name in CIComponents) {
      Vue.component(name, CIComponents[name])
    }
  },

  utils: {
    CIScrollHelper: CIScrollHelper
  }
}
