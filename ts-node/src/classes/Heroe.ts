import powers from './powers';

export class Heroe {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
  ) {}

  get power(): string {
    return powers.find(power => power.id === this.powerId).desc || 'not found';
  }
}
