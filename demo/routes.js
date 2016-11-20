/**
 * @fileoverview routes
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-27
 */

import Index from './pages/index'
import AlertTip from './pages/alertTip'
import Block from './pages/block'
import Breadcrumb from './pages/breadcrumb'
import Buttons from './pages/buttons'
import FormView from './pages/form'
import FormList from './pages/formList'
import Gallery from './pages/gallery'
import Grid from './pages/grid'
import Images from './pages/images'
import ImagePicker from './pages/imagePicker'
import List from './pages/list'
import Loading from './pages/loading'
import Modals from './pages/modals'
import Navigation from './pages/navigation'
import NumberInput from './pages/number'
import Offcanvas from './pages/offcanvas'
import PageDemo from './pages/pageDemo'
import Pagination from './pages/pagination'
import TabBar from './pages/tabBar'
import Slider from './pages/slider'
import SlideView from './pages/slideView'

export default [
  { path: '/', component: Index },
  { path: '/alert-tip', component: AlertTip },
  { path: '/block', component: Block },
  { path: '/breadcrumb', component: Breadcrumb },
  { path: '/buttons', component: Buttons },
  { path: '/form', component: FormView },
  { path: '/form-list', component: FormList },
  { path: '/gallery', component: Gallery },
  { path: '/grid', component: Grid },
  { path: '/images', component: Images },
  { path: '/image-picker', component: ImagePicker },
  { path: '/list', component: List },
  { path: '/loading', component: Loading },
  { path: '/modals', component: Modals },
  { path: '/navigation', component: Navigation },
  { path: '/number', component: NumberInput },
  { path: '/page-demo', component: PageDemo },
  { path: '/pagination', component: Pagination },
  { path: '/offcanvas', component: Offcanvas },
  { path: '/tab-bar', component: TabBar },
  { path: '/slider', component: Slider },
  { path: '/slide-view', component: SlideView }
]
