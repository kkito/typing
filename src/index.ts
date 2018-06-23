import { AlphabetStage } from './alphabet-stage';

// tslint:disable-next-line:only-arrow-functions
(function (currentWindow: Window) {
  // execute when load index.js

  // tslint:disable-next-line:no-console
  console.log('hello world');

  // assign Greeter to global
  const myWindow = currentWindow as any;
  const ele = document.getElementById('app_game');
  if (ele) {
    const stage = new AlphabetStage(ele);
    stage.appendFallenItem();
    stage.appendFallenItem();
    stage.appendFallenItem();
    stage.appendFallenItem();
    stage.start();
    myWindow.mystage= stage;
    myWindow.onkeypress = ((event:any) => {
        // tslint:disable-next-line:no-console
        console.log(event.keyCode);
        stage.pressKeyCode(event.keyCode);
        event.stopPropagation();
        return false;
    })

  }
  // we can use Greeter , execute following in console
  // var greet = new Greeter('myName');
  // greet.greet();
})(window);
