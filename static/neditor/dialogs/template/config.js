/**
 * Created with JetBrains PhpStorm.
 * User: xuheng
 * Date: 12-8-8
 * Time: 下午2:00
 * To change this template use File | Settings | File Templates.
 */
var templates = [
  {
    pre: "pre0.png",
    title: lang.blank,
    preHtml: '<p class="ue_t">&nbsp;欢迎使用UEditor！</p>',
    html: '<p class="ue_t">欢迎使用UEditor！</p>'
  },
  {
    pre: "pre0.png",
    title: "艺术家",
    preHtml: `<p style="margin-top: 0px; margin-bottom: 0px; padding: 3px; white-space: normal; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">姓名：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">简小历</span>
</p>
<p style="margin-top: 0px; margin-bottom: 0px; padding: 3px; white-space: normal; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">手机：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">137****2345</span>
</p>
<p style="margin-top: 0px; margin-bottom: 0px; padding: 3px; white-space: normal; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">邮箱：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">mxy@jianliben.com</span>
</p>
<p>
    <br/>
</p>`,
    html: `<table width="790">
    <tbody style="border-spacing: 0px; border: 0px; position: relative;">
        <tr style="border-spacing: 0px; border: 0px; position: relative;" class="firstRow">
            <td class="field-title-td" style="margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px 0px 3px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(94, 142, 224); border-left-color: initial; position: relative;" width="790">
                <p>
                    <strong>基本信息</strong>
                </p>
            </td>
        </tr>
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-value-td" style="margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px; border-style: initial; border-color: initial; position: relative;">
                <span class="field-value-span" style="position: relative; display: block; float: left; width: 790px; margin-left: 0px;"><p>
                    <img width="130" height="156" id="avater-img" alt="简历头像" src="http://static.jianliben.com/images/avater_1.jpg"/>
                </p>
                <p style="padding: 3px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
                    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">姓名：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">简小历</span>
                </p>
                <p style="padding: 3px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
                    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">手机：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">137****2345</span>
                </p>
                <p style="padding: 3px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
                    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">邮箱：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">mxy@jianliben.com</span>
                </p>
                <p style="padding: 3px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
                    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">性别：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">男</span>
                </p>
                <p style="padding: 3px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
                    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">生日：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">1995.12</span>
                </p>
                <p style="padding: 3px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
                    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">求职意向：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">产品经理</span>
                </p>
                <p style="padding: 3px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
                    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">工作经验：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">无经验</span>
                </p>
                <p style="padding: 3px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
                    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">学历水平：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">本科</span>
                </p>
                <p style="padding: 3px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
                    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">户口地址：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">湖南长沙</span>
                </p>
                <p style="padding: 3px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 30px; overflow: visible; position: relative;">
                    <span class="baseinfo-label" style="border: 1px solid transparent; width: auto; min-width: 48px; height: 20px; line-height: 20px; text-align: right; margin: 1px 2px 1px 0px; padding: 2px 4px; outline: 0px; float: left;">现居住地：</span><span class="baseinfo-value editable" style="line-height: 20px; margin: 1px 0px; border: 1px inset transparent; transition: all 0.2s ease-in-out 0s; min-width: 150px; height: 20px; padding: 2px 4px; outline: 0px; float: left;">长沙市</span>
                </p></span>
            </td>
        </tr>
    </tbody>
    <tbody style="border-spacing: 0px; border: 0px; position: relative;">
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-title-td" style="margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px 0px 3px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(94, 142, 224); border-left-color: initial; position: relative;" width="790">
                <p>
                    <strong>教育背景</strong>
                </p>
            </td>
        </tr>
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-value-td" style="margin: 0px; padding-right: 0px; padding-left: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px; border-style: initial; border-color: initial; position: relative;">
                <span class="field-value-span" style="position: relative; display: block; float: left; width: 790px; margin-left: 0px;"><p>
                    2014.9 - 2017.6
                </p>
                <p>
                    美国斯坦福大学
                </p>
                <p>
                    硕士 - 公共管理专业
                </p></span><span class="field-value-span" style="position: relative; display: block; float: left; width: 790px; margin-left: 0px;"><p>
                    2014.9 - 2017.6
                </p>
                <p>
                    美国斯坦福大学
                </p>
                <p>
                    本科 - 公共管理专业
                </p></span>
            </td>
        </tr>
    </tbody>
    <tbody style="border-spacing: 0px; border: 0px; position: relative;">
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-title-td" style="margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px 0px 3px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(94, 142, 224); border-left-color: initial; position: relative;" width="790">
                <p>
                    <strong>工作经历</strong>
                </p>
            </td>
        </tr>
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-value-td" style="margin: 0px; padding-right: 0px; padding-left: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px; border-style: initial; border-color: initial; position: relative;">
                <span class="field-value-span" style="position: relative; display: block; float: left; width: 790px; margin-left: 0px;"><ul style="padding: 0px 0px 0px 18px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);" class=" list-paddingleft-2">
                    <li>
                        <p>
                            <strong>2017.3 - 至今</strong>
                        </p>
                    </li>
                </ul>
                <p>
                    <strong>阿里巴巴集团</strong>
                </p>
                <p>
                    <strong>产品助理</strong>
                </p>
                <p>
                    公司介绍：阿里巴巴是国内最大的电子商务公司，旗下有淘宝、1688、支付宝等多个电商及金融产品。<span class="Apple-converted-space">&nbsp;</span><br/>工作内容：<span class="Apple-converted-space">&nbsp;</span><br/>1、使用PS、Axure等工具参与淘宝移动客户端交互、原型设计及需求文档撰写，与开发工程师沟通需求问题。<span class="Apple-converted-space">&nbsp;</span><br/>2、参与产品上线前的测试工作，跟进问题及需求变更的进度。
                </p></span>
            </td>
        </tr>
    </tbody>
    <tbody style="border-spacing: 0px; border: 0px; position: relative;">
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-title-td" style="margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px 0px 3px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(94, 142, 224); border-left-color: initial; position: relative;" width="790">
                <p>
                    <strong>实践经历</strong>
                </p>
            </td>
        </tr>
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-value-td" style="margin: 0px; padding-right: 0px; padding-left: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px; border-style: initial; border-color: initial; position: relative;">
                <span class="field-value-span" style="position: relative; display: block; float: left; width: 790px; margin-left: 0px;"><ul style="padding: 0px 0px 0px 18px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);" class=" list-paddingleft-2">
                    <li>
                        <p>
                            <strong>2016.3 - 2017.5</strong>
                        </p>
                    </li>
                </ul>
                <p>
                    <strong>8848电子商务有限公司</strong>
                </p>
                <p>
                    <strong>产品实习生</strong>
                </p>
                <p>
                    公司介绍：8848是国内最早的B2B电子商务公司之一，旗下产品有B2B电子商务平台：8848.com。<span class="Apple-converted-space">&nbsp;</span><br/>实践内容：<span class="Apple-converted-space">&nbsp;</span><br/>1、使用PS、Axure等工具参与PC端网站多个活动页面的UI、交互、原型设计及需求文档编写。<span class="Apple-converted-space">&nbsp;</span><br/>2、参与产品部分功能模块的白盒测试，使用Bugzilla提交和跟进Bug。
                </p></span>
            </td>
        </tr>
    </tbody>
    <tbody style="border-spacing: 0px; border: 0px; position: relative;">
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-title-td" style="margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px 0px 3px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(94, 142, 224); border-left-color: initial; position: relative;" width="790">
                <p>
                    <strong>获奖经历</strong>
                </p>
            </td>
        </tr>
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-value-td" style="margin: 0px; padding-right: 0px; padding-left: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px; border-style: initial; border-color: initial; position: relative;">
                <span class="field-value-span" style="position: relative; display: block; float: left; width: 790px; margin-left: 0px;"><p>
                    奖项一：2013年度三等奖学金。<span class="Apple-converted-space">&nbsp;</span><br/>奖项二：8848优秀实习员工。
                </p></span>
            </td>
        </tr>
    </tbody>
    <tbody style="border-spacing: 0px; border: 0px; position: relative;">
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-title-td" style="margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px 0px 3px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(94, 142, 224); border-left-color: initial; position: relative;" width="790">
                <p>
                    <strong>兴趣爱好</strong>
                </p>
            </td>
        </tr>
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-value-td" style="margin: 0px; padding-right: 0px; padding-left: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px; border-style: initial; border-color: initial; position: relative;">
                <span class="field-value-span" style="position: relative; display: block; float: left; width: 790px; margin-left: 0px;"><p>
                    喜欢阅读、健身，喜欢尝试和体验互联网新产品，在简书上发表产品体验报告
                </p></span>
            </td>
        </tr>
    </tbody>
    <tbody style="border-spacing: 0px; border: 0px; position: relative;">
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-title-td" style="margin: 0px; padding: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px 0px 3px; border-top-style: initial; border-right-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(94, 142, 224); border-left-color: initial; position: relative;" width="790">
                <p>
                    <strong>个人评价</strong>
                </p>
            </td>
        </tr>
        <tr style="border-spacing: 0px; border: 0px; position: relative;">
            <td class="field-value-td" style="margin: 0px; padding-right: 0px; padding-left: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-spacing: 0px; border-width: 0px; border-style: initial; border-color: initial; position: relative;">
                <span class="field-value-span" style="position: relative; display: block; float: left; width: 790px; margin-left: 0px;"><p>
                    1、能熟练使用Photoshop、Axure进行产品UI、原型、交互设计。<span class="Apple-converted-space">&nbsp;</span><br/>2、能熟练使用Office工具进行产品需求文档编写。<span class="Apple-converted-space">&nbsp;</span><br/>3、有较强的沟通能力，能有效的和用户进行需求沟通，与研发人员进行需求沟通。<span class="Apple-converted-space">&nbsp;</span><br/>4、喜欢对一件事情坚持到底，做出结果。
                </p></span>
            </td>
        </tr>
    </tbody>
</table>
<p>
    <br/>
</p>`
  },
  {
    pre: "pre1.png",
    title: lang.blog,
    preHtml:
      '<h1 label="Title center" name="tc" style="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;"><span style="color:#c0504d;">深入理解Range</span></h1><p style="text-align:center;"><strong class=" ">UEditor二次开发</strong></p><h3><span class=" " style="font-family:幼圆">什么是Range</span></h3><p style="text-indent:2em;">对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。 </p><br /><h3><span class=" " style="font-family:幼圆">Range能干什么</span></h3><p style="text-indent:2em;">在“开始”选项卡上，通过从快速样式库中为所选文本选择一种外观，您可以方便地更改文档中所选文本的格式。</p>',
    html:
      '<h1 class="ue_t" label="Title center" name="tc" style="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;"><span style="color:#c0504d;">[键入文档标题]</span></h1><p style="text-align:center;"><strong class="ue_t">[键入文档副标题]</strong></p><h3><span class="ue_t" style="font-family:幼圆">[标题 1]</span></h3><p class="ue_t"  style="text-indent:2em;">对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。 您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建基块。 您创建的图片、图表或关系图也将与当前的文档外观协调一致。</p><h3><span class="ue_t" style="font-family:幼圆">[标题 2]</span></h3><p class="ue_t"  style="text-indent:2em;">在“开始”选项卡上，通过从快速样式库中为所选文本选择一种外观，您可以方便地更改文档中所选文本的格式。 您还可以使用“开始”选项卡上的其他控件来直接设置文本格式。大多数控件都允许您选择是使用当前主题外观，还是使用某种直接指定的格式。 </p><h3><span class="ue_t" style="font-family:幼圆">[标题 3]</span></h3><p class="ue_t">对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。 您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建基块。 您创建的图片、图表或关系图也将与当前的文档外观协调一致。</p><p class="ue_t"><br /></p>'
  },
  {
    pre: "pre2.png",
    title: lang.resume,
    preHtml:
      '<h1 label="Title left" name="tl" style="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;margin:0px 0px 10px;"><span style="color:#e36c09;" class=" ">WEB前端开发简历</span></h1><table width="100%" border="1" bordercolor="#95B3D7" style="border-collapse:collapse;"><tbody><tr><td width="100" style="text-align:center;"><p><span style="background-color:transparent;">插</span><br /></p><p>入</p><p>照</p><p>片</p></td><td><p><span style="background-color:transparent;"> 联系电话：</span><span class="ue_t" style="background-color:transparent;">[键入您的电话]</span><br /></p><p><span style="background-color:transparent;"> 电子邮件：</span><span class="ue_t" style="background-color:transparent;">[键入您的电子邮件地址]</span><br /></p><p><span style="background-color:transparent;"> 家庭住址：</span><span class="ue_t" style="background-color:transparent;">[键入您的地址]</span><br /></p></td></tr></tbody></table><h3><span style="color:#E36C09;font-size:20px;">目标职位</span></h3><p style="text-indent:2em;" class=" ">WEB前端研发工程师</p><h3><span style="color:#e36c09;font-size:20px;">学历</span></h3><p><span style="display:none;line-height:0px;" id="_baidu_bookmark_start_26">﻿</span></p><ol style="list-style-type:decimal;"><li><p><span class="ue_t">[起止时间]</span> <span class="ue_t">[学校名称] </span> <span class="ue_t">[所学专业]</span> <span class="ue_t">[所获学位]</span></p></li></ol><h3><span style="color:#e36c09;font-size:20px;" class="ue_t">工作经验</span></h3><p><br /></p>',
    html:
      '<h1 label="Title left" name="tl" style="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;margin:0px 0px 10px;"><span style="color:#e36c09;" class="ue_t">[此处键入简历标题]</span></h1><p><span style="color:#e36c09;"><br /></span></p><table width="100%" border="1" bordercolor="#95B3D7" style="border-collapse:collapse;"><tbody><tr><td width="200" style="text-align:center;" class="ue_t">【此处插入照片】</td><td><p><br /></p><p> 联系电话：<span class="ue_t">[键入您的电话]</span></p><p><br /></p><p> 电子邮件：<span class="ue_t">[键入您的电子邮件地址]</span></p><p><br /></p><p> 家庭住址：<span class="ue_t">[键入您的地址]</span></p><p><br /></p></td></tr></tbody></table><h3><span style="color:#e36c09;font-size:20px;">目标职位</span></h3><p style="text-indent:2em;" class="ue_t">[此处键入您的期望职位]</p><h3><span style="color:#e36c09;font-size:20px;">学历</span></h3><p><span style="display:none;line-height:0px;" id="_baidu_bookmark_start_26">﻿</span></p><ol style="list-style-type:decimal;"><li><p><span class="ue_t">[键入起止时间]</span> <span class="ue_t">[键入学校名称] </span> <span class="ue_t">[键入所学专业]</span> <span class="ue_t">[键入所获学位]</span></p></li><li><p><span class="ue_t">[键入起止时间]</span> <span class="ue_t">[键入学校名称]</span> <span class="ue_t">[键入所学专业]</span> <span class="ue_t">[键入所获学位]</span></p></li></ol><h3><span style="color:#e36c09;font-size:20px;" class="ue_t">工作经验</span></h3><ol style="list-style-type:decimal;"><li><p><span class="ue_t">[键入起止时间]</span> <span class="ue_t">[键入公司名称]</span> <span class="ue_t">[键入职位名称]</span> </p></li><ol style="list-style-type:lower-alpha;"><li><p><span class="ue_t">[键入负责项目]</span> <span class="ue_t">[键入项目简介]</span></p></li><li><p><span class="ue_t">[键入负责项目]</span> <span class="ue_t">[键入项目简介]</span></p></li></ol><li><p><span class="ue_t">[键入起止时间]</span> <span class="ue_t">[键入公司名称]</span> <span class="ue_t">[键入职位名称]</span> </p></li><ol style="list-style-type:lower-alpha;"><li><p><span class="ue_t">[键入负责项目]</span> <span class="ue_t">[键入项目简介]</span></p></li></ol></ol><p><span style="color:#e36c09;font-size:20px;">掌握技能</span></p><p style="text-indent:2em;"> &nbsp;<span class="ue_t">[这里可以键入您所掌握的技能]</span><br /></p>'
  },
  {
    pre: "pre3.png",
    title: lang.richText,
    preHtml:
      '<h1 label="Title center" name="tc" style="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;" class="ue_t">[此处键入文章标题]</h1><p><img src="//imgbaidu.b0.upaiyun.com/hi/youa/y_0034.gif" width="150" height="100" border="0" hspace="0" vspace="0" style="width:150px;height:100px;float:left;" />图文混排方法</p><p>图片居左，文字围绕图片排版</p><p>方法：在文字前面插入图片，设置居左对齐，然后即可在右边输入多行文</p><p><br /></p><p><img src="//imgbaidu.b0.upaiyun.com/hi/youa/y_0040.gif" width="100" height="100" border="0" hspace="0" vspace="0" style="width:100px;height:100px;float:right;" /></p><p>还有没有什么其他的环绕方式呢？这里是居右环绕</p><p><br /></p><p>欢迎大家多多尝试，为UEditor提供更多高质量模板！</p>',
    html:
      '<p><br /></p><h1 label="Title center" name="tc" style="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;" class="ue_t">[此处键入文章标题]</h1><p><img src="//imgbaidu.b0.upaiyun.com/hi/youa/y_0034.gif" width="300" height="200" border="0" hspace="0" vspace="0" style="width:300px;height:200px;float:left;" />图文混排方法</p><p>1. 图片居左，文字围绕图片排版</p><p>方法：在文字前面插入图片，设置居左对齐，然后即可在右边输入多行文本</p><p><br /></p><p>2. 图片居右，文字围绕图片排版</p><p>方法：在文字前面插入图片，设置居右对齐，然后即可在左边输入多行文本</p><p><br /></p><p>3. 图片居中环绕排版</p><p>方法：亲，这个真心没有办法。。。</p><p><br /></p><p><br /></p><p><img src="//imgbaidu.b0.upaiyun.com/hi/youa/y_0040.gif" width="300" height="300" border="0" hspace="0" vspace="0" style="width:300px;height:300px;float:right;" /></p><p>还有没有什么其他的环绕方式呢？这里是居右环绕</p><p><br /></p><p>欢迎大家多多尝试，为UEditor提供更多高质量模板！</p><p><br /></p><p>占位</p><p><br /></p><p>占位</p><p><br /></p><p>占位</p><p><br /></p><p>占位</p><p><br /></p><p>占位</p><p><br /></p><p><br /></p>'
  },
  {
    pre: "pre4.png",
    title: lang.sciPapers,
    preHtml:
      '<h2 style="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;margin:0px 0px 10px;text-align:center;" class="ue_t">[键入文章标题]</h2><p><strong><span style="font-size:12px;">摘要</span></strong><span style="font-size:12px;" class="ue_t">：这里可以输入很长很长很长很长很长很长很长很长很差的摘要</span></p><p style="line-height:1.5em;"><strong>标题 1</strong></p><p style="text-indent:2em;"><span style="font-size:14px;" class="ue_t">这里可以输入很多内容，可以图文混排，可以有列表等。</span></p><p style="line-height:1.5em;"><strong>标题 2</strong></p><ol style="list-style-type:lower-alpha;"><li><p class="ue_t">列表 1</p></li><li><p class="ue_t">列表 2</p></li><ol style="list-style-type:lower-roman;"><li><p class="ue_t">多级列表 1</p></li><li><p class="ue_t">多级列表 2</p></li></ol><li><p class="ue_t">列表 3<br /></p></li></ol><p style="line-height:1.5em;"><strong>标题 3</strong></p><p style="text-indent:2em;"><span style="font-size:14px;" class="ue_t">来个文字图文混排的</span></p><p style="text-indent:2em;"><br /></p>',
    html:
      '<h2 style="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;margin:0px 0px 10px;text-align:center;" class="ue_t">[键入文章标题]</h2><p><strong><span style="font-size:12px;">摘要</span></strong><span style="font-size:12px;" class="ue_t">：这里可以输入很长很长很长很长很长很长很长很长很差的摘要</span></p><p style="line-height:1.5em;"><strong>标题 1</strong></p><p style="text-indent:2em;"><span style="font-size:14px;" class="ue_t">这里可以输入很多内容，可以图文混排，可以有列表等。</span></p><p style="line-height:1.5em;"><strong>标题 2</strong></p><p style="text-indent:2em;"><span style="font-size:14px;" class="ue_t">来个列表瞅瞅：</span></p><ol style="list-style-type:lower-alpha;"><li><p class="ue_t">列表 1</p></li><li><p class="ue_t">列表 2</p></li><ol style="list-style-type:lower-roman;"><li><p class="ue_t">多级列表 1</p></li><li><p class="ue_t">多级列表 2</p></li></ol><li><p class="ue_t">列表 3<br /></p></li></ol><p style="line-height:1.5em;"><strong>标题 3</strong></p><p style="text-indent:2em;"><span style="font-size:14px;" class="ue_t">来个文字图文混排的</span></p><p style="text-indent:2em;"><span style="font-size:14px;" class="ue_t">这里可以多行</span></p><p style="text-indent:2em;"><span style="font-size:14px;" class="ue_t">右边是图片</span></p><p style="text-indent:2em;"><span style="font-size:14px;" class="ue_t">绝对没有问题的，不信你也可以试试看</span></p><p><br /></p>'
  }
];