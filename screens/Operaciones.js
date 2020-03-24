import React from 'react'
import { Alert, Dimensions,ScrollView,FlatList,StyleSheet, Text, View } from 'react-native'
import { Avatar ,Divider, Button, ListItem} from 'react-native-elements'
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
    leftIcon={{ name: item.icon, color: 'red' }}
    onPress={() => this.props.navigation.navigate('Salas',{data: {filtro: item.filtro}})}
    
    bottomDivider
    chevron
  />
)  

render(){
    
    const {filtro} = this.props.navigation.state.params.data;
    const {avatar} = this.props.navigation.state.params.data;
    
    let list = [];
    let objeto= {};
    
    for (let i=0; i<filtro.length ; i++)
    {
      if( Object.keys(filtro[i].salas).includes('lista') )
      {
        objeto =  {
        name: filtro[i].nombre,
        icon: 'location-on',
        filtro: filtro[i]
        }
      list.push(objeto);
      }
    }

    if (list.lenght == 0){
      Alert.alert
      (
      '¡Ocurrió un problema!',
      'No hay operaciones registradas por el momento para este usuario',
      [
        {
          text: 'Ir a Inicio', onPress: () => this.props.navigation.navigate('Operaciones'),
        },
        {text: 'OK', onPress: () => this.recarga() },
      ],
      {cancelable: false},
      )
    } 
  

    return (
        <View style={styles.container}>  
        <ScrollView nestedScrollEnabled>    
          <View style = {styles.cabecera}>
               
          <Avatar rounded title={avatar.nombre[0].toUpperCase()+''+avatar.apellido[0].toUpperCase()}  size="medium"  />
               
          <View style= {{width: width/2, height: height/7, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white'}}>
                    
          </View>
               
          <Button
            title="Cerrar Sesión"
            raised
            onPress={() => this.props.navigation.navigate('Auth')}
            buttonStyle= {{width: width/4, height : height/15}}
            titleStyle = {{fontSize:12}}
          />
               
          </View>
         
          <View style = {styles.listaOperaciones}>
              <FlatList
                  keyExtractor={this.keyExtractor}
                  data={list}
                  renderItem={this.renderItem}
              />
          </View>
          </ScrollView>   
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
    paddingLeft: width/22,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});