import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 15,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flex: 0.5,
  },
  imageContainer: {flex: 1, alignItems: 'center', paddingVertical: 10},
  sectionContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 7,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255,255,0.6)',
    borderRadius: 15,
    marginHorizontal: 15,
  },
  buttonContainer: {flex: 1},
  text: {textAlign: 'center', fontSize: 20},
  image: {flex: 1, height: 80, width: 50, resizeMode: 'contain'},
});
