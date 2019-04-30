<template>
    <div class="container">
        <Header :imgurl="ruleForm.imgUrl"></Header>
<div class="main">
    <div class="infobox">
        <div>
        <el-row>
         <el-col :span="5">
             <div class="leftdark">
                <h3>个人中心</h3>
                <router-link to="">基本信息</router-link>
             </div>
        </el-col>
          <el-col :span="19">
              <div class="rightbox">
                  <div class="title"><p>基本信息</p></div>
                  <el-row>
                 <el-col :span="10">
                    <div class="grid-content bg-purple">
                     <el-upload
                        class="avatar-uploader"
                        action="http://localhost:81/head"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                     </el-upload>
                     <h3 class="headinfo">更换头像</h3>
                    </div>
                </el-col>


                <el-col :span="14">
                    <div class="grid-content bg-purple-light">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left">
                        <el-form-item label="昵称" prop="name">
                            <el-input v-model="ruleForm.name" size="small"></el-input>
                        </el-form-item>
                        <el-form-item label="性  别" prop="sex">
                            <el-radio-group v-model="ruleForm.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="生活状态" prop="status">
                            <el-radio-group v-model="ruleForm.status">
                            <el-radio label="单身">单身</el-radio>
                            <el-radio label="热恋中">热恋中</el-radio>
                            <el-radio label="已婚">已婚</el-radio>
                            <el-radio label="为人父母">为人父母</el-radio>
                        </el-radio-group>
                        </el-form-item>
                        <el-form-item label="出生日期" required>
                            <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                            </el-col>
                        </el-form-item>
                      
                        <el-form-item label="兴趣" prop="type">
                            <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox :label="item" name="type" v-for="(item,ind) in interest" :key="ind"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                   
                        <el-form-item label="个性签名" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                        </el-form>
                    </div>
                </el-col>

                </el-row>
              </div>
          </el-col>
        </el-row>
        </div>
    </div>
</div>
    
    
    <listfooter></listfooter>
   
    </div>

</template>
<script>
import header from "@/components/header";
import listfooter from "@/components/listfooter";
export default {
  components: {
    Header: header,
    listfooter: listfooter
  },
  data() {
    return {
      imageUrl: "",
      ruleForm: {
          name: '',
          date1: '',
          type: [],
          sex: '',
          desc: '',
          status:'',
          imgUrl:'',
        },
        interest:['美食','动漫','摄影','电影','体育','财经','音乐','游戏','科技','旅游','文学','公益','汽车','时尚','宠物'],
        rules: {
          name: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
          status: [
            { required: true, message: '请选择生活状态', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一项你的兴趣', trigger: 'change' }
          ],
          sex: [
            { required: true, message: '请选择你的性别', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请书写你的个性签名', trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    // 上传头像图片并且保存到服务器
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
          let formdata = new FormData();
        formdata.append('images', file.raw);
        console.log(file.raw)
        let _this=this;
       	_this.axios.post(_this.url+"/uploadHeadimg",formdata, {
           
					}).then(response => {
            console.log("post发送Ajax请求成功", response.data);
            _this.ruleForm.imgUrl = response.data.path;
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 表单
    submitForm(formName) {
        let _this=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm)
            	_this.axios({
						method: "post",
            url: _this.url + "/head",
            data: _this.ruleForm,
             transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret;
              }],
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
					}).then(response => {
            alert('修改成功');
            // window.location.reload();
            console.log(response.data);
						this.GitUsers = response.data;
					}).catch(response => {
						console.log("请求失败");
					})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
};
</script>
<style scoped>
.avatar-uploader {
  border: 1px dashed #409eff;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  top: 50px;
  left: 20px;
  width: 180px;
  height: 180px;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.main {
  width: 100%;
  height: 902px;
}

.infobox {
  width: 1164px;
  height: 900px;
  margin: 20px auto;
  border: 1px solid #e1e1e1;
}
.leftdark {
  padding-top: 30px;
  background: #f4f3f4;
  width: 200px;
  height: 870px;
  text-align: center;
}
.leftdark a {
  margin-top: 50px;
  display: block;
  width: 200px;
  height: 40px;
  /* color: #333; */
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #ed3931;
}

.rightbox .title {
  height: 77px;
  line-height: 77px;
  color: #ec443f;
  border-bottom: 1px solid #ccc;
}
.headinfo {
  position: relative;
  top: 80px;
  left: 80px;
  color: #999;
}
</style>
