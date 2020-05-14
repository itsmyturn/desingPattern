class Factory{
  createButton(){//创建按钮

  }
  createIcon(){//创建图标

  }
}
class Icon{}
class WindowsIcon{
  render(){
    console.log('绘制windows图标')
  }
}
class AppleIcon{
  render(){
    console.log('绘制苹果图标')
  }
}

class Button{}
class WindowsButton{
  render(){
    console.log('绘制windows按钮')
  }
}
class AppleButton{
  render(){
    console.log('绘制苹果按钮')
  }
}

class AppleFactory extends Factory{
  createButton(){
    return new AppleButton()
  }
  createIcon(){
    return new AppleIcon()
  }
}
class WindowsFactory extends Factory{
  createButton(){
    return new WindowsButton()
  }
  createIcon(){
    return new WindowsIcon()
  }
}
let windowsFactory=new WindowsFactory()
windowsFactory.createButton().render()
windowsFactory.createIcon().render()