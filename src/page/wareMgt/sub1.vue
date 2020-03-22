<template>
  <div class="ware-mgt">
    <div class="form-head">
      <el-row :gutter="20">
        <el-col :span="2">
          <el-dropdown v-model="queryForm.code">
            <span class="el-dropdown-link">
              商品编号<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in codeOptions.subCodeOptions" :key="item.value" :label="item.label" :value="item.value">{{item.label}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="6">
          <el-input v-model="queryForm.keyWords" placeholder="搜索" size="mini">
            <el-button slot="append" icon="el-icon-search" @click="ArrangeData({},'search')"></el-button>
          </el-input>
        </el-col>
        <el-col :span="6">
          <span>商品价格</span>
          <div class="v-line">
            <el-input v-model="queryForm.minPrice" size="mini" class="ware-price" />
            ~
            <el-input v-model="queryForm.maxPrice" size="mini" class="ware-price" />
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="m-t-10 m-b-5">
        <el-col :span="4">
          <el-select size="mini" v-model="queryForm.type" placeholder="请选择品种">
            <el-option v-for="item in codeOptions.typeOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select size="mini" v-model="queryForm.sex" placeholder="请选择性别">
            <el-option v-for="item in codeOptions.sexOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <span>价格由</span>
          <div class="v-line">
            <el-input v-model="queryForm.minPrice1" size="mini" class="ware-price" />
            ~
            <el-input v-model="queryForm.maxPrice1" size="mini" class="ware-price" />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="table-main">
      <el-scrollbar>
        <el-table :data="tableData" :header-cell-style="headerStyle" style="width: 100%" v-loading="tableLoading" highlight-current-row class="table_scroll_column">
          <el-table-column prop="code" label="商品编号" show-overflow-tooltip min-width="50" align="center">
          </el-table-column>
          <el-table-column prop="name" label="猫名字" show-overflow-tooltip min-width="50" align="center">
          </el-table-column>
          <el-table-column prop="pic" label="猫头图" show-overflow-tooltip min-width="50" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.pic" width="25" class="table-pic" alt="">
            </template>
          </el-table-column>
          <el-table-column prop="store" label="库存" show-overflow-tooltip min-width="50" align="center">
          </el-table-column>
          <el-table-column prop="type" label="品种" show-overflow-tooltip min-width="50" align="center">
          </el-table-column>
          <el-table-column prop="price" label="积分价格" show-overflow-tooltip min-width="50" align="center">
          </el-table-column>
          <el-table-column prop="sex" label="性别" show-overflow-tooltip min-width="50" align="center">
          </el-table-column>
          <el-table-column prop="age" label="年龄" show-overflow-tooltip min-width="50" align="center">
          </el-table-column>
          <el-table-column prop="health" label="疫苗/驱虫" show-overflow-tooltip min-width="50" align="center">
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip min-width="120" align="center">
            <template slot-scope="scope">
              <el-button type="text" @click="handleOpen('edit',scope.row)">编辑</el-button>
              <el-button type="text" @click="handleOpen('view',scope.row)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
      <div class="m-t-10 page-border" align="right">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background :current-page="queryForm.currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="queryForm.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
    <div class="m-t-10">
      <el-button size="mini" type="primary" @click="handleOpen('add')">新增商品</el-button>
    </div>
    <wareMgt ref="ware" v-if="showWareDialog" :showType="showType" :transferObj="transferObj" :accesstoken="accesstoken" @backTable="backTable"></wareMgt>
  </div>
</template>

<script>
import store from "@/utils/store";
import wareMgt from "@/components/wareMgt";

export default {
  name: "sub1",
  components: { wareMgt },
  data() {
    return {
      queryForm: {
        code: "",
        type: "",
        sex: "",
        keyWords: "",
        minPrice: "",
        maxPrice: "",
        minPrice1: "",
        maxPrice1: "",
        priceSort: "",
        currentPage: 1,
        pageSize: 10
      },
      codeOptions: store.codeOptions,
      tableLoading: false,
      tableData: store.wareTableData,
      total: 14,
      // 列表头样式
      headerStyle: {
        backgroundColor: "#f5f5f5"
      },

      showWareDialog: false,
      showType: "",
      transferObj: {},
      accesstoken: ""
    };
  },
  methods: {
    // table数据
    ArrangeData(obj, bol, val) {},
    // 新增
    handleOpen(bol, row) {
      this.showType = bol;
      switch (bol) {
        case "add":
          this.transferObj = {};
        case "edit":
          this.transferObj = row;
          break;
        case "view":
          this.transferObj = row;
          break;
      }
      this.showWareDialog = true;
    },
    // 当前页改动
    handleCurrentChange(val) {
      this.queryForm.currentPage = val;
      this.ArrangeData({}, "search", val);
    },
    // 页数改动
    handleSizeChange(val) {
      this.queryForm.pageSize = val;
      this.handleCurrentChange(1);
    },
    // 组件回显
    backTable(str, bol) {
      this.showWareDialog = bol;
      if (bol === "confirm") {
        this.handleCurrentChange(1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ware-mgt {
  padding: 20px;
  .ware-price {
    width: 80px;
  }
  /deep/ .el-scrollbar {
    height: calc(100vh - 315px);
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  .table-main {
    border: 1px solid #ebeef5;
  }
  .table-pic {
    vertical-align: middle;
  }
  .page-border {
    padding-bottom: 13px;
  }
}
</style>