import React from 'react';


import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import RTDiarios from './RTDiarios'
import RTMensuales from './RTMensuales'


export default createMaterialTopTabNavigator(
    
  {
    RTDiarios: RTDiarios,
    RTMensuales: RTMensuales,
  },
  {
    tabBarOptions: 
    {
      labelStyle : 
      {
        fontSize : 10
      },
      activeTintColor: '#098bfa',
      inactiveTintColor: 'grey',
      style: 
      {
        backgroundColor: 'white',
        
      
      },
      indicatorStyle: 
      {
        backgroundColor: '#098bfa',
      }
      
    },
    navigationOptions: {
      headerTitle: "Resultados Totales",      
    },

  }
);