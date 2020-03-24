import React from 'react'
import { Alert, Dimensions,FlatList,StyleSheet, Text, View } from 'react-native'
import { Divider, Button, ListItem} from 'react-native-elements'
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
    leftIcon={{ name: item.icon }}
    onPress={() => this.props.navigation.navigate(item.funcion, {data: item.sala})}
    bottomDivider
    chevron
  />
)
  render(){
    const {filtro} = this.props.navigation.state.params.data;
    let list = [];
   
    const nombres_funciones = ["Parte Diario", "Resultados Slots", "Resultados Mesas"];
    const nombre_funciones_filtro = ["partediario", "slots","mesas"];

    for (let i=0; i<filtro.funciones.length ; i++)
    { 
      if( (filtro.mesas && filtro.funciones[i] == 'mesas' ) || (filtro.funciones[i]!='mesas'))
      {
        
        objeto = {
          name: nombres_funciones[nombre_funciones_filtro.indexOf(filtro.funciones[i])],
          icon: 'list',
          funcion: filtro.funciones[i],
          sala: {idSala: filtro.sala, nombreSala: filtro.nombre, nombreOperacion: filtro.operacion}
  
        }
        
        list.push(objeto);
      }
       
      }
     
      if (list.lenght == 0){
        Alert.alert
        (
        '¡Ocurrió un problema!',
        'No hay funciones registradas por el momento para este usuario',
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
            <View style = {styles.cabecera}>
               <View style= {{width: width/4.5, height: height/7, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {{fontSize: 13,color:'black'}}>{filtro.operacion}</Text>
                    <Text style = {{color: 'grey'}}>Operación </Text>
               </View>
               
               <Button
                   title="Cambiar Operación"
                   raised
                   onPress={() => this.props.navigation.navigate('Operaciones')}
                    buttonStyle= {{width: width/5, height : height/15}}
                    titleStyle = {{fontSize:11}}
               />

               <View style= {{width: width/3.5, height: height/7, alignItems: 'center', justifyContent: 'center'}}>
               <Text style = {{fontSize: 13,color:'black'}}>{filtro.nombre}</Text>
                    <Text style = {{color: 'grey'}}>  Sala    </Text>
               </View>
               <Button
                   title="Cambiar Sala"
                   raised
                   onPress={() => this.props.navigation.navigate('Salas')}
                    buttonStyle= {{width: width/5, height : height/15}}
                    titleStyle = {{fontSize:11}}
               />
              
               
          </View>
          
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
    paddingLeft: width/25,
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