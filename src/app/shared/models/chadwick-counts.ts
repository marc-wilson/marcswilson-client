interface IChadwickCounts {
  attendance: number;
  ballparks: number;
  people: number;
  teams: number;
}

export class ChadwickCounts implements IChadwickCounts {
  public attendance: number;
  public ballparks: number;
  public people: number;
  public teams: number;

  constructor(_counts?) {
    if (_counts) {
      this.attendance = _counts.attendance;
      this.ballparks = _counts.ballparks;
      this.people = _counts.people;
      this.teams = _counts.teams;
    }
  }
}
