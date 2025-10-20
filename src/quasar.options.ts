import type { QuasarPluginOptions } from 'quasar'
import { Notify, Dialog } from 'quasar'

import * as AllQuasarComponents from 'quasar'
import 'quasar/dist/quasar.css'

// 引入FontAwesome v6 CSS
import '@fortawesome/fontawesome-free/css/all.css'

// ✅ Quasar Extras: FontAwesome v6
import '@fortawesome/fontawesome-free/css/all.css'
import fontawesomeV6IconSet from 'quasar/icon-set/fontawesome-v6'

export const quasarOptions: QuasarPluginOptions = {
  components: AllQuasarComponents,
  iconSet: fontawesomeV6IconSet,
  plugins: {
    Notify,
    Dialog
  }
}