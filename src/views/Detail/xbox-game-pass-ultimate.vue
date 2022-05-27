<template>
  <el-row>
    <el-col>
      <el-button type="primary" link @click="jumpHome()">
        返回首页
      </el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col> <strong>Xbox Game Pass Ultimate (主机版, 不含PGP)</strong></el-col>
    <el-col>总数量: {{ totalNum }}</el-col>
    <el-col>中文游戏数: {{ totalChnNum }}</el-col>
    <el-col>港区价值: {{ (hkTotalPrice).toFixed(2) }} HKD</el-col>
    <el-col>美区价值 (不在港区的游戏): {{ (usTotalPrice).toFixed(2) }} USD</el-col>
    <el-col>总价值: {{ (hkTotalPrice * hkdExchangeRate + usTotalPrice * usdExchangeRate).toFixed(2) }} RMB </el-col>
    <el-col>平均分: {{ Math.round(totalScore / totalScoredNum) }}</el-col>
  </el-row>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="英文名" label="英文名" />
    <el-table-column prop="中文名" label="中文名" />
    <el-table-column prop="美区价格" label="美区价格" />
    <el-table-column prop="港区价格" label="港区价格" />
    <el-table-column prop="中文" label="中文" />
    <el-table-column prop="评分" label="评分" />
    <el-table-column prop="年份" label="年份" />
  </el-table>
</template>

<script>
import Papa from 'papaparse';
import common from '@/utils/common'

export default {
  data() {
    return {
      tableData: [],
      totalNum: 0,
      hkTotalPrice: 0,
      usTotalPrice: 0,
      totalChnNum: 0,
      totalScoredNum: 0,
      totalScore: 0,
      universalAcclaimTitles: 0,
      generallyFavorableTitles: 0,
      mixedTitles: 0,
      generallyUnfavorableTitles: 0,
      overwhelmingDislikeTitles: 0,
      usdExchangeRate: common.usdExchangeRate,
      hkdExchangeRate: common.hkdExchangeRate,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch(common.xboxGamePassUltimateData);
      const text = await response.text();
      const result = Papa.parse(text, { header: true });
      this.tableData = result.data;
      this.totalNum = result.data.length;

      result.data.forEach(item => {
        this.hkTotalPrice += Number(item.港区价格);
        if (item.港区价格.length == 0) {
          this.usTotalPrice += Number(item.美区价格);
        }
        if (item.中文.length > 0) {
          this.totalChnNum += 1;
        }
        if (item.评分.length > 0) {
          this.totalScore += Number(item.评分);
          this.totalScoredNum += 1;
        }
      });
    },
    jumpHome() {
      window.location.href = '/';
    },
  },
  mounted() {
    this.fetchData();
  }
}
</script>