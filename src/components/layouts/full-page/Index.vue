<template>
  <div
    class="animsition layout-full"
    :class="$route.meta && $route.meta.class ? $route.meta.class : ''"
  >
    <div class="app container-fluid">
      <div class="row">
        <div class="content ">
          <div class="form">
            <router-view :key="$route.fullPath" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FullPage',
  data() {
    return {
      urlSingup: 'https://vbexpress.com.vn/general/registration/ ',
      urlSingin: 'https://vbexpress.com.vn/general/sign-in/',
      urlPass: 'https://vbexpress.com.vn/general/password-recovery/',
    }
  },
  computed: {},
}
</script>
