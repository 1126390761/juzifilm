<template>
  <div>
   <Header></Header>
   <Listhead></Listhead>
   <Listrule></Listrule>
   <Listcontent :listData="descdata"></Listcontent>
   <Listfooter></Listfooter>
  </div>
</template>

<script>
import header from "@/components/header";
import listhead from "@/components/list/listhead";
import listrule from "@/components/list/listrule";
import listcontent from "@/components/list/listcontent";
import listcontenttwo from "@/components/list/listcontenttwo";
import listfooter from "@/components/listfooter";


export default {
 
  
  components: {
    'Header': header,
    'Listhead':listhead,
    'Listrule':listrule,
    'Listcontent':listcontent,
    'Listcontenttwo':listcontenttwo,
    'Listfooter':listfooter
  },
  data(){
    return {
      descdata:{}
    }
    
  },
  
  beforeCreate() {
     // 获取排行榜信息
     let _this=this;
      _this.axios({
			method: "post",
            url: _this.url + "/show3",
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
					}).then(response => {
                        console.log("请求成功")
                        _this.descdata=response.data.r;
                        console.log(_this.descdata)
					}).catch(response => {
						console.log("请求失败");
            });
            
  },

}

</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
