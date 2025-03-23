export default class Id {
  static gerar():string {
    const randomNumber = () => Math.random().toString(36).substring(2, 9);
    const p1 = randomNumber();
    const p2 = randomNumber();
    const p3 = randomNumber();
    return `${p1}-${p2}-${p3}`;
  }
}