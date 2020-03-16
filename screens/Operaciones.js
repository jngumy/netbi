import React from 'react'
import { Dimensions,FlatList,StyleSheet, Text, View } from 'react-native'
import { Avatar, Icon ,Divider, Button, ListItem, withTheme} from 'react-native-elements'
var { height , width} = Dimensions.get('window');

export default  class Operaciones extends React.Component {
  

  static navigationOptions = 
  {
    headerTitle: 'Inicio',
    
  };

  
  
  keyExtractor = (item, index) => index.toString()

   renderItem = ({ item }) => (
    <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftIcon={{ name: item.icon }}
    onPress={() => this.props.navigation.navigate('Salas',{data: {filtro: item.filtro}})}
    
    bottomDivider
    chevron
  />
)

render(){
    
    const {filtro} = this.props.navigation.state.params.data;
    const {usuario} = this.props.navigation.state.params.data;
    
    let list = [];
    
    for (let i=0; i<filtro.length ; i++)
    {
      objeto = 
      {
        name: filtro[i].nombre,
        subtitle: 'Operación',
        icon: 'add-location',
        filtro: filtro[i]
      }
      list.push(objeto);
    }

    return (
        <View style={styles.container}>         
          <View style = {styles.cabecera}>
               <Avatar rounded title={usuario[0]}  size="medium"  />
               <View style= {{width: width/4.5, height: height/7, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white'}}>
                    <Text style = {{fontSize: 13,color:'black'}}>Usuario</Text>
                    <Text style = {{color: 'grey'}}>{usuario}</Text>
               </View>
               <View style= {{width: width/3.5, height: height/7, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white'}}>
                    
               </View>

               <Button
                   title="Cerrar Sesión"
                   raised
                   onPress={() => this.props.navigation.navigate('Auth')}
                    buttonStyle= {{width: width/4, height : height/15}}
                    titleStyle = {{fontSize:12}}
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
    paddingLeft: width/22
  }
});