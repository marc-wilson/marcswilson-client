export class ChadwickCounts {
  public people: number;
  public teams: number;
  public ballparks: number;
  public attendance: number;
  constructor(_counts?) {
    if (_counts) {
      this.people = _counts.people;
      this.teams = _counts.teams;
      this.ballparks = _counts.ballparks;
      this.attendance = _counts.attendance;
    }
  }
}
