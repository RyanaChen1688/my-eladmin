export default {
  namespaced: true,
  state: {
    isCollapsed: false, //菜单未折叠
    isSearched:false, // 是否展示搜索框
    openMenuTags: ["首页"],
    openMenu: {name: "首页"}
  },
  mutations: {
    setCollapse(state, value) {
      state.isCollapsed = value
    },
    setIsSearch(state, value) {
      state.isSearched = value
    },
    addOpenMenuTag(state, value) {
      console.log(state, value)
    },
    removeOpenMenuTag(state, value) {
      console.log(state, value)
    },
    setOpenMenu(state, value) {
      state.openMenu = value
    }
  }
}