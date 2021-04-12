import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255,255,0.6)',
    borderRadius: 15,
    marginHorizontal: 15,
  },
  sectionContainer: {flex: 1},
  text: {textAlign: 'center', fontSize: 20, fontWeight: 'bold'},
});
