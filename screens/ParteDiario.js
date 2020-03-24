import React from 'react'
import {Alert, ActivityIndicator,Dimensions, ScrollView,StyleSheet, Text, View } from 'react-native'
import { Icon ,Divider, Button} from 'react-native-elements'
import Accordian from '../components/Accordian';
import myFunctionArray from './myFunctionArray';
import DateTimePicker from '@react-native-community/datetimepicker';
const host = 'netbi.netgen.com.ar';
var { height , width} = Dimensions.get('window');

let color = ["white", "#EDEBEB"];

 const functions_names = [
         "Personal",
         "Máquinas Fuera de Servicio",
         "Pagos Manuales",
         "Mantenimiento",
         "Marketing",
         "Mesas",
         "Slots",
         "Ruleta Electrónica",
         "Sistemas",
         "Observaciones generales"
];

export default  class partediario extends React.Component {
  
  static navigationOptions = 
  {
    headerTitle: 'Parte Diario',
    
  }

  
  constructor(params){
    var x = new Date().setSeconds(-(3*60*60));
     
    super(params);
     this.state = {
          show : false,
          mode: null,
          date: new Date(x),

         responseJson : null,
     };
  }
  
  formatoFecha(fecha)
  {
    let aux = fecha.split('-');
    return aux[2]+ '-'+ aux[1]+'-'+aux[0];
  }

  setDate = (event, date) => 
  {
    var x = date.setSeconds(-(3*60*60));
    date = new Date(x) || this.state.date;

    this.setState({
      show: false,
      date,
      responseJson : null
    });
    
    console.log(this.state.date);
    this.recarga();

  }

  show = mode => 
  {
    this.setState({
      show: true,
      mode,
    });
  }

  showDatepicker = () => 
  {
    this.show('date');
  }

  procesaParteDiario(responseJson){
    var componentes = []; 
     Object.keys(responseJson).forEach(function(prop) {

     
      // `prop` is the property name
      // `responseJson[prop]` is the property value
      if(prop != 'fecha-operativa' && prop!= 'idsala'){
         //console.log(prop);
         if(responseJson[prop] != null)
         {
            //console.log(prop);
            //console.log(functions_names.indexOf(prop));
            componentes.push(
               <Accordian title= {prop} data = { myFunctionArray[functions_names.indexOf(prop)](responseJson[prop])}/>
            ); 
         }
      }
    });

    if(componentes.length == 0)
        componentes.push(<View style = {styles.cabecera}><Text style = {{ fontWeight:'bold',fontSize: 15,color: '#517fa4' , textAlign: 'center'}}>No existen novedades cargadas</Text></View>);
      
    return componentes;
  }
  
  recarga()
  {
    var fecha_hoy = this.state.date.toISOString().split('T')[0];
    const {idSala} = this.props.navigation.state.params.data;
    console.log(idSala);
    
    fetch('https://'+ host+ '/api-mobile/server.php?opcion=parte-diario&fecha='+fecha_hoy+ '&sala='+ idSala)
    .then((response) => response.text())
    .then((responseJson) => 
    {
      if (Platform.OS === 'android') {
        responseJson = responseJson.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
      }
      
      responseJson = JSON.parse(responseJson);
      console.log(responseJson);
     

      this.setState({responseJson: responseJson});
    })
    .catch((error) => 
    {
      Alert.alert
      (
      '¡Ocurrió un problema!',
      '¿Desea volver a intentar?',
      [
        {
          text: 'Ir a Inicio', onPress: () => this.props.navigation.navigate('Operaciones'),
        },
        {text: 'OK', onPress: () => this.recarga() },
      ],
      {cancelable: false},
      )
    });
  }
  

  componentDidMount() 
  {
    this.recarga();
  }

  
  render(){

    if (!this.state.responseJson) 
    {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
          color='#517fa4'
        />
      );
    }

    const  parteDiario = this.procesaParteDiario(this.state.responseJson);
    const { show, date, mode } = this.state;
    const {nombreSala} = this.props.navigation.state.params.data;
    const {nombreOperacion} = this.props.navigation.state.params.data;
    return (

         
        <View style={styles.container}>       
         <ScrollView>  
          <View style = {styles.cabecera}>
               <View style= {{width: width/4.5, height: height/7, alignItems: 'center', justifyContent: 'center'}}>
                     <Text style = {{fontSize: 13,color:'black'}}>{nombreOperacion}</Text>
                    <Text style = {{color: 'grey'}}>Operación</Text>
               </View>
               
               <Button
                   title="Cambiar Operación"
                   raised
                   onPress={() => this.props.navigation.navigate('Operaciones')}
                    buttonStyle= {{width: width/5, height : height/15}}
                    titleStyle = {{fontSize:11}}
               />

               <View style= {{width: width/3.5, height: height/7, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 13,color:'black'}}>{nombreSala}</Text>
                    <Text style = {{color: 'grey'}}>Sala</Text>
               </View>
               <Button
                   title="Cambiar Sala"
                   raised
                   onPress={() => this.props.navigation.navigate('Salas')}
                    buttonStyle= {{width: width/5, height : height/15}}
                    titleStyle = {{fontSize:11}}
               />
              
               
          </View>
          <Divider style={{ backgroundColor: 'lightgrey', height: height/25 }} />
          
          <View style = {styles.fecha}>
              
                    <Icon
                      raised
                      name='calendar'
                      type='font-awesome'
                      color='#517fa4'
                      onPress={this.showDatepicker} />
                              
                      { 
                        show && <DateTimePicker value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={this.setDate}
                        maximumDate={new Date()}
                       />
                      }
                     <Text h3 style = {{fontSize: 18, color: 'white'}}> Fecha: {this.formatoFecha(this.state.date.toISOString().split('T')[0])} </Text>

          </View>

          <Divider style={{ backgroundColor: 'lightgrey', height: height/25 }} />
                {parteDiario}
            
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
  },
  fecha : {
    width: width,
    height: height/8,
    backgroundColor : '#517fa4',
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
  },
  textoCeldas: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'left'
  },
  textoCabeceraCeldas : {
    color: 'white',
    fontSize: 12
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
  }
});