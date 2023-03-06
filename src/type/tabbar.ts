export interface TabbarList{
  title:string,
  path:string,
  actitive:string,
  selected:string
}

export class InitData{
  // 数据后期应该由后端传入，一开始还没有写后端，因此直接在此处写死
  selectData:TabbarList[] = [
    {
      title:'首页',
      path:'/home',
      actitive:'./images/home.png',
      selected:'./images/home-select.png'
    },
    {
      title:'分类',
      path:'/list',
      actitive:'./images/list.png',
      selected:'./images/list-select.png'
    },
    {
      title:'购物车',
      path:'/cart',
      actitive:'./images/cart.png',
      selected:'./images/cart-select.png'
    },
    {
      title:'我的',
      path:'/my',
      actitive:'./images/my.png',
      selected:'./images/my-select.png'
    }
  ]
}
