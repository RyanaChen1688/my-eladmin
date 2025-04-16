<template>
  <div class="loginContainer">
    <el-form :model="loginForm" :rules="rules" ref="loginForm">
      <h3>ELADMIN 后台管理系统</h3>
      <el-form-item prop="username">
        <el-input placeholder="请输入用户名" v-model="loginForm.username">
          <template #prefix>
            <svg-icon icon-class="user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="userPassword">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.userPassword"
        >
          <template #prefix>
            <svg-icon icon-class="password" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="validCode">
        <div class="validCodeCon">
          <el-input
            placeholder="验证码"
            style="width: 63%"
            v-model="loginForm.validCode"
          >
            <template #prefix>
              <svg-icon icon-class="validCode" />
            </template>
          </el-input>
          <img
            :src="loginForm.validCodeUrl"
            alt="验证码"
            @click="getValidCode"
          />
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe">记住我</el-checkbox>
      <el-form-item>
        <el-button
          type="primary"
          size="medium"
          style="width: 100%"
          @click="login('loginForm')"
        >
          登 录
        </el-button>
      </el-form-item>
    </el-form>
    <el-footer>© 2025-2026 CHJ Apache License 2.0</el-footer>
  </div>
</template>
<script>
import JSEncrypt from "jsencrypt";
import Cookies from "js-cookie";
import request from "@/utils/request";

export default {
  name: "MyLogin",
  data() {
    return {
      loginForm: {
        username: "",
        userPassword: "",
        validCode: "",
        validCodeUrlUuid: "",
        validCodeUrl: "",
        rememberMe: false,
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空！", trigger: "blur" },
        ],
        userPassword: [
          { required: true, message: "密码不能为空！", trigger: "blur" },
        ],
        validCode: [
          { required: true, message: "验证码不能为空！", trigger: "blur" },
        ],
      },
      cookiePass: "",
    };
  },
  methods: {
    async validCodeApi() {
      try {
        const res = await request.get("/api/auth/code");
        this.loginForm.validCodeUrlUuid = res.uuid;
        this.loginForm.validCodeUrl = res.img;
      } catch (err) {
        console.error(err);
      }
    },
    async loginAuthorization() {
      const publicKey = `
-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD
2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ==
-----END PUBLIC KEY-----
`;
      // 创建加密器实例
      const encryptor = new JSEncrypt();
      encryptor.setPublicKey(publicKey);
      let encrypted = this.loginForm.userPassword;

      // 加密密码
      if (encrypted !== this.cookiePass) {
        encrypted = encryptor.encrypt(encrypted);
      }

      const loginObj = {
        code: this.loginForm.validCode,
        password: encrypted,
        username: this.loginForm.username,
        uuid: this.loginForm.validCodeUrlUuid,
      };
      try {
        const res = await request.post("/api/auth/login", loginObj);
        const token = res.token;
        this.$store.commit("setToken", token);
        // console.log("@@@", this.$store.state);
        if (this.loginForm.rememberMe) {
          Cookies.set("username", this.loginForm.username, { expires: 7 });
          Cookies.set("password", encrypted, {
            expires: 7,
          });
          Cookies.set("token", token, {
            expires: 7,
          });
        } else {
          Cookies.remove("username");
          Cookies.remove("password");
          Cookies.remove("token");
        }

        // 登录成功后，根据 query 参数跳转到目标页面或默认页面
        this.$router.push(this.$route.query.redirect || "/");
      } catch (err) {
        console.error(err);
      }
    },
    getValidCode() {
      this.validCodeApi();
    },
    login(loginForm) {
      // console.log(this.$refs);
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          console.log("submit!");
          this.loginAuthorization();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  created() {
    this.validCodeApi();
    const savedUsername = Cookies.get("username");
    const savedPassword = Cookies.get("password");
    if (savedUsername && savedPassword) {
      this.loginForm.username = savedUsername;
      this.loginForm.userPassword = savedPassword;
      this.loginForm.rememberMe = true;
      this.cookiePass = savedPassword;
    }
  },
};
</script>
<style scoped>
.loginContainer {
  background-image: url("../assets/loginbackground.jpeg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form {
  width: 385px;
  padding: 25px 25px 5px 25px;
  border-radius: 6px;
  background: #fff;
  box-sizing: border-box;
}
h3 {
  text-align: center;
  margin: 0 auto 30px auto;
  color: #707070 !important;
}

.el-form-item {
  margin-bottom: 18px;
}
/* 没生效 */
:deep(.el-form-item__content) {
  line-height: 32px !important;
  font-size: 13px !important;
  letter-spacing: 1px !important;
}
.el-form .el-input {
  height: 38px;
  line-height: 32px !important;
}

.el-input__prefix .svg-icon {
  height: 39px;
  width: 14px;
  margin-left: 2px;
  fill: currentColor;
}
.validCodeCon {
  display: flex;
  justify-content: space-between;
}
.validCodeCon img {
  cursor: pointer;
}
.el-checkbox {
  margin: 0 0 25px;
}
.el-footer {
  font-size: 12px;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px !important;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1px;
}
</style>