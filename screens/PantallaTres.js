import React from 'react'
import { Dimensions,FlatList,StyleSheet, Text, View } from 'react-native'
import { Avatar, Icon ,Divider, Button, ListItem, withTheme} from 'react-native-elements'
var { height , width} = Dimensions.get('window');

export default  class PantallaTres extends React.Component {
  
  static navigationOptions = 
  {
    headerTitle: 'Elija una opción',
    
  }

 

  keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftIcon={{ name: item.icon }}
    onPress={() => this.props.navigation.navigate('ParteDiario')}
    bottomDivider
    chevron
  />
)
  render(){
    const  list = [
      {
        name: 'Parte Diario',
        subtitle: 'Ver',
        icon: 'list'
      },
      {
        name: 'Resultados Slots',
        subtitle: 'Ver',
        icon: 'search'
      },
      {
        name: 'Resultados Mesas',
        subtitle: 'Ver',
        icon: 'search'
      },
      
      
    ];

    return (
        <View style={styles.container}>
            <View style = {styles.cabecera}>
               <View style= {{width: width/4.5, height: height/7, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 13,color:'black'}}>Formosa</Text>
                    <Text style = {{color: 'grey'}}>Operación</Text>
               </View>
               
               <Button
                   title="Cambiar Operación"
                   raised
                   onPress={() => this.props.navigation.navigate('Auth')}
                    buttonStyle= {{width: width/5, height : height/15}}
                    titleStyle = {{fontSize:11}}
               />

               <View style= {{width: width/3.5, height: height/7, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 13,color:'black'}}>25 de mayo</Text>
                    <Text style = {{color: 'grey'}}>Sala</Text>
               </View>
               <Button
                   title="Cambiar Sala"
                   raised
                   onPress={() => this.props.navigation.navigate('Auth')}
                    buttonStyle= {{width: width/5, height : height/15}}
                    titleStyle = {{fontSize:11}}
               />
              
               
          </View>
          <Divider style={{ backgroundColor: 'lightgrey', height: height/25 }} />
          <View style = {styles.listaOperaciones}>
              <FlatList
                  keyExtractor={this.keyExtractor}
                  data={list}
                  renderItem={this.renderItem}
              />
          </View>
        </View>
      )
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  listaOperaciones : {
    width: width
  },
  cabecera : {
    width: width,
    height: height/7,
    backgroundColor : 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width/25
  }
});