<template>
<div>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="click" @focus="focus" @mouseover="click">你好</Button>
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="normal">正常</Button>
    <Button size="big">大大</Button>
    <Button size="small">小小</Button>
  </div>
</div>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  name: "ButtonDemo",
  components: {Button},
  setup(){
    const click=()=>{
      console.log('click触发了')
    }
    const focus=()=>{
      console.log('focus触发了')
    }
    return {click,focus}
  }
}
</script>

<style scoped>

</style>
