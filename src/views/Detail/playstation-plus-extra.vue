<template>
  <el-row>
    <el-col>
      <router-link to="/">回到首页</router-link>
    </el-col>
  </el-row>
  <el-row>
    <el-col>总数量: 223</el-col>
    <el-col>总价值: 53802 HKD</el-col>
  </el-row>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="英文名" label="英文名" />
    <el-table-column prop="中文名" label="中文名" />
    <el-table-column prop="港服价格" label="港服价格" />
    <el-table-column prop="中文" label="中文" />
    <el-table-column prop="评分" label="评分" />
    <el-table-column prop="年份" label="年份" />
  </el-table>
</template>

<script lang="ts" setup>
import Papa from 'papaparse';

import { onMounted, ref } from 'vue'
let tableData = ref<unknown[] | object[]>([])

const getData = async () => {
  Papa.parse('games-data/playstation-plus-extra.csv', {
    download: true,
    header: true,
    complete: (results) => {
      tableData.value = [...results.data] || []
    },
  });
}
onMounted(() => {
  getData()
})


</script>