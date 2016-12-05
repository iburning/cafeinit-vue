/**
 * @fileoverview main
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-09
 */

import CIAlertTip from './alertTip/CIAlertTip'
import CIBadge from './badge/CIBadge'

import CIBlock from './block/CIBlock'
import CIBlockBody from './block/CIBlockBody'
import CIBlockFooter from './block/CIBlockFooter'
import CIBlockHeader from './block/CIBlockHeader'

import CIBreadcrumb from './breadcrumb/CIBreadcrumb'

import CICollection from './collection/CICollection'
import CICollectionCell from './collection/CICollectionCell'

import CIGrid from './grid/CIGrid.vue'
import CIGridCell from './grid/CIGridCell'

import CIImage from './image/CIImage'
import CIImagePicker from './imagePicker/CIImagePicker'

import CIList from './list/CIList'
import CIListCell from './list/CIListCell'
import CIListHeader from './list/CIListHeader'
import CIListCheckbox from './list/AMListCheckbox'
import CIListRadio from './list/AMListRadio'
import CIListSwitch from './list/AMListSwitch'

import CILoading from './loading/CILoading'

import CINavigation from './navigation/CINavigation'
import CIOffcanvas from './offcanvas/CIOffcanvas'
import CIPagination from './pagination/AMPagination'

import CITabBar from './tabView/CITabBar'
import CITreeNav from './treeNav/CITreeNav'

// import CITable from './table/CITable.vue'

/* for form */
import CICheckbox from './form/CICheckbox'
import CIForm from './form/CIForm'
import CIFormGroup from './form/CIFormGroup'
import CIInput from './form/CIInput'
import CINumber from './form/CINumber'
import CIRadio from './form/CIRadio'
import CISelect from './form/CISelect'
import CISwitch from './form/CISwitch'

import CIButton from './button/CIButton'
import CILinkButton from './button/CILinkButton'


/* for modal */
import CIModal from './modal/CIModal'
import CIActions from './modal/CIActions'
import CIAlert from './modal/CIAlert'
import CIConfirm from './modal/CIConfirm'

import CIRate from './rate/CIRate'
import CIScrollView from './scrollView/CIScrollView'
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
  'ci-navigation': CINavigation,
  'ci-pagination': CIPagination,
  'ci-offcanvas': CIOffcanvas,
  'ci-tab-bar': CITabBar,
  // 'ci-table': CITable,
  'ci-tree-nav': CITreeNav,

  /* for form */
  'ci-button': CIButton,
  'ci-link-button': CILinkButton,

  'ci-checkbox': CICheckbox,
  'ci-form': CIForm,
  'ci-form-group': CIFormGroup,
  'ci-image-picker': CIImagePicker,
  'ci-input': CIInput,
  'ci-number': CINumber,
  'ci-radio': CIRadio,
  'ci-select': CISelect,
  'ci-switch': CISwitch,

  /* form modal */
  'ci-modal': CIModal,
  'ci-actions': CIActions,
  'ci-alert': CIAlert,
  'ci-confirm': CIConfirm,

  'ci-rate': CIRate,
  'ci-scroll-view': CIScrollView,
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
    CICompnentHelper: CICompnentHelper,
    CIScrollHelper: CIScrollHelper
  }
}
