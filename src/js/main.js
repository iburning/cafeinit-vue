/**
 * @fileoverview main
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-09
 */

/* Alert & Modal & Toast */
import CIAlertTip from './alertTip/CIAlertTip'

import CIModal from './modal/CIModal'
import CIActions from './modal/CIActions'
import CIAlert from './modal/CIAlert'
import CIConfirm from './modal/CIConfirm'

import CIToast from './toast/CIToast'


/* Buttons & Form */
import CIButton from './button/CIButton'

import CIForm from './form/CIForm'
import CIFormGroup from './form/CIFormGroup'
import CICheckbox from './form/CICheckbox'
import CICheckboxList from './form/CICheckboxList'
import CINumber from './form/CINumber'
import CIRadio from './form/CIRadio'
import CISelect from './form/CISelect'
import CISwitch from './form/CISwitch'
import CIText from './form/CIText'

import CIListCheckbox from './list/CIListCheckbox'
import CIListRadio from './list/CIListRadio'
import CIListSwitch from './list/CIListSwitch'

import CIImagePicker from './imagePicker/CIImagePicker'
import CISlider from './slider/CISlider'


/* Layout */
import CIBlock from './block/CIBlock'
import CIBlockBody from './block/CIBlockBody'
import CIBlockFooter from './block/CIBlockFooter'
import CIBlockHeader from './block/CIBlockHeader'

import CICollection from './collection/CICollection'
import CICollectionCell from './collection/CICollectionCell'

import CIGrid from './grid/CIGrid'
import CIGridCell from './grid/CIGridCell'

import CIList from './list/CIList'
import CIListCell from './list/CIListCell'
import CIListHeader from './list/CIListHeader'

import CIOffcanvas from './offcanvas/CIOffcanvas.vue'
import CIScrollView from './scrollView/CIScrollView'

import CISlideView from './slideView/CISlideView'
import CISlideViewItem from './slideView/CISlideViewItem'


/* Navigation */
import CIBreadcrumb from './breadcrumb/CIBreadcrumb'
import CIPagination from './pagination/CIPagination.vue'
import CINavigation from './navigation/CINavigation.vue'
import CITabBar from './tabView/CITabBar'
import CITreeNav from './treeNav/CITreeNav'


/* Others */
import CIBadge from './badge/CIBadge'
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
  'ci-select': CISelect,
  'ci-switch': CISwitch,
  'ci-text': CIText,

  'ci-list-checkbox': CIListCheckbox,
  'ci-list-radio': CIListRadio,
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
