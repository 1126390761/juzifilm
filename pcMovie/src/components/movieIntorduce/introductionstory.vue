<template>
 <div class="story">
     <i></i><span>剧情简介</span>
     <p>{{movieData['m_infor']}}</p>
 </div>
</template>

<script>
export default {
  props:['movieData']
}
</script>
    
<style scoped>
*{
    font-family: Microsoft YaHei,Helvetica,Arial,sans-serif;
}
.story{
    height: 120px;
    width: 735px;
    margin-top: 30px;
    margin-left: 75px;
    
}
span{
    font-size: 18px;
    display:inline-block;
    margin-bottom: 25px;
  
        
}
.story i{
    width: 5px;
    height: 18px;
    display:inline-block;
    background-color: #df2d2d;
    margin-right: 5px;
}
p{
    font-size: 14px;
}
</style>
