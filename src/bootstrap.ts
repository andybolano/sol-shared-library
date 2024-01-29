import { createApp } from "vue"
import App from "./App.vue"
import Antd from "ant-design-vue"
import router from "./router"
import "./assets/css/main.scss"
import "./assets/icons/style.css"
import filters from "./app/ui-lib/helpers/filters"

const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount("#app")

app.config.globalProperties.$filters = filters
