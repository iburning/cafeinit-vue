/**
 * @fileoverview main for bootstrap
 * @author: burning <www.cafeinit.com>
 * @version: 2016-09-28
 */

 /* Alert & Modal & Toast */
 import CIAlertTip from './alertTip/BSAlertTip'

 import CIActions from './modal/BSActions'
 import CIAlert from './modal/BSAlert'
 import CIConfirm from './modal/BSConfirm'
 import CIModal from './modal/BSModal'

 import CIToast from './toast/CIToast'


 /* Buttons & Form */
 import CIButton from './button/BSButton'

 import CIForm from './form/BSForm'
 import CICheckbox from './form/BSCheckbox'
 import CINumber from './form/BSNumber'
 import CIRadio from './form/BSRadio'
 import CISelect from './form/BSSelect'
 import CISwitch from './form/BSSwitch'
 import CIText from './form/BSText'

 import CIListCheckbox from './list/BSListCheckbox'
 import CIListRadio from './list/BSListRadio'
 import CIListSwitch from './list/BSListSwitch'

 import CIImagePicker from './imagePicker/CIImagePicker'
 import CISlider from './slider/CISlider'


 /* Layout */
 import CIBlock from './block/CIBlock'
 import CIBlockBody from './block/CIBlockBody'
 import CIBlockFooter from './block/CIBlockFooter'
 import CIBlockHeader from './block/CIBlockHeader'

 import CICollection from './collection/CICollection'
 import CICollectionCell from './collection/CICollectionCell'

 import CIGrid from './grid/BSGrid'
 import CIGridCell from './grid/BSGridCell'

 import CIList from './list/CIList'
 import CIListCell from './list/CIListCell'
 import CIListHeader from './list/CIListHeader'

 import CIOffcanvas from './offcanvas/CIOffcanvas.vue'
 import CIScrollView from './scrollView/CIScrollView'

 import CISlideView from './slideView/CISlideView'
 import CISlideViewItem from './slideView/CISlideViewItem'


 /* Navigation */
 import CIBreadcrumb from './breadcrumb/BSBreadcrumb'
 import CIPagination from './pagination/BSPagination.vue'
 import CINavigation from './navigation/CINavigation.vue'
 import CITabBar from './tabView/CITabBar'
 import CITreeNav from './treeNav/CITreeNav'


 /* Others */
 import CIBadge from './badge/BSBadge'
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
  'ci-checkbox': CICheckbox,
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
