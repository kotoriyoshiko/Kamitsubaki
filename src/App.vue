<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from "vue";
import {router} from "./router/router";
export default {
  name:'App',
  setup(){
    const width=document.documentElement.clientWidth
    const asideVisible=ref(width<=500?false:true)
    provide('asideVisible',asideVisible)
    router.afterEach(()=>{
      console.log('触发了')
      if (width<=500){
        asideVisible.value=false
      }
    })
  }
}
</script>

<style>
</style>
