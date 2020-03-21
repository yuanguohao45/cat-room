<template>
  <el-dialog class="ware-dialog" title="商品编号" :visible.sync="dialogFormVisible" @close="handleCancle">
    <div align="right">
      <el-button type="primary" size="mini" :disabled="showDelBtn" @click="handleDelWare">删除商品</el-button>
    </div>
    <el-row>
      <el-col :span="3">
        &nbsp;&nbsp;
      </el-col>
      <el-col :span="18">
        <el-form :model="postForm" size="mini" :label-width="formLabelWidth">
          <el-form-item label="猫名字：">
            <el-input style="width:50%;" v-model="postForm.name" placeholder="请输入名字" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="图片：">
            <el-upload :action="uploadImgPath" list-type="picture-card" :on-remove="handleRemove" :on-success="handleSuccess" :before-upload="beforeUpload" :on-preview="handlePictureCardPreview" :file-list="uploadList" :show-file-list="true" multiple>
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <div v-if="showProcessBtn">
              <el-button size="mini" @click="handleCancle">取 消</el-button>
              <el-button size="mini" type="primary" @click="handleConfirm">确 认</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="3">&nbsp;&nbsp;</el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import request from "@/config";
import { apis } from "@/api";

export default {
  name: "wareDialog",
  props: {
    transferObj: Object,
    accesstoken: String,
    showType: String
  },
  data() {
    return {
      dialogFormVisible: true,
      showDelBtn: false,
      showProcessBtn: false,
      formLabelWidth: "120px",

      uploadImgPath: apis.culturalBrigadeMark.uploadImgPathId + this.openid,
      uploadList: [],
      listObj: {}, //图片列表

      postForm: {
        code: "",
        type: "",
        sex: "",
        pics: [],
        keyWords: "",
        minPrice: "",
        maxPrice: "",
        minPrice1: "",
        maxPrice1: "",
        priceSort: ""
      }
    };
  },
  watch: {
    showType: {
      handler(nV, oV) {
        switch (nV) {
          case "add":
            this.showDelBtn = true;
            this.showProcessBtn = true;
            break;
          case "edit":
            this.showDelBtn = false;
            this.showProcessBtn = true;
            break;
          case "view":
            this.showDelBtn = true;
            this.showProcessBtn = false;
            break;
        }
      },
      immediate: true
    }
  },
  methods: {
    //上传之前
    beforeUpload(file) {
      var path = require("path");
      // 格式化路径
      var imgType = path.extname(file.name).slice(1);

      if (
        imgType != "jpg" &&
        imgType != "png" &&
        imgType != "PNG" &&
        imgType != "bmp" &&
        imgType != "gif" &&
        imgType != "GIF" &&
        imgType != "svg" &&
        imgType != "JPG"
      ) {
        this.$message.error(
          "请上传正确格式的文件 格式包括: jpg,png,PNG,bmp,gif,GIF,svg,JPG!"
        );
        return false;
      }

      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 10MB!");
        return isLt2M;
      }
      const that = this;
      const _URL = window.URL || window.webkitURL;
      const fileName = file.uid;
      this.listObj[fileName] = {};
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = _URL.createObjectURL(file);
        img.onload = function() {
          that.listObj[fileName] = {
            hasSuccess: true,
            uid: file.uid,
            width: this.width,
            height: this.height,
            size: file.size / 1024 / 1024
          };
        };
        resolve(true);
      });
    },
    //上传成功
    handleSuccess(response, file) {
      console.log("上传成功的回调888", response, file);

      const uid = file.uid;
      this.objKeyArr = Object.keys(this.listObj);
      for (let i = 0, len = this.objKeyArr.length; i < len; i++) {
        if (this.listObj[this.objKeyArr[i]].uid === uid) {
          //证明上传成功;
          this.listObj[this.objKeyArr[i]].url = response.data.fileurl;
          // this.listObj[this.objKeyArr[i]].fileid = response.data.fileid;
          this.listObj[this.objKeyArr[i]].name = file.name;
          this.listObj[this.objKeyArr[i]].size = file.size / 1024 / 1024;
          this.listObj[this.objKeyArr[i]].hasSuccess = true;
          // return;
          // 图片同步到素材库
          this.imageArr.push({
            title: file.name,
            description: file.name,
            filmingAuthor: this.userId, //拍摄者
            filmingEditor: this.userId, //精修者
            imgHttpUrl: response.data.fileurl //图片地址
          });
        }
      }
      console.log(this.uploadList, "resfsdfsdfsd1");
      console.log("图片的地址最后", this.imageArr);
    },
    //图片移除
    handleRemove(file) {
      const uid = file.uid;
      this.objKeyArr = Object.keys(this.listObj);
      for (let i = 0, len = this.objKeyArr.length; i < len; i++) {
        if (this.listObj[this.objKeyArr[i]].uid === uid) {
          delete this.listObj[this.objKeyArr[i]];
          return;
        }
      }
    },
    // 预览
    handlePictureCardPreview(file) {
      this.viewDialog = file.url;
      this.dialogView = true;
    },
    // 删除
    handleDelWare() {
      request
        .delete(url, this.transferObj.id)
        .then(res => {
          if (res.data.code == 200) {
            this.$message.success("删除成功");
            return;
          }
          return this.$message.error(res.data.message);
        })
        .catch(err => {});
    },
    // 取消
    handleCancle() {
      this.$emit("backTable", "cancle", false);
    },
    // 确认
    handleConfirm() {
      request
        .post(url, this.transferObj)
        .then(res => {
          if (res.data.code == 200) {
            this.showType === "add" && this.$message.success("新增成功");
            this.showType === "edit" && this.$message.success("更新成功");
            this.$emit("backTable", "confirm", false);
            return;
          }
          return this.$message.error(res.data.message);
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.ware-dialog {
  /deep/ .el-dialog {
    width: 60% !important;
  }
  /deep/ .el-upload--picture-card {
    width: 80px;
    height: 80px;
    line-height: 88px;
    i {
      font-weight: 800;
      padding: 10px;
      border: 5px solid #a9b7b7;
      border-radius: 50%;
    }
    .el-upload-list__item {
      width: 80px;
      height: 80px;
      // line-height: 88px;
    }
  }
  /deep/ .el-upload-list--picture-card .el-upload-list__item {
    width: 80px;
    height: 80px;
  }
}
</style>