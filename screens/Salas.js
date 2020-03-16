import React from 'react'
import { Dimensions,FlatList,StyleSheet, Text, View } from 'react-native'
import { Avatar, Icon ,Divider, Button, ListItem, withTheme} from 'react-native-elements'
var { height , width} = Dimensions.get('window');

export default  class Salas extends React.Component {
  
  static navigationOptions = 
  {
    headerTitle: 'Salas',
    
  }

 
  keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftIcon={{ name: item.icon }}
    onPress={() => this.props.navigation.navigate('PantallaTres')}
    
    bottomDivider
    chevron
  />
)
  render(){
    const {filtro} = this.props.navigation.state.params.data;
    let list = [];
    
    for (let i=0; i<filtro.salas.length ; i++)
    {
      objeto = 
      {
        name: filtro.salas[i].nombre,
        subtitle: 'Sala',
        icon: 'casino',
       // pantallaTres: {data: {salas: filtro[i].funciones}},
      }
      list.push(objeto);
    }

    return (
        <View style={styles.container}>
            <View style = {styles.cabecera}>
               <View style= {{width: width/4.5, height: height/7, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white'}}>
                    <Text style = {{fontSize: 13,color:'black'}}>{filtro.nombre}</Text>
                    <Text style = {{color: 'grey', fontSize: 13}}>Operación</Text>
               </View>
               
               <View style= {{width: width/10, height: height/7, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white'}}></View>
               <Button
                   title="Cambiar Operación"
                   raised
                   onPress={() => this.props.navigation.navigate('Operaciones')}
                    buttonStyle= {{width: width/4, height : height/15}}
                    titleStyle = {{fontSize:12}}
               />
               <View style= {{width: width/13, height: height/7, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white'}}></View>
                    
               <Button
                   title="Resultados Totales"
                   raised
                   onPress={() => this.props.navigation.navigate('Auth')}
                    buttonStyle= {{width: width/4, backgroundColor: 'green', height : height/15}}
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