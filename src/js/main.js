/**
 * @fileoverview main
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-09
 */

import CIAlertTip from './alertTip/CIAlertTip'

import CIBlock from './block/CIBlock.vue'
import CIBlockBody from './block/CIBlockBody.vue'
import CIBlockFooter from './block/CIBlockFooter.vue'
import CIBlockHeader from './block/CIBlockHeader.vue'

import CIBreadcrumb from './breadcrumb/CIBreadcrumb.vue'

import CICollection from './collection/CICollection'
import CICollectionCell from './collection/CICollectionCell'

import CIGrid from './grid/CIGrid.vue'
import CIGridCell from './grid/CIGridCell.vue'

import CIImage from './image/CIImage'

import CIList from './list/CIList'
import CIListCell from './list/CIListCell'
import CIListHeader from './list/CIListHeader'
import CIListCheckbox from './list/AMListCheckbox'
import CIListRadio from './list/AMListRadio'
import CIListSwitch from './list/AMListSwitch'

import CILoading from './loading/CILoading.vue'

// import CIPagination from './pagination/CIPagination.vue'

import CITabBar from './tabView/CITabBar.vue'
import CITreeNav from './treeNav/CITreeNav'

// import CITable from './table/CITable.vue'

/* for form */
import CICheckbox from './form/CICheckbox.vue'
import CIForm from './form/CIForm.vue'
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

import CIRate from './rate/CIRate'
import CISlider from './slider/CISlider'
import CISlideView from './slideView/CISlideView'
import CISlideViewItem from './slideView/CISlideViewItem'
import CISticky from './sticky/CISticky'
import CIToast from './toast/CIToast'
import CIToTop from './toTop/CIToTop'

import CICompnentHelper from './utils/CICompnentHelper'
import CIScrollHelper from './utils/CIScrollHelper'


const CIComponents = {
  'ci-alert-tip': CIAlertTip,

  'ci-block': CIBlock,
  'ci-block-body': CIBlockBody,
  'ci-block-footer': CIBlockFooter,
  'ci-block-header': CIBlockHeader,

  'ci-breadcrumb': CIBreadcrumb,

  'ci-collection': CICollection,
  'ci-collection-cell': CICollectionCell,

  'ci-grid': CIGrid,
  'ci-grid-cell': CIGridCell,

  'ci-image': CIImage,

  'ci-list': CIList,
  'ci-list-cell': CIListCell,
  'ci-list-header': CIListHeader,
  'ci-list-checkbox': CIListCheckbox,
  'ci-list-radio': CIListRadio,
  'ci-list-switch': CIListSwitch,

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
  'ci-confirm': CIConfirm,

  'ci-rate': CIRate,
  'ci-slider': CISlider,
  'ci-slide-view': CISlideView,
  'ci-slide-view-item': CISlideViewItem,
  'ci-sticky': CISticky,
  'ci-toast': CIToast,
  'ci-to-top': CIToTop
}

// export default {
module.exports = {
  name: 'CafeinitVue',
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
