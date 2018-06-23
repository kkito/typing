import { FallenItem } from './fallen-item';
export class AlphabetStage {
  protected stageEle: HTMLElement;
  protected fallenItems: FallenItem[] = [];
  constructor(stageDiv: HTMLElement) {
    this.stageEle = stageDiv;
  }

  public appendFallenItem(): FallenItem {
    const item = new FallenItem(this.getNextAlpha() , this.getSpeed() , this.getFallenItemLeft());
    this.stageEle.appendChild(item.getElement());
    this.fallenItems.push(item);
    return item;
  }

  public getSpeed():number {
    return 1;
  }

  public getFallenItemLeft():number {
    return Math.floor(Math.random() * this.stageEle.offsetWidth);
  }

  public getHeight(){
    return this.stageEle.offsetHeight;
  }

  public start(){
    this.update();
    setInterval(()=> {
      this.appendFallenItem();
    } , 5000);
  }

  public update(){
    this.fallenItems.forEach((item)=> {
      if (item.isFallen(this.getHeight())) {
        this.removeItem(item);
      } else {
        item.update();
      }
    })
    setTimeout(()=> {
      this.update()
    } , 24);
  }

  public pressKeyCode(keyCode:number) {
    const str = String.fromCharCode(keyCode);
    const compare = str.toLowerCase();
    this.fallenItems.forEach((item) => {
      if(item.sameContent(compare)) {
        this.removeItem(item);
      }
    })
  }

  protected removeItem(item:FallenItem) {
    const idx = this.fallenItems.indexOf(item);
    this.fallenItems.splice(idx , 1);
    this.stageEle.removeChild(item.getElement());
  }

  protected getNextAlpha():string{
    // 97-122
    const offset = Math.floor(Math.random() * 100) % 25;
    return String.fromCharCode(96 + offset);
  }

}
