export interface IconsList{
  id:number,
  imgUrl:string,
  title:string
}

export class InitData{
  selectData:IconsList[] = [
    {
      id:1,
      imgUrl:'./images/icons1.png',
      title:'自饮茶'
    },
    {
      id:2,
      imgUrl:'./images/icons2.png',
      title:'茶具'
    },
    {
      id:3,
      imgUrl:'./images/icons3.png',
      title:'茶礼盒'
    },
    {
      id:4,
      imgUrl:'./images/icons4.png',
      title:'领福利'
    },
    {
      id:5,
      imgUrl:'./images/icons5.png',
      title:'官方验证'
    },
  ]
}
