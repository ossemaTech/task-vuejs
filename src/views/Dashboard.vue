<template>
    <div id="dashboard">
        <div class="row m-0">
            <div class="col-md-3">
                <div class="sidebar">
                    <div>
                        <b-button v-b-toggle.sidebar-1><b-icon icon="justify-left"></b-icon></b-button>
                        <b-sidebar id="sidebar-1" title="Sidebar" shadow>
                        <div class="px-3 py-2">
                            <nav class="mb-3">
                                <router-link class="nav-link" exact to="/">
                                    <b-icon icon="house-door"></b-icon> Ana Sayfa
                                </router-link>
                                <button type="submit" class="btn btn-danger btn-block" @click.prevent="logout">logout</button>
                                <div class='link-bottom'>
                                    <router-link class="nav-link" exact to="/">
                                        Test User
                                    </router-link>
                                    <router-link class="nav-link" exact to="/">
                                        Role
                                    </router-link>
                                </div>
                            </nav>
                        </div>
                        </b-sidebar>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="content">
                    <h3 class="title">Anasayfa</h3> 
                    <div class="row  chart-bg">
                        
                        <div class="col-md-6">
                            <div class="chart-circle">
                                <highcharts :options="pietOptions"></highcharts>
        
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="chart-line">
                                <highcharts :options="barOption"></highcharts>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scope>
    #dashboard {
        background-image: url('../assets/dashboard/dashboard_bg.png');
        height: 100%; /* You must set a specified height */
        width: 100%;
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
        overflow: auto;
    }

    .title {
        color: #777;
        font-size: 24px;
        font-weight: 700;
    }
    .nav-link {
        color: #777;
        font-size: 18px;
    }
    .b-icon.bi {
        color: #e37e28 !important;
        font-size: 18px;
    }

    .link-bottom {
        position: absolute;
        bottom: 20px;
        width: 90%;
    }

    .link-bottom .nav-link {
        background: #ccc;
        border-radius: 16px;
        color: #e37e28 !important;
        margin-top: 8px;
    }

    .chart-bg {
        margin: 0;
        margin-top: 20px !important;
        margin-right: 15px !important;
        padding: 10px;
        background-color: #cccccc80;
        border-radius: 8px;
        -webkit-box-shadow: 7px 7px 5px 0px rgba(150, 150, 150, 0.75);
        -moz-box-shadow:    7px 7px 5px 0px rgba(150, 150, 150, 0.75);
        box-shadow:         7px 7px 5px 0px rgba(150, 150, 150, 0.75);
    }


</style>


