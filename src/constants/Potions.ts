import IPotion from '../interfaces/IPotion';

export const bluePotion: IPotion = {
  id: 1,
  name: 'red',
  color: '#d32f2f',
  image: require('../assets/red-potion.png'),
};

export const redPotion: IPotion = {
  id: 2,
  name: 'blue',
  color: '#1976d2',
  image: require('../assets/blue-potion.png'),
};
export const greenPotion: IPotion = {
  id: 3,
  name: 'green',
  color: '#388e3c',
  image: require('../assets/green-potion.png'),
};
export const yellowPotion: IPotion = {
  id: 4,
  name: 'yellow',
  color: '#fbc02d',
  image: require('../assets/yellow-potion.png'),
};

export const purplePotion: IPotion = {
  id: 5,
  name: 'purple',
  color: '#8e24aa',
  image: require('../assets/purple-potion.png'),
};

export default [bluePotion, redPotion, greenPotion, purplePotion, yellowPotion];
