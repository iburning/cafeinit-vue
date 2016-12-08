/**
 * @fileoverview main for amazeui
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-15
 */

/* Alert & Modal & Toast */
import CIAlertTip from './alertTip/AMAlertTip'

import CIActions from './modal/AMActions'
import CIAlert from './modal/AMAlert'
import CIConfirm from './modal/AMConfirm'
import CIModal from './modal/AMModal'

import CIToast from './toast/CIToast'


/* Buttons & Form */
import CIButton from './button/AMButton'

import CIForm from './form/AMForm'
import CIFormGroup from './form/AMFormGroup'
import CICheckbox from './form/AMCheckbox'
import CICheckboxList from './form/AMCheckboxList'
import CINumber from './form/AMNumber'
import CIRadio from './form/AMRadio'
import CIRadioList from './form/AMRadioList'
import CISelect from './form/AMSelect'
import CISwitch from './form/AMSwitch'
import CIText from './form/AMText'

import CIListSwitch from './list/AMListSwitch'

import CIImagePicker from './imagePicker/CIImagePicker'
import CISlider from './slider/CISlider'


/* Layout */
import CIBlock from './block/CIBlock'
import CIBlockBody from './block/CIBlockBody'
import CIBlockFooter from './block/CIBlockFooter'
import CIBlockHeader from './block/CIBlockHeader'

import CICollection from './collection/CICollection'
import CICollectionCell from './collection/CICollectionCell'

import CIGrid from './grid/AMGrid'
import CIGridCell from './grid/AMGridCell'

import CIList from './list/CIList'
import CIListCell from './list/CIListCell'
import CIListHeader from './list/CIListHeader'

import CIOffcanvas from './offcanvas/CIOffcanvas.vue'
import CIScrollView from './scrollView/CIScrollView'

import CISlideView from './slideView/CISlideView'
import CISlideViewItem from './slideView/CISlideViewItem'


/* Navigation */
import CIBreadcrumb from './breadcrumb/AMBreadcrumb'
import CIPagination from './pagination/AMPagination.vue'
import CINavigation from './navigation/CINavigation.vue'
import CITabBar from './tabView/CITabBar'
import CITreeNav from './treeNav/CITreeNav'


/* Others */
import CIBadge from './badge/AMBadge'
import CIImage from './image/CIImage'
import CILoading from './loading/CILoading'
import CIRate from './rate/CIRate'
import CISticky from './sticky/CISticky'
import CIToTop from './toTop/CIToTop'


/* Helper */
import CICompnentHelper from './utils/CICompnentHelper'
import CIScrollHelper from './utils/CIScrollHelper'


const CIComponents = {
  /* Alert & Modal & Toast */
  'ci-alert-tip': CIAlertTip,

  'ci-modal': CIModal,
  'ci-actions': CIActions,
  'ci-alert': CIAlert,
  'ci-confirm': CIConfirm,

  'ci-toast': CIToast,


  /* Buttons & Form */
  'ci-button': CIButton,

  'ci-form': CIForm,
  'ci-form-group': CIFormGroup,
  'ci-checkbox': CICheckbox,
  'ci-checkbox-list': CICheckboxList,
  'ci-number': CINumber,
  'ci-radio': CIRadio,
  'ci-radio-list': CIRadioList,
  'ci-select': CISelect,
  'ci-switch': CISwitch,
  'ci-text': CIText,

  'ci-list-switch': CIListSwitch,

  'ci-image-picker': CIImagePicker,
  'ci-slider': CISlider,


  /* Layout */
  'ci-block': CIBlock,
  'ci-block-body': CIBlockBody,
  'ci-block-footer': CIBlockFooter,
  'ci-block-header': CIBlockHeader,

  'ci-collection': CICollection,
  'ci-collection-cell': CICollectionCell,

  'ci-list': CIList,
  'ci-list-cell': CIListCell,
  'ci-list-header': CIListHeader,

  'ci-grid': CIGrid,
  'ci-grid-cell': CIGridCell,

  'ci-offcanvas': CIOffcanvas,
  'ci-scroll-view': CIScrollView,

  'ci-slide-view': CISlideView,
  'ci-slide-view-item': CISlideViewItem,


  /* Navigation */
  'ci-breadcrumb': CIBreadcrumb,
  'ci-pagination': CIPagination,
  'ci-navigation': CINavigation,
  'ci-tab-bar': CITabBar,
  'ci-tree-nav': CITreeNav,


  /* Others */
  'ci-badge': CIBadge,
  'ci-image': CIImage,
  'ci-loading': CILoading,
  'ci-rate': CIRate,
  'ci-sticky': CISticky,
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
