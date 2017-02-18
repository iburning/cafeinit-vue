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
import CIRadioList from './form/CIRadioList'
import CISelect from './form/CISelect'
import CISwitch from './form/CISwitch'
import CISwitchList from './form/CISwitchList'
import CIText from './form/CIText'
import CITextarea from './form/CITextarea'

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

import CITable from './table/CITable'


/* Navigation */
import CIBreadcrumb from './breadcrumb/CIBreadcrumb'
import CIPagination from './pagination/CIPagination.vue'
import CINavigation from './navigation/CINavigation.vue'
import CIStep from './steps/CIStep'
import CISteps from './steps/CISteps'
import CITab from './tabView/CITab'
import CITabs from './tabView/CITabs'
import CITreeNav from './treeNav/CITreeNav'


/* Others */
import CIBadge from './badge/CIBadge'
import CIImage from './image/CIImage'
import CILoading from './loading/CILoading'
import CIProgress from './progress/CIProgress'
import CIRate from './rate/CIRate'
import CISticky from './sticky/CISticky'
import CIToTop from './toTop/CIToTop'
import CIVideo from './video/CIVideo'


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
  'ci-switch-list': CISwitchList,
  'ci-text': CIText,
  'ci-textarea': CITextarea,

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

  'ci-table': CITable,


  /* Navigation */
  'ci-breadcrumb': CIBreadcrumb,
  'ci-pagination': CIPagination,
  'ci-navigation': CINavigation,
  'ci-step': CIStep,
  'ci-steps': CISteps,
  'ci-tab': CITab,
  'ci-tabs': CITabs,
  'ci-tree-nav': CITreeNav,


  /* Others */
  'ci-badge': CIBadge,
  'ci-image': CIImage,
  'ci-loading': CILoading,
  'ci-progress': CIProgress,
  'ci-rate': CIRate,
  'ci-sticky': CISticky,
  'ci-to-top': CIToTop,
  'ci-video': CIVideo
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
