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
                            2021-07-23 15:05 星期五
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
                        <el-menu-item index="1" @click="$router.push('/')">
                            首頁
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="2" @click="$router.push('/about')">
                            開獎公告
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="3" @click="$router.push('/about')">
                            開獎視頻
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="4" @click="$router.push('/about')">
                            FAQ
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="5" @click="$router.push('/about')">
                            關於我們
                        </el-menu-item>
                    </el-col>
                    <el-col :span="4">
                        <el-menu-item index="6" @click="$router.push('/about')">
                            聯繫我們
                        </el-menu-item>
                    </el-col>
                </el-row>
            </el-menu>

            <router-view />
        </el-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1",
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    min-width: 1170px;
    height: 140px;
}

.date {
    float: right;
    line-height: 110px;
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
</style>
