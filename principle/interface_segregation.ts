interface Runing{
  run():void
}
interface Flying{
  fly():void
}
interface Swimming{
  swim():void
}
class Automobile implements Runing,Flying,Swimming{
  run(){}
  fly(){}
  swim(){}
}