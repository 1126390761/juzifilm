<template>
    <div>
 
    <tabbar>
      <tabbar-item selected link="/">
        <img slot="icon" src="@/assets/xhome.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="@/assets/xmovie.png">
        <span slot="label">电影</span>
      </tabbar-item>
      <tabbar-item selected link="/list">
        <img slot="icon" src="@/assets/xhot.png">
        <span slot="label">榜单</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="@/assets/xperson.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
    import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
<style>

</style>
