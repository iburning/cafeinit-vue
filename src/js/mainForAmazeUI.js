/**
 * @fileoverview main for amazeui
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-07
 */

// import CIAlertTip from './alertTip/AMAlertTip'

import CIBlock from './block/CIBlock'
import CIBlockBody from './block/CIBlockBody'
import CIBlockFooter from './block/CIBlockFooter'
import CIBlockHeader from './block/CIBlockHeader'

import CIBreadcrumb from './breadcrumb/AMBreadcrumb'

import CIGallery from './gallery/CIGallery'
import CIGalleryCell from './gallery/CIGalleryCell'

import CIGrid from './grid/AMGrid'
import CIGridCell from './grid/AMGridCell'

import CIList from './list/CIList'
import CIListCell from './list/CIListCell'
import CIListCheckbox from './list/AMListCheckbox'
import CIListRadio from './list/AMListRadio'

import CILoading from './loading/CILoading'

// import CIPagination from './pagination/AMPagination.vue'

import CITabBar from './tabView/CITabBar'
import CITreeNav from './treeNav/CITreeNav'

// import CITable from './table/AMTable'

/* for form */
import CICheckbox from './form/AMCheckbox'
import CIForm from './form/AMForm'
import CIInput from './form/AMInput'
import CIRadio from './form/AMRadio'
import CISelect from './form/AMSelect'

import CIButton from './button/AMButton'
import CILinkButton from './button/AMLinkButton'

/* for modal */
import CIModal from './modal/AMModal'
import CIActions from './modal/AMActions'
import CIAlert from './modal/AMAlert'
import CIConfirm from './modal/AMConfirm'

import CIScrollHelper from './utils/CIScrollHelper'


const CIComponents = {
  // 'ci-alert-tip': CIAlertTip,

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

  // 'ci-pagination': CIPagination,

  'ci-tab-bar': CITabBar,
  // 'ci-table': CITable,
  'ci-tree-nav': CITreeNav,

  /* for form */
  'ci-button': CIButton,
  'ci-link-button': CILinkButton,

  'ci-checkbox': CICheckbox,
  'ci-form': CIForm,
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
  name: 'CafeinitVue for AmazeUI',
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
