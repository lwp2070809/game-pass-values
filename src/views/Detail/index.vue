<template>
  <el-row></el-row>
  <el-table :data="tableData" style="width: 100%">
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

export default {
  name: 'Detail',
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    parseCsv() {
      Papa.parse('games-data/xbox-game-pass-ultimate.csv', {
        download: true,
        header: true,
        complete: (results) => {
          console.log(results.data);
          this.tableData = results.data;
        },
      });
    },
  },
  created() {
    this.parseCsv();
  },
};

// const tableData = [
//   {
//     "英文名": "7 Days to Die",
//     "中文名": "七日杀",
//     "美区价格": "30",
//     "港区价格": "159",
//     "中文": "中pc",
//     "评分": "37",
//     "年份": "2013"
//   }
// ]

</script>