import {createWebHistory,createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../views/SwitchDemo.vue'
import Button from '../views/ButtonDemo.vue'
import Dialog from "../views/DialogDemo.vue"
import Tabs from '../views/TabsDemo.vue'

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
