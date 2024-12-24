<template>
  <div class="pages">
    <iframe
      style="overflow: hidden; width: 100%; height: 100vh"
      width="100%"
      height="1500"
      seamless
      frameborder="0"
      allowfullscreen
      src="https://report.vbexpress.com.vn/public/dashboards/Gi9s8UrtsU8UPt4TkrXy9rz581EB5wgDn86Np823?org_slug=default"
    >
    </iframe>
  </div>
</template>
<script>
export default {
  name: 'Statistics',
  data() {
    return {
      redashEmbedUrl: `${process.env.VUE_APP_REDASH}`
    };
  }
}
</script>
