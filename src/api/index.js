let baseURL = process.env.baseURL + ":" + process.env.serverPort;

var testBaseUrl = baseURL + "/preview"; //测试用--基站
// var testBaseUrl = baseURL+ "/production"; //生产用--基站

// 模块基站
var api_ware_url = testBaseUrl + "/ware"; // 商品
var api_order_url = testBaseUrl + "/order"; // 订单
var api_catRoom_url = testBaseUrl + "/catRoom"; // 猫舍
var api_userAndWalletMgt_url = testBaseUrl + "/userAndWalletMgt"; // 用户&钱包
var api_integralSet_url = testBaseUrl + "/integralSet"; // 积分
var api_noticeMgt_url = testBaseUrl + "/noticeMgt"; // 通知

var oldBaseUrl = "http://210.73.217.92:8041"; //测试用


let apis = {
  baseURL,

  api_ware_url,
  api_order_url,
  api_catRoom_url,
  api_userAndWalletMgt_url,
  api_integralSet_url,
  api_noticeMgt_url,

  /**
   *  分块导出
   */

  wareApi: {
    getTableData: api_ware_url + '/get',
  },
  orderApi: {
    getTableData: api_order_url + '/get',
  },
  catRoomeApi: {
    getTableData: api_catRoom_url + '/get',
  },
  userAndWalletMgtApi: {
    getTableData: api_userAndWalletMgt_url + '/get',
  },
  integralSetApi: {
    getTableData: api_integralSet_url + '/get',
  },
  noticeMgtApi: {
    getTableData: api_noticeMgt_url + '/get',
  },

  /**
   * 上传图片
   */

  culturalBrigadeMark: {
    uploadImgPathId: oldBaseUrl + "/zcm/zcm/file/draftNormalFile?userid=", //上传图片有id的
  }
}

export { apis }