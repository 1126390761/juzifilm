<template>
	 <tabbar>
      <tabbar-item link="/">
        <img slot="icon" src="@/assets/xhome.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/LmovieHot">
        <img slot="icon" src="@/assets/xmovie.png">
        <span slot="label">电影</span>
      </tabbar-item>
      <tabbar-item selected link="/list">
        <img slot="icon" src="@/assets/xhot.png">
        <span slot="label">榜单</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/person">
        <img slot="icon" src="@/assets/xperson.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
  }
}
</script>

<style>
</style>