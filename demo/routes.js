/**
 * @fileoverview routes
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-27
 */

import Index from './pages/index'

import App from './App'
import AlertTip from './pages/alertTip'
import Block from './pages/block'
import Breadcrumb from './pages/breadcrumb'
import Buttons from './pages/buttons'
import Gallery from './pages/gallery'
import Grid from './pages/grid'
import List from './pages/list'
import TabBar from './pages/tabBar'

export default [
  { path: '/', component: Index },
  { path: '/alertTip', component: AlertTip },
  { path: '/block', component: Block },
  { path: '/breadcrumb', component: Breadcrumb },
  { path: '/buttons', component: Buttons },
  { path: '/gallery', component: Gallery },
  { path: '/grid', component: Grid },
  { path: '/list', component: List },
  { path: '/tab-bar', component: TabBar }
]
