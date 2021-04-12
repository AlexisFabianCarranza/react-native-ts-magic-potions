import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flex: 1,
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#212121',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 15,
  },
});
