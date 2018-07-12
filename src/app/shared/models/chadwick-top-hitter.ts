interface IChadwickTopHitter {
  atBats: number;
  battingAverage: number;
  hits: number;
  homeRuns: number;
  name: string;
  playerID: string;
}

export class ChadwickTopHitter implements IChadwickTopHitter {
  public atBats: number;
  public battingAverage: number;
  public hits: number;
  public homeRuns: number;
  public name: string;
  public playerID: string;
  constructor(_atBats?: number, _battingAverage?: number, _hits?: number, _homeRuns?: number, _name?: string, _playerID?: string) {
    this.atBats = _atBats;
    this.battingAverage = _battingAverage;
    this.hits = _hits;
    this.homeRuns = _homeRuns;
    this.name = _name;
    this.playerID = _playerID;
  }
}
