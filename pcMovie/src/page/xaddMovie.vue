<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="电影名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="英文名" prop="Ename">
    <el-input v-model="ruleForm.Ename"></el-input>
  </el-form-item>
   <el-form-item label="导演" prop="author">
    <el-input v-model="ruleForm.author"></el-input>
  </el-form-item>
     <el-form-item label="评分" prop="score">
    <el-input v-model="ruleForm.score"></el-input>
  </el-form-item>
  <el-form-item label="区域" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
      <el-option :label="item" :value="item" v-for="item in region" :key="item"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="电影类型" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox :label="item" name="type" v-for="item in items" :key="item"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  
  <el-form-item label="影片情况" prop="situation">
    <el-checkbox-group v-model="ruleForm.situation">
      <el-checkbox :label="item" name="situation" v-for="item in stu" :key="item"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>



  <el-form-item label="添加时间" class="addTime" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>


 <el-form-item class="img" label="电影封面" prop="img">
  <el-upload 
  class="avatar-uploader"

  action="http://localhost:81/addMovie"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

  </el-form-item>
  
  <el-form-item label="电影介绍" class="desc" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>

</el-form>
</template>
<script>
    export default {
    data() {
      return {
        items:["爱情", "喜剧", "动画", "剧情", "恐怖", "惊悚","科幻","动作","悬疑","犯罪","冒险","战争","奇幻","运动","家庭","古装","武侠","西部","历史","传记","歌舞","黑色电影","短片","记录片","其他"],
        region: [ "大陆", "美国", "韩国", "日本", "中国香港","中国台湾","泰国","印度","法国","英国","俄罗斯","意大利","西班牙","德国","波兰","澳大利亚","伊朗","其他"],
        stu:[1,2,3],
        imageUrl:'',
        ruleForm: {
          name: '',
          author:'',
          Ename: '',
          score: '',
          region: '',
          date1: '',
          delivery: false,
          type: [],
          desc: '',
          imgUrl: '',
          situation:[]
        },
        rules: {
          name: [
            { required: true, message: '请输入电影名', trigger: 'blur' },
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          Ename: [
            { required: true, message: '请输入英文名', trigger: 'blur' },
            { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
          ],
           author: [
            { required: true, message: '请输入导演名', trigger: 'blur' },
            { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
          ],
           score: [
            { required: true, message: '请输入评分', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择区域', trigger: 'change' }
          ],
          situation: [
            { type: 'array', required: true, message: '请至少选择一个电影状态', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          
          type: [
            { type: 'array', required: true, message: '请至少选择一个电影类型', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写电影描述', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        let _this=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	_this.axios({
						method: "post",
            url: _this.url + "/addMovie",
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
            alert('添加成功');
            // window.location.reload();
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
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        let formdata = new FormData();
        formdata.append('images', file.raw);
        console.log(file.raw)
        let _this=this;
       	_this.axios.post(_this.url+"/uploadMovimg",formdata, {
           
					}).then(response => {
            console.log("post发送Ajax请求成功", response.data);
            _this.ruleForm.imgUrl = response.data.path;
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
         if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style scoped>
.el-form{
  position: absolute;
  top: 50px;  
}
.el-form-item{
    display: inline-block;
}
.desc{
    display: block;
    width: 500px;
}

.uploads,.addTime{
    display: block;
}
/*上传样式*/
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 200px;
    display: block;
  }
</style>
