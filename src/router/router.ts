import {createWebHistory,createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../views/Switch.vue'
import Button from '../views/Button.vue'
import Dialog from "../views/Dialog.vue"
import Tabs from '../views/Tabs.vue'

const history=createWebHistory()

export const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
                {path:'switch',component:Switch},
                {path:'button',component:Button},
                {path:'dialog',component:Dialog},
                {path:'tabs',component:Tabs}
            ]}
    ]
})
