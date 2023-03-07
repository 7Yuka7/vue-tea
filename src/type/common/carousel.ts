//轮播图数据类型
export interface CarouselList{
  id:number,
  imgUrl:string
}

export class InitData{
  selectData:CarouselList[] = [
    {
      id:1,
      imgUrl:'./images/swiper1.jpeg'
    },
    {
      id:2,
      imgUrl:'./images/swiper2.jpeg'
    },
    {
      id:3,
      imgUrl:'./images/swiper3.jpeg'
    },
  ]
}
