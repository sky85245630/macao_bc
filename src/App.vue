<template>
    <div id="app">
        <el-col :span="20" :offset="2">
            <div id="nav">
                <el-row>
                    <el-col :span="12">
                        <div style="float: left;">
                            <img alt="Vue logo" src="@/assets/logo.png" />
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="date">
                            {{ BJSeviceTime }}<br />
                            <el-button
                                v-if="kj_day == 'yes'"
                                @click="set_kj_day('no')"
                                type="primary"
                                >澳門</el-button
                            >
                            <el-button
                                v-if="kj_day == 'no'"
                                @click="set_kj_day('yes')"
                                type="primary"
                                >香港</el-button
                            >
                        </div>
                    </el-col>
                </el-row>
            </div>

            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                style="margin-bottom: 20px;"
            >
                <el-row>
                    <el-col :span="4">
                        <el-menu-item index="1" @click="$router.push('/home')">
                            首頁
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="2" @click="$router.push('/post')">
                            開獎公告
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="3" @click="$router.push('/live')">
                            開獎視頻
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="4" @click="$router.push('/faq')">
                            FAQ
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="5" @click="$router.push('/about')">
                            關於我們
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item
                            index="6"
                            @click="$router.push('/contact')"
                        >
                            聯繫我們
                        </el-menu-item>
                    </el-col>
                </el-row>
            </el-menu>

            <router-view />
            <footer>
                <span>版權所有 不得轉載 © 2020 澳門六合彩</span>
            </footer>
        </el-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "1",
            kj_day: "",
            BJSeviceTime: "",
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        is_kj_day() {
            let url = `${process.env.VUE_APP_BASE_DOMAIN}/api/is_kj_day`;
            this.axios.post(url).then((res) => {
                this.kj_day = res.data.is_kj_day;
                this.kj_day = this.kj_day == false ? "yes" : "no";
                // console.log("is_kj_day", this.kj_day);
                this.$store.commit("set_kj_day", this.kj_day);
            });
        },
        set_kj_day(e) {
            // console.log("set_kj_day", e);
            this.kj_day = e;
            this.$store.commit("set_kj_day", this.kj_day);
        },
        service_time() {
            let url = `${process.env.VUE_APP_BASE_DOMAIN}/api/ServerTime`;

            window.setInterval(() => {
                this.axios.post(url).then((res) => {
                    console.log("service_time", res.data.data.BJSeviceTime);
                    this.BJSeviceTime = res.data.data.BJSeviceTime;
                    this.BJSeviceTime = this.BJSeviceTime.substring(
                        0,
                        this.BJSeviceTime.length - 3
                    );
                });
            }, 30000);
        },
        current_time() {
            let url = `${process.env.VUE_APP_BASE_DOMAIN}/api/ServerTime`;
            this.axios.post(url).then((res) => {
                console.log("service_time", res.data.data.BJSeviceTime);
                this.BJSeviceTime = res.data.data.BJSeviceTime;
                this.BJSeviceTime = this.BJSeviceTime.substring(
                    0,
                    this.BJSeviceTime.length - 3
                );
            });
        },
    },
    created() {
        this.is_kj_day();
        this.service_time();
        this.current_time();
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    width: 100%;
    min-width: 1170px;
    height: 140px;
}

.date {
    float: right;
    line-height: 55px;
    font-size: 18px;
    color: #a4a4a4;
}

#nav {
    padding: 30px;
    border-bottom: 1px solid #dadada;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

footer {
    width: 100%;
    border-top: 5px solid #eee222;
    padding: 20px 0;
}

.el-menu-item.is-active {
    color: #409eff !important;
}
</style>
