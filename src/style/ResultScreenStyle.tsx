import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.7,
  },
  defaultContainer: {flex: 1},
  potionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imageContainer: {flex: 1, padding: 20},
  image: {height: 190, width: 150},
  potionImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  descriptionText: {fontSize: 23},
  subtitleText: {fontSize: 26},
  attackContainer: {paddingVertical: 20},
});