<script>
import {
    Chart
} from "highcharts-vue";
export default {
    components: {
        highcharts: Chart
    },
    data() {
        return {
            pietOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Browser market shares in January, 2018'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                        name: 'Chrome',
                        y: 61.41,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Internet Explorer',
                        y: 11.84
                    }, {
                        name: 'Firefox',
                        y: 10.85
                    }, {
                        name: 'Edge',
                        y: 4.67
                    }, {
                        name: 'Safari',
                        y: 4.18
                    }, {
                        name: 'Sogou Explorer',
                        y: 1.64
                    }, {
                        name: 'Opera',
                        y: 1.6
                    }, {
                        name: 'QQ',
                        y: 1.2
                    }, {
                        name: 'Other',
                        y: 2.61
                    }]
                }]
            },
            barOption: {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Browser market shares. January, 2018'
                },
                subtitle: {
                    text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
                },
                accessibility: {
                    announceNewData: {
                        enabled: true
                    }
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Total percent market share'
                    }

                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },

                series: [{
                    name: "Browsers",
                    colorByPoint: true,
                    data: [{
                            name: "Chrome",
                            y: 62.74,
                            drilldown: "Chrome"
                        },
                        {
                            name: "Firefox",
                            y: 10.57,
                            drilldown: "Firefox"
                        },
                        {
                            name: "Internet Explorer",
                            y: 7.23,
                            drilldown: "Internet Explorer"
                        },
                        {
                            name: "Safari",
                            y: 5.58,
                            drilldown: "Safari"
                        },
                        {
                            name: "Edge",
                            y: 4.02,
                            drilldown: "Edge"
                        },
                        {
                            name: "Opera",
                            y: 1.92,
                            drilldown: "Opera"
                        },
                        {
                            name: "Other",
                            y: 7.62,
                            drilldown: null
                        }
                    ]
                }],
                drilldown: {
                    series: [{
                            name: "Chrome",
                            id: "Chrome",
                            data: [
                                [
                                    "v65.0",
                                    0.1
                                ],
                                [
                                    "v64.0",
                                    1.3
                                ],
                                [
                                    "v63.0",
                                    53.02
                                ],
                                [
                                    "v62.0",
                                    1.4
                                ],
                                [
                                    "v61.0",
                                    0.88
                                ],
                                [
                                    "v60.0",
                                    0.56
                                ],
                                [
                                    "v59.0",
                                    0.45
                                ],
                                [
                                    "v58.0",
                                    0.49
                                ],
                                [
                                    "v57.0",
                                    0.32
                                ],
                                [
                                    "v56.0",
                                    0.29
                                ],
                                [
                                    "v55.0",
                                    0.79
                                ],
                                [
                                    "v54.0",
                                    0.18
                                ],
                                [
                                    "v51.0",
                                    0.13
                                ],
                                [
                                    "v49.0",
                                    2.16
                                ],
                                [
                                    "v48.0",
                                    0.13
                                ],
                                [
                                    "v47.0",
                                    0.11
                                ],
                                [
                                    "v43.0",
                                    0.17
                                ],
                                [
                                    "v29.0",
                                    0.26
                                ]
                            ]
                        },
                        {
                            name: "Firefox",
                            id: "Firefox",
                            data: [
                                [
                                    "v58.0",
                                    1.02
                                ],
                                [
                                    "v57.0",
                                    7.36
                                ],
                                [
                                    "v56.0",
                                    0.35
                                ],
                                [
                                    "v55.0",
                                    0.11
                                ],
                                [
                                    "v54.0",
                                    0.1
                                ],
                                [
                                    "v52.0",
                                    0.95
                                ],
                                [
                                    "v51.0",
                                    0.15
                                ],
                                [
                                    "v50.0",
                                    0.1
                                ],
                                [
                                    "v48.0",
                                    0.31
                                ],
                                [
                                    "v47.0",
                                    0.12
                                ]
                            ]
                        },
                        {
                            name: "Internet Explorer",
                            id: "Internet Explorer",
                            data: [
                                [
                                    "v11.0",
                                    6.2
                                ],
                                [
                                    "v10.0",
                                    0.29
                                ],
                                [
                                    "v9.0",
                                    0.27
                                ],
                                [
                                    "v8.0",
                                    0.47
                                ]
                            ]
                        },
                        {
                            name: "Safari",
                            id: "Safari",
                            data: [
                                [
                                    "v11.0",
                                    3.39
                                ],
                                [
                                    "v10.1",
                                    0.96
                                ],
                                [
                                    "v10.0",
                                    0.36
                                ],
                                [
                                    "v9.1",
                                    0.54
                                ],
                                [
                                    "v9.0",
                                    0.13
                                ],
                                [
                                    "v5.1",
                                    0.2
                                ]
                            ]
                        },
                        {
                            name: "Edge",
                            id: "Edge",
                            data: [
                                [
                                    "v16",
                                    2.6
                                ],
                                [
                                    "v15",
                                    0.92
                                ],
                                [
                                    "v14",
                                    0.4
                                ],
                                [
                                    "v13",
                                    0.1
                                ]
                            ]
                        },
                        {
                            name: "Opera",
                            id: "Opera",
                            data: [
                                [
                                    "v50.0",
                                    0.96
                                ],
                                [
                                    "v49.0",
                                    0.82
                                ],
                                [
                                    "v12.1",
                                    0.14
                                ]
                            ]
                        }
                    ]
                }
            }
        }
    },
    methods: {
        logout() {
            return this.$store.commit("logout");
        }
    }
}
</script>