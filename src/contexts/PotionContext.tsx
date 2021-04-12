import * as React from 'react';
import IPotion from '../interfaces/IPotion';
import {useState} from 'react';
import IPotionContext from '../interfaces/IPotionContext';
import {
  bluePotion,
  greenPotion,
  purplePotion,
  redPotion,
  yellowPotion,
} from '../constants/Potions';

const contextDefaultValues: IPotionContext = {
  potions: [],
  addPotion: () => {},
};

const defaultPotions: IPotion[] = [
  redPotion,
  yellowPotion,
  greenPotion,
  purplePotion,
  bluePotion,
];

export const PotionContext = React.createContext<IPotionContext>(
  contextDefaultValues,
);

const PotionProvider: React.FC = ({children}) => {
  const [potions, setPotions] = useState<IPotion[]>(defaultPotions);

  const addPotion = (potion: IPotion) => {
    setPotions(prevState => [...prevState, potion]);
  };

  return (
    <PotionContext.Provider value={{potions, addPotion}}>
      {children}
    </PotionContext.Provider>
  );
};

export default PotionProvider;
