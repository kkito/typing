export class FallenItem {
  protected ele: HTMLElement;
  protected top = 0;
  protected speed: number;
  protected leftPostion: number;
  protected text: string;

  constructor(text: string, speed: number, leftPostion: number) {
    this.ele = document.createElement('div');
    this.ele.className = 'fallen-item';
    this.text = text;
    this.ele.innerText = text;
    this.speed = speed;
    this.leftPostion = leftPostion;
    this.ele.style.left = this.leftPostion + 'px';
  }

  public getElement(): HTMLElement {
    return this.ele;
  }

  public start() {
    this.update();
  }

  public fallen(top?: number) {
    const topValue = top ? top : this.top;
    this.ele.style.top = topValue + 'px';
  }

  public isFallen(stageHeight: number): boolean {
    return this.top >= stageHeight;
  }

  public sameContent(content: string) {
    return this.text === content;
  }

  public update() {
    this.top += this.speed;
    this.fallen(this.top);
    // console.log(this.ele.style.top);
    // setTimeout(()=> {
    //   this.updatePosition();
    // } , 20);
  }
}
