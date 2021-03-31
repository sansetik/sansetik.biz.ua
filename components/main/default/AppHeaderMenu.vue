<template>
  <div class="pre-header">
    <div class="header">
      <div class="logo-and-menu">
        <div class="log">
          <nuxt-link to="/">
            sansetik
          </nuxt-link>
        </div>
        <div class="menu">
          menu
        </div>
      </div>
      <div class="login-and-search">
        <div class="search">
          search
        </div>
        <div class="login">
          login
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeaderMenu'
}
</script>

<style scoped>

.log{
  display: flex;
  align-items: center;
}
.log a{
  margin-top: 10px;
  font-family: 'Lexend Deca',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;
  text-decoration: none;
  color: #1B4678;
}
.log a:before{
  color: #1B4678;
}
.log a:visited{
  color: #1B4678;
}
.pre-header{
  width: 100%;
  height: 60px;
  background: #FAFBFF;
  box-shadow: 0 1px 1px rgba(0, 56, 254, 0.3);
}

.header{

  display: flex;
  justify-content: space-between;
  width: 1100px;
  margin: 0 auto;
}
.logo-and-menu{
  display: flex;
  justify-content: flex-start;
}
.login-and-search{
  display: flex;
  justify-content: flex-start;
}
</style>
