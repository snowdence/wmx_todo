<template>
  <div id="app">
    <div class="app-container">
      <el-row>
        <el-col class="navbar__menu-box">
          <ul class="el-menu el-menu--horizontal navbar__menu">
            <router-link class="el-menu-item" to="/">HOME</router-link>

            <router-link class="el-menu-item" to="/about">About</router-link>
            <router-link class="el-menu-item" to="/login">Login</router-link>
            <router-link class="el-menu-item" to="/register">Register</router-link>
            <router-link class="el-menu-item" to="/logout">Logout</router-link>
          </ul>
          <p class="navbar__title">
            <a href="/">Vue WmXTodos</a>
          </p>
        </el-col>
      </el-row>
      <div class="app-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-content {
  padding: 10px;
}
.app-container {
  margin-left: 20%;
  margin-right: 20%;
}
.navbar__menu-box {
  background-color: #f5f5f5;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.navbar__menu {
  float: right;
  background-color: #f5f5f5 !important;
}

.navbar__title {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 12px;
  height: 60px;
  line-height: 60px;
  font-size: 1.5em;
  font-weight: bold;
}
.navbar__title a {
  color: #4d4d4d;
  text-decoration: none;
}
</style>
