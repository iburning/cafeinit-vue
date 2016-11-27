/**
 * @fileoverview main for amazeui
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-15
 */

import CIAlertTip from './alertTip/AMAlertTip'
import CIBadge from './badge/CIBadge'

import CIBlock from './block/CIBlock'
import CIBlockBody from './block/CIBlockBody'
import CIBlockFooter from './block/CIBlockFooter'
import CIBlockHeader from './block/CIBlockHeader'

import CIBreadcrumb from './breadcrumb/AMBreadcrumb'

import CICollection from './collection/CICollection'
import CICollectionCell from './collection/CICollectionCell'

import CIGrid from './grid/AMGrid'
import CIGridCell from './grid/AMGridCell'

import CIImage from './image/CIImage'
import CIImagePicker from './imagePicker/CIImagePicker'

import CIList from './list/CIList'
import CIListCell from './list/CIListCell'
import CIListHeader from './list/CIListHeader'
import CIListCheckbox from './list/AMListCheckbox'
import CIListRadio from './list/AMListRadio'
import CIListSwitch from './list/AMListSwitch'

import CILoading from './loading/CILoading'

import CINavigation from './navigation/CINavigation.vue'
import CIOffcanvas from './offcanvas/CIOffcanvas.vue'
import CIPagination from './pagination/AMPagination.vue'

import CITabBar from './tabView/CITabBar'
import CITreeNav from './treeNav/CITreeNav'

// import CITable from './table/AMTable'

/* for form */
import CICheckbox from './form/AMCheckbox'
import CIForm from './form/AMForm'
import CIFormGroup from './form/AMFormGroup'
import CIInput from './form/AMInput'
import CINumber from './form/AMNumber'
import CIRadio from './form/AMRadio'
import CISelect from './form/AMSelect'
import CISwitch from './form/AMSwitch'

import CIButton from './button/AMButton'
import CILinkButton from './button/AMLinkButton'

/* for modal */
import CIModal from './modal/AMModal'
import CIActions from './modal/AMActions'
import CIAlert from './modal/AMAlert'
import CIConfirm from './modal/AMConfirm'

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
  'ci-badge': CIBadge,

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

  'ci-slider': CISlider,
  'ci-slide-view': CISlideView,
  'ci-slide-view-item': CISlideViewItem,
  'ci-sticky': CISticky,
  'ci-toast': CIToast,
  'ci-to-top': CIToTop
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
    CICompnentHelper: CICompnentHelper,
    CIScrollHelper: CIScrollHelper
  }
}
