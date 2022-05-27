<template>
    <div class="home">

        <el-row justify="center" align="middle">
            <el-col :xs="22" :sm="16" :md="12" :lg="8" :xl="6">
                <el-card :body-style="{ padding: '0px' }">
                    <img style="width: 100%; display: block" src="@/assets/images/xbox-game-pass-ultimate.jpeg" alt="">
                    <div style="padding: 8px">
                        <el-row justify="center" align="middle">
                            <el-col><span><strong>Xbox Game Pass Ultimate (主机版)</strong></span><span>&nbsp价值</span></el-col>
                        </el-row>
                        <el-button @click="jumpXbox" size="large" type="success" plain>
                            <count-up class="count-up" :end-val="xbox.totalRate" :options="countUpOptions"></count-up>
                        </el-button>
                        <el-row justify="center" align="middle">
                            <el-col><span style="font-size: 10px;">(点击分数查看详情)</span></el-col>
                        </el-row>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <br>
        <el-row justify="center" align="middle">
            <el-col :xs="22" :sm="16" :md="12" :lg="8" :xl="6">
                <el-card :body-style="{ padding: '0px' }">
                    <img style="width: 100%; display: block" src="@/assets/images/playstation-plus.png" alt="">
                    <div style="padding: 8px">
                        <el-row justify="center" align="middle">
                            <el-col><span><strong>Playstation Plus Extra</strong></span><span>&nbsp价值</span></el-col>
                        </el-row>
                        <el-button size="large" type="info" plain @click="jumpPlaystation">
                            <count-up class="count-up" :end-val="playstation.totalRate" :options="countUpOptions">
                            </count-up>
                        </el-button>
                        <el-row justify="center" align="middle">
                            <el-col><span style="font-size: 10px;">(点击分数查看详情)</span></el-col>
                        </el-row>

                    </div>
                </el-card>
            </el-col>
        </el-row>
        <br>
        <el-row>
            <el-col :xs="1" :sm="1" :md="4" :lg="4" :xl="4"></el-col>
            <el-col :xs="22" :sm="22" :md="16" :lg="16" :xl="16">
                <el-divider></el-divider>
            </el-col>
        </el-row>
        <el-row justify="center" align="middle">
            <el-col :xs="22" :sm="16" :md="12" :lg="8" :xl="6">
                <div id="chnTitlesChart" style="width: 100%;height:400px;"></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="1" :sm="1" :md="4" :lg="4" :xl="4"></el-col>
            <el-col :xs="22" :sm="22" :md="16" :lg="16" :xl="16">
                <el-divider></el-divider>
            </el-col>
        </el-row>
        <el-row justify="center" align="middle">
            <el-col :xs="22" :sm="16" :md="12" :lg="8" :xl="6">
                <div id="scoreChart" style="width: 100%;height:400px;"></div>
            </el-col>
        </el-row>
        <el-row justify="center" align="middle">
            <el-col :xs="22" :sm="16" :md="12" :lg="8" :xl="6">
                <div id="releaseYearChart" style="width: 100%;height:400px;"></div>
            </el-col>
        </el-row>
        <el-row justify="center" align="middle">
            <el-col>
                感谢百度贴吧吧友@<a
                    href="https://tieba.baidu.com/home/main?id=tb.1.8dc0bc78.9ZuSZ2lLdFlKj2kCG2NAug?t=1601177036&fr=pb"
                    target="_blank">-妖子琦-</a>提供数据
            </el-col>
        </el-row>
        <br>
        <el-row justify="center" align="middle">
            <el-col>
                <a href="https://tieba.baidu.com/p/7848456944" target="_blank">https://tieba.baidu.com/p/7848456944</a>
            </el-col>
        </el-row>
        <br>
        <el-row justify="center" align="middle">
            <el-col>
                更新计划: 更新UI, 更多表格功能.
            </el-col>
        </el-row>
        <br>
        <el-row justify="center" align="middle">
            <el-col>
                说明: 数据来源, 价值计算方式等均在源代码中公开; 汇率仅供参考;
            </el-col>
            <el-col>
                统计XGPU时, 不包含PC Game Pass的数据; 在计算订阅价值时假定订阅年费相等;
            </el-col>
        </el-row>
        <br>
        <el-row justify="center" align="middle">
            <el-col>
                <a href="https://github.com/lwp2070809/game-pass-values" target="_blank">
                    <img src="https://img.shields.io/github/stars/lwp2070809/game-pass-values.svg?style=social"
                        alt="GitHub Stars">
                </a>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import Papa from 'papaparse';
import * as echarts from 'echarts';
import CountUp from 'vue-countup-v3';
import common from '@/utils/common'

