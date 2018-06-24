export interface IScore {
  isStarted(): boolean;
  allTimeCost(): number;
  allAlphabetTyped(): number;
  allWordTyped(): number;
}
export class Score implements IScore {
  protected timeCost: number = 0; // in millseconds
  protected countAlphabet: number = 0; // count number of alphabet
  protected countWords: number = 0; // count number of alphabet

  protected lastStartDate?: Date;

  public start() {
    if (!this.lastStartDate) {
      this.lastStartDate = new Date();
    }
  }

  public stop() {
    this.pause();
  }

  public pause() {
    if (this.isStarted()) {
      const costThisTime = this.currentRoundTimeCost();
      this.timeCost += costThisTime;
      this.lastStartDate = undefined;
    }
  }

  public increaseAlphabet() {
    this.countAlphabet += 1;
  }

  public increaseWord() {
    this.increaseAlphabet();
  }

  /**
   * current is time cosuming
   */
  public isStarted(): boolean {
    return !!this.lastStartDate;
  }

  public allTimeCost(): number {
    return this.timeCost + this.currentRoundTimeCost();
  }
  public allAlphabetTyped(): number {
    return this.countAlphabet;
  }
  public allWordTyped(): number {
    return this.countWords;
  }

  protected currentRoundTimeCost(): number {
    if (this.lastStartDate) {
      return new Date().getTime() - this.lastStartDate.getTime();
    } else {
      return 0;
    }
  }
}
