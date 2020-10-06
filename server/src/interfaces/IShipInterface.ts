export interface IShip {
  active: boolean;
  name: string;
}

export interface IMission {
  mission_name: string;
  ships: Array<IShip>;
}
