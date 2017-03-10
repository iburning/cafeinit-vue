/**
 * @fileoverview main for bootstrap
 * @author: burning <www.cafeinit.com>
 * @version: 2016-09-28
 */

/* Alert & Modal & Toast */
import CIAlertTip from './alertTip/BSAlertTip.vue'

import CIActions from './modal/BSActions.vue'
import CIAlert from './modal/BSAlert.vue'
import CIConfirm from './modal/BSConfirm.vue'
import CIModal from './modal/BSModal.vue'

import CIToast from './toast/CIToast.vue'


/* Buttons & Form */
import CIButton from './button/BSButton.vue'

import CIForm from './form/BSForm.vue'
import CIFormGroup from './form/BSFormGroup.vue'
import CICheckbox from './form/BSCheckbox.vue'
import CINumber from './form/BSNumber.vue'
import CIRadio from './form/BSRadio.vue'
import CIRadioList from './form/BSRadioList.vue'
import CISelect from './form/BSSelect.vue'
import CISwitch from './form/BSSwitch.vue'
import CISwitchList from './form/BSSwitchList.vue'
import CIText from './form/BSText.vue'

import CIImagePicker from './imagePicker/CIImagePicker.vue'
import CISlider from './slider/CISlider.vue'


/* Layout */
import CIBlock from './block/CIBlock.vue'
import CIBlockBody from './block/CIBlockBody.vue'
import CIBlockFooter from './block/CIBlockFooter.vue'
import CIBlockHeader from './block/CIBlockHeader.vue'

import CICollection from './collection/CICollection.vue'
import CICollectionCell from './collection/CICollectionCell.vue'

import CIGrid from './grid/BSGrid.vue'
import CIGridCell from './grid/BSGridCell.vue'

import CIList from './list/CIList.vue'
import CIListCell from './list/CIListCell.vue'
import CIListHeader from './list/CIListHeader.vue'

import CIOffcanvas from './offcanvas/CIOffcanvas.vue'
import CIScrollView from './scrollView/CIScrollView.vue'

import CISlideView from './slideView/CISlideView.vue'
import CISlideViewItem from './slideView/CISlideViewItem.vue'

import CITable from './table/BSTable.vue'


/* Navigation */
import CIBreadcrumb from './breadcrumb/BSBreadcrumb.vue'
import CIPagination from './pagination/BSPagination.vue'
import CINavigation from './navigation/CINavigation.vue'
import CIStep from './steps/CIStep.vue'
import CISteps from './steps/CISteps.vue'
import CITab from './tabView/CITab.vue'
import CITabs from './tabView/CITabs.vue'
import CITreeNav from './treeNav/CITreeNav.vue'


/* Others */
import CIBadge from './badge/BSBadge.vue'
import CIImage from './image/CIImage.vue'
import CILoading from './loading/CILoading.vue'
import CIProgress from './progress/CIProgress.vue'
import CIRate from './rate/CIRate.vue'
import CISticky from './sticky/CISticky.vue'
import CIToTop from './toTop/CIToTop.vue'
import CIVideo from './video/CIVideo.vue'


/* Helper */
import CICompnentHelper from './utils/CICompnentHelper.js'
import CIScrollHelper from './utils/CIScrollHelper.js'


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
  'ci-number': CINumber,
  'ci-radio': CIRadio,
  'ci-radio-list': CIRadioList,
  'ci-select': CISelect,
  'ci-switch': CISwitch,
  'ci-switch-list': CISwitchList,
  'ci-text': CIText,

  'ci-image-picker': CIImagePicker,
  'ci-slider': CISlider,

  'ci-table': CITable,


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
  name: 'CafeinitVue for Bootstrap',
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
