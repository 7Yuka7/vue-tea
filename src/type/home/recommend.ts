export interface RecommendList{
  id:number,
  name:string,
  content:string,
  price:number,
  imgUrl:string
}

export class InitData{
  selectData:RecommendList[] = [
    {
      id:1,
      name:'龙井一号铁罐250g',
      content:'鲜爽甘醇 口粮首选',
      price:58,
      imgUrl:'./images/recommend.jpeg'
    },
    {
      id:2,
      name:'龙井一号铁罐250g',
      content:'鲜爽甘醇 口粮首选',
      price:58,
      imgUrl:'./images/recommend.jpeg'
    }
  ]
}
