<template>
  <div style="z-index:2001;" :class="fullscreenflag?'fullscreenShow':''">
    <div :id="id" ref="content"></div>
  </div>
</template>
<script>
import request from "@/config";
import { apis } from "@/api";
import moment from "moment";
import { cmx, library } from "@/utils/cosmix";

require("Static/neditor/neditor.config.js");
require("Static/neditor/neditor.all.js");
require("Static/neditor/neditor.service.js");
require("Static/neditor/i18n/zh-cn/zh-cn.js");

export default {
  name: "Editor",
  components: {},
  props: {
    id: {
      type: String,
      required: true
    },
    editor_content: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: "100%",
      required: false
    },
    height: {
      type: [String, Number],
      default: "350",
      required: false
    },
    // 纸媒时
    terminalType: {
      type: Number
    },
    contentId: {
      type: String
    },
    prohibitDisabled: {
      type: Boolean,
      default: false
    },
    showOnlyImgBtn: {
      type: Boolean,
      default: true,
      required: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    writingType: {
      type: String
    },
    selTopShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      accesstoken: "",
      openid: "",
      cmx,
      library,
      BUS,
      editor: "", // ueditor实例
      fullscreenflag: false, //全屏
      haveLoaded: false, //是否加载完
      isUploadimg: false, //上传图片的组件
      isInsertCommdoity: false, //插入作品的组件
      isAddResources: false, //文旅资源的组件
      isAddMaterial: false, //上传素材库
      picWidth: 290,
      // 全半角转换 ------ start
      confirmContent: "",
      btnDisabled: true, // 撤销按钮是否禁用
      // 新加的内容 结束
      dialogVisibleTobdc: false,
      // 内容校对
      dialogVisibleToCorrect: false,
      message: false,
      messageWord: false,
      messageQuota: false,
      messagePolitical: false,
      messageSens: false,
      dataSymbol: [],
      dataWord: [],
      dataQuota: [],
      dataPolitical: [],
      dataSens: [],
      getContentTxt: "",
      dataContent: "", // 传给后端
      correctContentLoading: false,
      correctContent1: true,
      correctContent2: true,
      correctContent3: true,
      correctContent4: true,
      correctContent5: true,
      radioValue: "",
      // 全半角转换 ------ end
      bol: false,
      publicData: [],
      publicDialog: false,
      WhiteLinks: {
        $formname: $formname,
        $sheetsign: $sheetsign,
        loading: false,
        list: [],
        total: 0,
        searchComponent: {
          searchdata: JSON.parse(JSON.stringify(WhiteLinksSearchDataStructure)),
          searchExpanded: false,
          searchfuzzyfields: [] //字段需要模糊搜索，则将sign写在此处
        }
      },
      ipList: [],
      selectArr: [], //音频
      videoArr: [], //视频
      newInfo: "",
      isAdd: true,

      dialogOutLink: false,
      contentOutLink: "",
      setErrorContent: false,
      errorContentSym: "",
      errorContentWord: "",
      errorContentQuo: "",
      errorContentPol: "",
      errorContentSens: "",
      showNext: false,
      searchInfo: {
        count: 0,
        pageSize: 10,
        currentPage: 1
      },
      recommendLoading: false,
      publicName: ""
    };
  },
  created() {},
  inject: {
    addTextToEditor: {
      type: Function,
      default() {
        return function() {
          return new Promise((resolve, reject) => {
            resolve("");
          });
        };
      }
    }
  },
  mounted() {
    this.newInfo = this.editor_content;
    // 初始化编辑器
    this.initEditor();
  },
  watch: {
    editor_content(newVal, oldVal) {
      this.newInfo = this.editor_content;
      if (this.isAdd) {
        if (
          !!this.addTextToEditor &&
          typeof this.addTextToEditor().then === "function"
        ) {
          this.addTextToEditor().then(res => {
            if (
              this.isAdd &&
              res != "<p></p>" &&
              res != "" &&
              this.newInfo.indexOf(res) == -1
            ) {
              this.newInfo = this.editor_content + "<br/>" + res;
              this.isAdd = false;
            } else {
              this.newInfo = this.editor_content;
              this.isAdd = false;
            }
          });
        }
      }
    },
    newInfo(newVal, oldVal) {
      if (!this.haveLoaded) {
        this.initEditor();
        this.haveLoaded = true;
      } else {
        this.$nextTick(() => {
          try {
            this.editor.setContent(newVal);
          } catch (error) {}
        });
        // this.editor.setContent(newVal);
      }
    }
    // fullscreenflag(nV,oV) {
    //   if(nV && this.shadow) {
    //     this.$emit('showModal',nV)
    //   }
    // }
  },
  provide() {
    return {
      getSelectArr: () => this.selectArr,
      getVideoArr: () => this.videoArr
    };
  },
  methods: {
    // 初始化编辑器
    initEditor() {
      let that = this;
      this.editor = UE.getEditor(that.id, {
        initialFrameWidth: that.width,
        initialFrameHeight: that.height,
        scaleEnabled: false, // 是否可以拉伸长高,默认true(当开启时，自动长高失效)
        UEDITOR_HOME_URL: "/static/neditor/",
        autoHeightEnabled: true, // 是否自动长高,默认true自动长高
        catchRemoteImageEnable: false, // 设置是否抓取远程图片
        autoFloatEnabled: false, // 是否保持toolbar位置不动，默认为true
        imagePopup: false, // 图片操作的浮层开关，默认打开为true 现在关闭了
        rgb2Hex: false,
        imageScaleEnabled: true // 图片拉伸
      });
      // 标记编辑器初始化完成
      this.haveLoaded = true;
      // 编辑器准备就绪后会触发该事件
      // console.log("editor_content",that.editor_content)
      this.editor.addListener("ready", () => {
        // 设置可以编辑
        this.editor.setEnabled();
        this.editor.setContent(this.newInfo);
      });
      this.editor.addListener("fullscreenchanged", (event, isFullScreen) => {
        if (isFullScreen) {
          this.fullscreenflag = true;
          // $('.edui-notadd .edui-editor').css({
          //   'z-index': 2000
          // })
          // 全面屏下 广告传来的 shadow--
          if (this.shadow) {
            this.$emit("noticeCloseShadow", "none");
          }
        } else {
          this.fullscreenflag = false;
          if (this.shadow) {
            this.$emit("noticeCloseShadow", "block");
          }
        }
      });
      this.editor.addListener("contentChange", e => {
        this.getAudioNumber();
        this.getVideoNumber();
      });
    },
    // 暂存
    saveData() {
      this.$emit("shortSave");
    },
    // 清空编辑器内容 带标签
    setEditorContent() {
      return this.editor.setContent("");
    },
    // 获取编辑器内容 带标签
    getEditorContent() {
      return this.editor.getContent();
    },
    // 获取编辑器内部字数
    getTextCount() {
      return this.editor.getContentTxt().length;
    },
    // 获取编辑器内容 不带标签
    getEditorTxt() {
      return this.editor.getContentTxt();
    },
    setEditorontent(content) {
      this.editor.setContent(content);
    },
    insertHtml(content) {
      this.editor.execCommand("insertHtml", content);
    },
    // 格式化文本
    formatFun() {
      // 获取所有文本内容
      this.editor.execCommand("selectall");
      // 移除文本格式
      this.editor.execCommand("removeformat");
      let strformat = "";
      strformat = this.editor.getContent();
      strformat = strformat.replace(/<p><br\/><\/p>/g, "");
      this.editor.setContent(strformat);
      strformat = this.editor.getContent();
      strformat = this.tranCdstr(strformat);
      strformat = this.transforContent(strformat);
      strformat = strformat.replace(
        /<p([^>])*>(?=([^<]*)<img([^>])*>)/gi,
        "<p>"
      );
      strformat = strformat.replace(
        /<p style="text-indent:2em;" data="audio"/g,
        '<p><audio data="audio" style="width: 100%"'
      );
      strformat = strformat.replace(
        /id="audio">&#39;<\/p><p style="text-indent:2em;"><br\/><\/p><\/p>/g,
        'id="audio">&#39;</audio></p>'
      );
      strformat = strformat.replace(
        /<p style="text-indent:2em;" data="video"/g,
        '<p><video data="video" style="width: 100%;"'
      );
      strformat = strformat.replace(
        /id="video">&#39;<\/p><p style="text-indent:2em;"><br\/><\/p><\/p>/g,
        'id="video">&#39;</video></p>'
      );
      strformat = strformat.replace(
        /<p style="text-indent:2em;"><br\/><\/p><p style="text-indent:2em;"><p><video/g,
        '<p style="text-indent:2em;"><br/></p><p><video'
      );
      strformat = strformat.replace(
        /<p style="text-indent:2em;"><br\/><\/p><p style="text-indent:2em;"><p><audio/g,
        '<p style="text-indent:2em;"><br/></p><p><audio'
      );
      this.editor.setContent(strformat);
    },
    transforContent(str) {
      str = str
        .replace(
          /【LEFT】 style="text-indent: 2em;"【TAGEND】&nbsp;【END】/g,
          ""
        )
        .replace(/【LEFT】【TAGEND】&nbsp;【END】/g, "")
        .replace(/【LEFT】/g, '<p style="text-indent:2em;"')
        .replace(/【TAGEND】/g, ">")
        .replace(/【END】/g, '</p><p style="text-indent:2em;"><br/></p>');

      return str;
    },
    tranCdstr(str) {
      str = str.replace(/<style(([\s\S])*?)<\/style>/g, "");
      const reg = /<(a\w+|[^a]\w*)(.*?)>(.*?)<\/\1>/g;
      while (reg.test(str)) {
        str = str.replace(reg, "【LEFT】$2【TAGEND】$3【END】");
      }
      return str;
    },
    //格式化结束

    // 插入作品
    insertWork() {
      this.isInsertCommdoity = true;
      console.log(this.isInsertCommdoity, "isInsertCommdoity");
    },
    // 文旅资源
    culSouce() {
      this.isAddResources = true;
      console.log(this.isAddResources, "isInsertCommdoity");
    },
    // 上传图片
    uploadImg() {
      this.isUploadimg = true;
    },
    // 图片上传回调
    successfulCallback(type, data) {
      this.isUploadimg = false; //上传图片
      this.isAddMaterial = false; //上传素材
      this.isInsertCommdoity = false; //插入作品
      this.isAddResources = false;
      if (this.shadow && this.fullscreenflag) {
        this.$emit("noticeCloseShadow", "hideImgModel");
      }
      if (type == "success") {
        if (data instanceof Array) {
          data.forEach(v => {
            let index = v.name.lastIndexOf(".");
            let name = v.name.substring(0, index);
            this.editor.execCommand(
              "insertHtml",
              `<p><img class="wscnph" size="${v.size}" src="${v.url}" imgid="${
                v.fileid
              }"><p style="word-break:break-all;text-indent:2em;${
                name ? "" : "display:none;"
              }">${name ? name : ""}</p><br></p >`
            );
          });
        } else if (data.flag === "audio") {
          data.arr.forEach(v => {
            let index = v.name.lastIndexOf(".");
            let name = v.name.substring(0, index);
            this.editor.execCommand(
              "insertHtml",
              `<p><p style="margin:0;padding:0;"><audio data="audio" style="width: 100%;" controls="controls" src="${
                v.url
              }" audioid="${v.fileid}" id="audio">'
               <p style="word-break:break-all;text-indent:2em;${
                 name ? "" : "display:none;"
               }">${name ? name : ""}</p>
              </p >`
            );
          });
          this.$nextTick(() => {
            this.getAudioNumber();
          });
        } else if (data.flag === "video") {
          data.arr.forEach(v => {
            let index = v.name.lastIndexOf(".");
            let name = v.name.substring(0, index);
            this.editor.execCommand(
              "insertHtml",
              `<p><p style="margin:0;padding:0;"><video data="video" style="width: 100%; object-fit: fill;" controls="controls" src="${
                v.url
              }" poster="${
                !library.isEmpty(v.coverImg)
                  ? v.coverImg
                  : "https://www.ccmapp.cn/static/images/default_video_image.jpg"
              }" videoid="${
                v.fileid
              }" id="video">'<p style="word-break:break-all;text-indent:2em;${
                name ? "" : "display:none;"
              }">${name ? name : ""}</p></p >`
            );
          });
          this.$nextTick(() => {
            this.getVideoNumber();
          });
        } else if (data.flag === "image") {
          data.arr.forEach(v => {
            let index = v.name.lastIndexOf(".");
            let name = v.name.substring(0, index);
            let indexs = v.description.lastIndexOf(".");
            let description = v.description.substring(0, indexs);
            console.log("image:", v);
            this.editor.execCommand(
              "insertHtml",
              `<p><img class="wscnph" size="${
                v.size
              }" style="width: 100%;" src="${v.url}" imgid="${
                v.fileid
              }"><p style="word-break:break-all;text-indent:2em;${
                name ? "" : "display:none;"
              }">${
                name ? name : ""
              }</p><p style="word-break:break-all;text-indent:2em;${
                description ? "" : "display:none;"
              }">${description ? description : ""}</p></p >`
            );
          });
        } else if (data.flag === "atlas") {
          data.arr.forEach(v => {
            let index = v.name.lastIndexOf(".");
            let name = v.name.substring(0, index);
            let indexs = v.description.lastIndexOf(".");
            let description = v.description.substring(0, indexs);
            console.log("atlas:", v);
            this.editor.execCommand(
              "insertHtml",
              `<p><img class="wscnph" size="${
                v.size
              }" style="width: 100%;" src="${v.url}" imgid="${
                v.fileid
              }"><p style="word-break:break-all;text-indent:2em;${
                name ? "" : "display:none;"
              }">${
                name ? name : ""
              }</p><p style="word-break:break-all;text-indent:2em;${
                description ? "" : "display:none;"
              }">${description ? description : ""}</p></p >`
            );
          });
        } else if (data.flag === "checked") {
          data.arr.forEach(v => {
            console.log("checked:", v);
            this.editor.execCommand(
              "insertHtml",
              `<p><img class="wscnph" size="${
                v.size
              }" style="width: 100%;" src="${v.imgUrl}" imgid="${
                v.imgId
              }"><p style="word-break:break-all;text-indent:2em;${
                v.description ? "" : "display:none;"
              }">${v.description ? v.description : ""}</p></p >`
            );
          });
        } else if (data.flag === "artchecked") {
          data.arr.forEach(v => {
            this.editor.execCommand(
              "insertHtml",
              `<p style="display: flex;border: 1px solid #dcdfe6;border-radius: 4px; padding: 5px;"><i><img style="width:100px!important; height:auto;" special="tuijian" size="${
                v.size
              }" src="${
                v.image.length > 0 ? v.image[0].url : this.staticImg
              }" imgid="${
                v.uid
              }" \/><\/i><i style="font-style:normal;margin-left:8px;"><i style="font-weight:700;font-style:normal;">${v.name ||
                ""}<\/i><br>${v.arttitle || ""}<br>${v.artdesc ||
                ""}<\/i><\/p ><p><br/></p>`
            );
          });
        } else if (data.flag === "workschecked") {
          data.arr.forEach(v => {
            this.editor.execCommand(
              "insertHtml",
              `<p style="display: flex;border: 1px solid #dcdfe6;border-radius: 4px; padding: 5px;"><i><img style="width:100px!important;" special="tuijian" size="${
                v.size
              }" src="${
                v.image.length > 0 ? v.image[0].url : this.staticImg
              }" imgid="${
                v.uid
              }" \/><\/i><i style="font-style:normal;margin-left:8px;"><i style="font-weight:700;font-style:normal;">${v.authorization ||
                ""}<\/i><br>${v.worksdate || ""}<br>${v.worksdesc ||
                ""}<\/i><\/p ><p><br/></p>`
            );
          });
        } else if (data.flag === "exhibitionchecked") {
          data.arr.forEach(v => {
            this.editor.execCommand(
              "insertHtml",
              `<p style="display: flex;border: 1px solid #dcdfe6;border-radius: 4px; padding: 5px;"><i><img style="width:100px!important;" special="tuijian" size="${
                v.size
              }" src="${
                v.mainimage.length > 0 ? v.mainimage[0].url : this.staticImg
              }" imgid="${
                v.uid
              }" \/><\/i><i style="font-style:normal;margin-left:8px;"><i style="font-weight:700;font-style:normal;">${v.exhibitname ||
                ""}<\/i><br>${v.address || ""}<br>${v.date ||
                ""}<\/i><\/p ><p><br/></p>`
            );
          });
        } else if (data.flag === "museumchecked") {
          data.arr.forEach(v => {
            this.editor.execCommand(
              "insertHtml",
              `<p style="display: flex;border: 1px solid #dcdfe6;border-radius: 4px; padding: 5px;"><i><img style="width:100px!important;" special="tuijian" size="${
                v.size
              }" src="${
                v.image.length > 0 ? v.image[0].url : this.staticImg
              }" imgid="${
                v.uid
              }" \/><\/i><i style="font-style:normal;margin-left:8px;"><i style="font-weight:700;font-style:normal;">${v.name ||
                ""}<\/i><br>${v.area || ""}<br>${v.opentime ||
                ""}<\/i><\/p ><p><br/></p>`
            );
          });
        } else if (data.flag === "heritagechecked") {
          data.arr.forEach(v => {
            this.editor.execCommand(
              "insertHtml",
              `<p style="display: flex;border: 1px solid #dcdfe6;border-radius: 4px; padding: 5px;"><i><img style="width:100px!important;" special="tuijian" size="${
                v.size
              }" src="${
                v.files.length > 0 ? v.files[0].url : this.staticImg
              }" imgid="${
                v.uid
              }" \/><\/i><i style="font-style:normal;margin-left:8px;"><i style="font-weight:700;font-style:normal;">${v.name ||
                ""}<\/i><br>${
                v.type[0] == "1"
                  ? "民间文学"
                  : v.type[0] == "2"
                  ? "传统音乐"
                  : v.type[0] == "3"
                  ? "传统舞蹈"
                  : v.type[0] == "4"
                  ? "传统戏剧"
                  : v.type[0] == "5"
                  ? "曲艺"
                  : v.type[0] == "6"
                  ? "体育游艺"
                  : v.type[0] == "7"
                  ? "传统美术"
                  : v.type[0] == "8"
                  ? "传统技艺"
                  : v.type[0] == "9"
                  ? "传统医药"
                  : "民俗"
              } | ${
                v.level[0] == "1"
                  ? "国家级"
                  : v.level[0] == "2"
                  ? "省级"
                  : v.level[0] == "3"
                  ? "市级"
                  : "县级"
              }<br>${v.area || ""}<\/i><\/p ><p><br/></p>`
            );
          });
        } else if (data.flag === "culturalchecked") {
          data.arr.forEach(v => {
            this.editor.execCommand(
              "insertHtml",
              `<p style="display: flex;border: 1px solid #dcdfe6;border-radius: 4px; padding: 5px;"><i><img style="width:100px!important;" special="tuijian" size="${
                v.size
              }" src="${
                v.image.length > 0 ? v.image[0].url : this.staticImg
              }" imgid="${
                v.uid
              }" \/><\/i><i style="font-style:normal;margin-left:8px;"><i style="font-weight:700;font-style:normal;">${v.name ||
                ""}<\/i><br>${v.area || ""}  ${v.opentime ||
                ""}<br>${v.culturecenterdesc || ""}<\/i><\/p ><p><br/></p>`
            );
          });
        } else if (data.flag === "protectchecked") {
          data.arr.forEach(v => {
            this.editor.execCommand(
              "insertHtml",
              `<p style="display: flex;border: 1px solid #dcdfe6;border-radius: 4px; padding: 5px;"><i><img style="width:100px!important;" special="tuijian" size="${
                v.size
              }" src="${
                v.image.length > 0 ? v.image[0].url : this.staticImg
              }" imgid="${
                v.uid
              }" \/><\/i><i style="font-style:normal;margin-left:8px;"><i style="font-weight:700;font-style:normal;">${v.name ||
                ""}<\/i><br>${v.area || ""}  ${v.times || ""}<br>${v.dept ||
                ""}<br>${v.level || ""}<\/i><\/p ><p><br/></p>`
            );
          });
        } else if (data.flag === "linechecked") {
          data.arr.forEach(v => {
            console.log("checked: ", v);
            this.editor.execCommand(
              "insertHtml",
              `<p style="display: flex;border: 1px solid #dcdfe6;border-radius: 4px; padding: 5px;"><i><img style="width:100px!important;" special="tuijian" size="${
                v.size
              }" src="${
                v.image.length > 0 ? v.image[0].url : this.staticImg
              }" imgid="${
                v.uid
              }" \/><\/i><i style="font-style:normal;margin-left:8px;"><i style="font-weight:700;font-style:normal;">${v.theme ||
                ""}<\/i><br>${v.from || ""} ${v.destination ||
                ""}<br>包含区域：${v.includearea || ""}<\/i><\/p ><p><br/></p>`
            );
          });
        } else if (data.flag === "spotchecked") {
          data.arr.forEach(v => {
            this.editor.execCommand(
              "insertHtml",
              `<p style="display: flex;border: 1px solid #dcdfe6;border-radius: 4px; padding: 5px;"><i><img style="width:100px!important;" special="tuijian" size="${
                v.size
              }" src="${
                v.image.length > 0 ? v.image[0].url : this.staticImg
              }" imgid="${
                v.uid
              }" \/><\/i><i style="font-style:normal;margin-left:8px;"><i style="font-weight:700;font-style:normal;">${v.name ||
                ""}<\/i><br>${v.level || ""}<br>${v.area ||
                ""}<br>${v.address || ""}<\/i><\/p ><p><br/></p>`
            );
          });
        } else if (data.flag === "pricechecked") {
          data.arr.forEach(v => {
            this.editor.execCommand(
              "insertHtml",
              `<p style="display: flex;border: 1px solid #dcdfe6;border-radius: 4px; padding: 5px;"><i><img style="width:100px!important;" special="tuijian" size="${
                v.size
              }" src="${
                v.image.length > 0 ? v.image[0].url : this.staticImg
              }" imgid="${
                v.uid
              }" \/><\/i><i style="font-style:normal;margin-left:8px;"><i style="font-weight:700;font-style:normal;">${v.name ||
                ""}<\/i><br>${
                v.level[0] == "1"
                  ? "全球奖项"
                  : v.level[0] == "2"
                  ? "国家级"
                  : v.level[0] == "3"
                  ? "省级"
                  : v.level[0] == "4"
                  ? "行业"
                  : "专业"
              }<br>${v.area || ""}<br>${v.awardcretor ||
                ""}<\/i><\/p ><p><br/></p>`
            );
          });
        }
      }
    },
    getAudioNumber() {
      let htmlContent = this.getEditorContent();
      let reg = /audioid=(\S*)/g;
      let newId,
        newArr = [];
      while ((newId = reg.exec(htmlContent)) != null) {
        newArr.push(newId[1].replace(/\"/g, ""));
      }
      this.selectArr = newArr;
    },
    getVideoNumber() {
      let htmlContent = this.getEditorContent();
      let reg = /videoid=(\S*)/g;
      let newId,
        newArr = [];
      while ((newId = reg.exec(htmlContent)) != null) {
        newArr.push(newId[1].replace(/\"/g, ""));
      }
      this.videoArr = newArr;
    },
    // 调整图片大小
    changeSize() {
      BUS.changeSize = !BUS.changeSize;
    },
    // 调整图片大小为290px时
    changeSizeSubmit() {
      if (Number(this.picWidth)) {
        if (parseFloat(this.picWidth) > 290) {
          this.$message({
            type: "warning",
            message: "宽度不能大于 290 ！"
          });
        } else {
          let that = this;
          let selectDom = this.editor.selection.getStart();
          console.log("000", selectDom.parentNode);
          if (BUS.changeSize) {
            if (selectDom.tagName.toLowerCase() == "img") {
              let getNowdom = selectDom;
              console.log(111, getNowdom.src);
              this.editor.execCommand(
                "insertHtml",
                `<p><img class="wscnph" special='tiaozheng' style="width:${that.picWidth +
                  "px"}" src="${getNowdom.src}" ></p >`
              );
            }
          }
        }
      } else {
        this.$message({
          type: "error",
          message: "请输入数字 ！"
        });
      }
    }
  },
  //页面销毁时编辑器销毁
  destroyed() {
    if (this.editor) {
      this.editor.destroy();
    }
  }
};
</script>

<style scoped>
.tooltip {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.wscnph {
  width: 100%;
}
img {
  display: inline-block !important;
  max-width: 100%;
}
.lw-qrcode {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -20px;
}
.view {
  word-break: break-all;
}

.vote_area {
  display: block;
}

.vote_iframe {
  background-color: transparent;
  border: 0 none;
  height: 100%;
}

.height-30 {
  height: 28px;
  line-height: 28px;
}

/* 编辑器解决全屏问题 按钮显示在下面 */
.fullscreenShow .editor-helper {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 2002;
  background: #fff;
  border: 1px solid #dcdfe6;
  padding: 5px 0;
}

.fullscreenShow .editor-helper-adv {
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 2002;
  background: #fff;
  padding: 5px 0;
}
</style>