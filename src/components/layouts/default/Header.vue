<template>
  <nav class="site-navbar" role="navigation">
    <div class="navbar__header">
      <div class="navbar__header-content">
        <div class="navbar__header-icon">
          <div
            @click="toggleIcon"
            :class="{ 'active-ep': isExpand }"
            class="hamburger-lines"
          >
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
        </div>
        <div class="navbar__header-title">{{ handleTitle }}</div>
      </div>
      <div class="navbar__header-right d-flex align-items-center">
        <div class="navbar__header-user d-flex">
          <div class="navbar__header-name" @click="toggleMenuUser">
            <span class="mr-2"
              >Xin chào, <b>{{ user.full_name }}</b></span
            >
            <p-svg name="dropdown"></p-svg>
          </div>
          <div
            class="dropdown-menu"
            :class="{ active: showUserMenu }"
            v-click-outside="hideMenuUser"
          >
            <div class="dropdown-content">
              <div class="dropdown-item">
                <span class="navbar__header-icon">
                  <p-svg name="user"></p-svg>
                </span>
                <a
                  href="/profile"
                  aria-current="page"
                  class="nav-item nav-item active router-link-active"
                  >Thông tin tài khoản</a
                >
              </div>
              <div class="dropdown-item">
                <span class="navbar__header-icon">
                  <p-svg name="logout"></p-svg>
                </span>
                <a href="/logout" class="nav-item">Đăng xuất</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import mixinDownload from '@/packages/shared/mixins/download'
import { numFormatter } from '@core/utils/formatter'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {},
  name: 'Header',
  mixins: [mixinDownload],
  props: {
    user: {
      type: Object,
      default: () => {},
    },
    isSidebarOpen: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    
  },
  created() {},
  computed: {
    convertNumber() {
      return numFormatter(this.count)
    },
    handleTitle() {
      return this.$route.meta.title || ''
    },
  },
  data() {
    return {
      showUserMenu: false,
      filter: {
        limit: 7,
        page: 1,
        count: {
          unread: 1,
        },
      },
      isExpand: false,
    }
  },
  methods: {
    toggleMenuUser() {
      this.showUserMenu = !this.showUserMenu
    },
    hideMenuUser() {
      this.showUserMenu = false
    },
    toggleIcon() {
      this.isExpand = !this.isExpand
      this.$emit('toggleShowSidebar')
    },
  },
}
</script>
<style lang="scss">
.site-navbar .navbar__header-user {
  .navbar__header-name {
    cursor: pointer;

    span {
      font-weight: normal;
    }
  }

  .dropdown-menu {
    right: 0;
    left: unset;
    top: 57px;
    background: #ffffff;
    box-shadow: 0px 0px 2px rgb(40 41 61 / 4%), 0px 4px 8px rgb(96 97 112 / 16%);
    border-radius: 4;
    border: none;

    &.active {
      display: block;
    }

    .dropdown-item {
      padding: 10px 14px;
      display: flex;
      align-items: center;
    }

    a {
      color: #111212;
      padding: 0 13px;
      font-size: 14px;
      width: 100%;
    }
  }
}
</style>
