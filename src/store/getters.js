const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  typeList: state => state.app.typeList,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name || localStorage.getItem('name'),
  userInfo: state => state.user.userInfo || (localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null),
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  uniacid: state => state.user.uniacid,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
}
export default getters