export default {
    name: 'Home',
    components: {
        CountUp
    },
    data() {
        return {
            xbox: {
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
                myScore: 0,
                totalRate: 0,
                releaseYearArray: []
            },
            playstation: {
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
                myScore: 0,
                totalRate: 0,
                releaseYearArray: []
            },
            usdExchangeRate: common.usdExchangeRate,
            hkdExchangeRate: common.hkdExchangeRate,
            countUpOptions: {
                separator: "",
                duration: 1.5
            },
        }
    },
    methods: {
        getXboxData() {
            return new Promise((resolve, reject) => {
                Papa.parse('games-data/xbox-game-pass-ultimate.csv', {
                    header: true,
                    download: true,
                    complete: (results) => {
                        resolve(results);
                    }
                });
            });

        },
        getPlaystationData() {
            return new Promise((resolve, reject) => {
                Papa.parse('games-data/playstation-plus-extra.csv', {
                    header: true,
                    download: true,
                    complete: (results) => {
                        resolve(results);
                    }
                });
            });

        },
        async getData() {
            let xboxresult = await this.getXboxData();
            {
                this.xbox.tableData = xboxresult.data;
                this.xbox.totalNum = xboxresult.data.length;
                xboxresult.data.forEach(item => {
                    this.xbox.hkTotalPrice += Number(item.港区价格);
                    let price = this.xbox.hkTotalPrice * this.hkdExchangeRate;
                    if (item.港区价格.length == 0) {
                        this.xbox.usTotalPrice += Number(item.美区价格);
                        price = this.xbox.usTotalPrice * this.usdExchangeRate;
                    }
                    if (item.中文.length > 0) {
                        this.xbox.totalChnNum += 1;
                    }
                    let score = 70;
                    if (item.评分.length > 0) {
                        this.totalScore += Number(item.评分);
                        this.totalScoredNum += 1;
                        score = Number(item.评分);
                        switch (true) {
                            case Number(item.评分) >= 90:
                                this.xbox.universalAcclaimTitles += 1;
                                break;
                            case Number(item.评分) >= 75:
                                this.xbox.generallyFavorableTitles += 1;
                                break;
                            case Number(item.评分) >= 50:
                                this.xbox.mixedTitles += 1;
                                break;
                            case Number(item.评分) >= 20:
                                this.xbox.generallyUnfavorableTitles += 1;
                                break;
                            case Number(item.评分) >= 0:
                                this.xbox.overwhelmingDislikeTitles += 1;
                                break;
                        }
                    } else {
                        this.xbox.mixedTitles += 1;
                    }
                    this.xbox.releaseYearArray.push(item.年份);
                    this.xbox.totalRate = price * 0.1 + Math.pow(score, 2) * 0.004 + Math.pow(Number(item.年份) - 1985, 3) * 0.001;
                });
            }
            let playstationresult = await this.getPlaystationData();
            {
                this.playstation.tableData = playstationresult.data;
                this.playstation.totalNum = playstationresult.data.length;
                playstationresult.data.forEach(item => {
                    this.playstation.hkTotalPrice += Number(item.港服价格);
                    let price = this.playstation.hkTotalPrice * this.hkdExchangeRate;
                    if (item.中文.length > 0) {
                        this.playstation.totalChnNum += 1;
                    }
                    let score = 70;
                    if (item.评分.length > 0) {
                        this.totalScore += Number(item.评分);
                        this.totalScoredNum += 1;
                        score = Number(item.评分);
                        switch (true) {
                            case Number(item.评分) >= 90:
                                this.playstation.universalAcclaimTitles += 1;
                                break;
                            case Number(item.评分) >= 75:
                                this.playstation.generallyFavorableTitles += 1;
                                break;
                            case Number(item.评分) >= 50:
                                this.playstation.mixedTitles += 1;
                                break;
                            case Number(item.评分) >= 20:
                                this.playstation.generallyUnfavorableTitles += 1;
                                break;
                            case Number(item.评分) >= 0:
                                this.playstation.overwhelmingDislikeTitles += 1;
                                break;
                        }
                    } else {
                        this.playstation.mixedTitles += 1;
                    }
                    this.playstation.releaseYearArray.push(item.年份);
                    this.playstation.totalRate = price * 0.1 + Math.pow(score, 2) * 0.004 + Math.pow(Number(item.年份) - 1985, 3) * 0.001;
                });
            }
            this.createCharts();
        },
        createChnTitlesChart() {
            var myChart = echarts.init(document.getElementById('chnTitlesChart'));

            myChart.setOption({
                title: {
                    text: '游戏数量',
                    x: 'center',
                    y: 'top',
                    textStyle: {
                        fontSize: 16,
                        fontWeight: 'normal'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['Xbox', 'Playstation']
                },
                yAxis: {
                    type: 'value'
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['中文游戏', '非中文游戏'],
                    right: '10%',
                    orient: 'vertical',
                    selectedMode: false,
                },
                series: [
                    {
                        data: [this.xbox.totalChnNum, this.playstation.totalChnNum],
                        type: 'bar',
                        stack: 'x',
                        name: '中文游戏',
                        lable: {
                        },
                        itemStyle: {
                            color: '#FAC859'
                        },
                    },
                    {
                        data: [this.xbox.totalNum - this.xbox.totalChnNum, this.playstation.totalNum - this.playstation.totalChnNum],
                        type: 'bar',
                        stack: 'x',
                        name: '非中文游戏',
                        itemStyle: {
                            color: '#74c0de'
                        },
                    }
                ]

            });

        },
        createReleaseYearChart() {
            var myChart = echarts.init(document.getElementById('releaseYearChart'));

            let yearArray = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]

            let xboxObj = {};
            this.xbox.releaseYearArray.forEach(item => {
                if (xboxObj[item]) {
                    xboxObj[item] += 1;
                } else {
                    xboxObj[item] = 1;
                }
            });
            let xboxYearArray = [];

            let playstationObj = {};
            this.playstation.releaseYearArray.forEach(item => {
                if (playstationObj[item]) {
                    playstationObj[item] += 1;
                } else {
                    playstationObj[item] = 1;
                }
            });
            let playstationYearArray = [];

            yearArray.forEach(item => {
                if (xboxObj.hasOwnProperty(item)) {
                    xboxYearArray.push(xboxObj[item]);
                } else {
                    xboxYearArray.push(0);
                }
                if (playstationObj.hasOwnProperty(item)) {
                    playstationYearArray.push(playstationObj[item]);
                } else {
                    playstationYearArray.push(0);
                }
            });

            myChart.setOption({
                title: {
                    text: '发售年份',
                    x: 'center',
                    y: 'top',
                    textStyle: {
                        fontSize: 16,
                        fontWeight: 'normal'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['Xbox', 'Playstation'],
                    right: '10%',
                    orient: 'vertical'
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        formatter: function (value, index) {
                            return value + '年';
                        },
                        interval: 0,
                        rotate: 45
                    },
                    data: yearArray

                },
                yAxis: { type: 'value' },
                series: [
                    {
                        data: xboxYearArray,
                        type: 'line',
                        name: 'Xbox',
                        itemStyle: {
                            color: '#92cc74',
                        }
                    },
                    {
                        data: playstationYearArray,
                        type: 'line',
                        name: 'Playstation',
                        itemStyle: {
                            color: '#5470c6',
                        }
                    },
                ]

            });

        },
        createScoreChart() {
            var myChart = echarts.init(document.getElementById('scoreChart'));
            myChart.setOption({
                title: {
                    text: '评分',
                    x: 'center',
                    y: 'top',
                    textStyle: {
                        fontSize: 16,
                        fontWeight: 'normal'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['Xbox', 'Playstation'],
                    right: '10%',
                    orient: 'vertical'
                },
                xAxis: {
                    type: 'category',
                    data: ["极度差评", "普遍差评", "褒贬不一", '普遍好评', '普遍赞誉']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [this.xbox.overwhelmingDislikeTitles, this.xbox.generallyUnfavorableTitles, this.xbox.mixedTitles, this.xbox.generallyFavorableTitles, this.xbox.universalAcclaimTitles],
                        type: 'line',
                        name: 'Xbox',
                        itemStyle: {
                            color: '#92cc74',
                        }
                    },
                    {
                        data: [this.playstation.overwhelmingDislikeTitles, this.playstation.generallyUnfavorableTitles, this.playstation.mixedTitles, this.playstation.generallyFavorableTitles, this.playstation.universalAcclaimTitles],
                        type: 'line',
                        name: 'Playstation',
                        itemStyle: {
                            color: '#5470c6',
                        }
                    },
                ]

            });
        },
        jumpXbox() {
            this.$router.push({
                path: '/detail/xbox-game-pass-ultimate'
            });
        },
        jumpPlaystation() {
            this.$router.push({
                path: '/detail/playstation-plus-extra'
            });
        },
        createCharts() {
            this.createReleaseYearChart();
            this.createScoreChart();
            this.createChnTitlesChart();
        }
    },
    mounted() {
        this.getData();
    }
}

</script>

<style scoped>
.el-col {
    text-align: center
}

.count-up {
    font-size: 30px;
    font-weight: bold;
}
</style>
