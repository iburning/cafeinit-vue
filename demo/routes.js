/**
 * @fileoverview routes
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-27
 */

import Index from './pages/index.vue'
import AlertTip from './pages/alertTip.vue'
import Badges from './pages/badges.vue'
import Block from './pages/block.vue'
import Breadcrumb from './pages/breadcrumb.vue'
import Buttons from './pages/buttons.vue'
import Collection from './pages/collection.vue'
import FormView from './pages/form.vue'
import FormList from './pages/formList.vue'
import Grid from './pages/grid.vue'
import Images from './pages/images.vue'
import ImagePicker from './pages/imagePicker.vue'
import List from './pages/list.vue'
import Loading from './pages/loading.vue'
import Modals from './pages/modals.vue'
import Navigation from './pages/navigation.vue'
import Offcanvas from './pages/offcanvas.vue'
import PageDemo from './pages/pageDemo.vue'
import Pagination from './pages/pagination.vue'
import Progress from './pages/progress.vue'
import Rate from './pages/rate.vue'
// import ScrollView from './pages/scrollView.vue'
import Steps from './pages/steps.vue'
import SlideView from './pages/slideView.vue'
import Sticky from './pages/sticky.vue'
import Tabs from './pages/tabs.vue'
import Table from './pages/table.vue'
import Toasts from './pages/toasts.vue'
import ToTop from './pages/toTop.vue'
import Videos from './pages/videos.vue'

import FormCheckbox from './pages/form/checkbox.vue'
import FormNumber from './pages/form/number.vue'
import FormRadio from './pages/form/radio.vue'
import FormSelect from './pages/form/select.vue'
import FormSlider from './pages/form/slider.vue'
import FormSwitch from './pages/form/switch.vue'
import FormText from './pages/form/text.vue'
import FormTextarea from './pages/form/textarea.vue'

import DemoScrollList from './pages/demo/scrollList.vue'

export default [
  { path: '/', component: Index },
  { path: '/alert-tip', component: AlertTip },
  { path: '/badges', component: Badges },
  { path: '/block', component: Block },
  { path: '/breadcrumb', component: Breadcrumb },
  { path: '/buttons', component: Buttons },
  { path: '/collection', component: Collection },
  // { path: '/form', component: FormView },
  // { path: '/form-list', component: FormList },
  { path: '/grid', component: Grid },
  { path: '/images', component: Images },
  { path: '/image-picker', component: ImagePicker },
  { path: '/list', component: List },
  { path: '/loading', component: Loading },
  { path: '/modals', component: Modals },
  { path: '/navigation', component: Navigation },
  { path: '/page-demo', component: PageDemo },
  { path: '/pagination', component: Pagination },
  { path: '/progress', component: Progress },
  { path: '/offcanvas', component: Offcanvas },
  { path: '/rate', component: Rate },
  // { path: '/scroll-view', component: ScrollView },
  { path: '/slide-view', component: SlideView },
  { path: '/steps', component: Steps },
  { path: '/sticky', component: Sticky },
  { path: '/table', component: Table },
  { path: '/tabs', component: Tabs },
  { path: '/toasts', component: Toasts },
  { path: '/to-top', component: ToTop },
  { path: '/videos', component: Videos },

  { path: '/form/checkbox', component: FormCheckbox },
  { path: '/form/number', component: FormNumber },
  { path: '/form/radio', component: FormRadio },
  { path: '/form/select', component: FormSelect },
  { path: '/form/slider', component: FormSlider },
  { path: '/form/switch', component: FormSwitch },
  { path: '/form/text', component: FormText },
  { path: '/form/textarea', component: FormTextarea },

  { path: '/demo/scroll-list', component: DemoScrollList },

  { name: 'index', path: '/index/:test', component: Index },
]
