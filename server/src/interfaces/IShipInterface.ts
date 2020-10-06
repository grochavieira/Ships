export interface IMission {
  name: string;
}

export interface IShip {
  active: boolean;
  missions: Array<IMission>;
}
