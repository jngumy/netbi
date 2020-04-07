import React from 'react'
import {Alert, ActivityIndicator,Dimensions,ScrollView,StyleSheet, Text, View } from 'react-native'
import {Divider, Button} from 'react-native-elements'
import Accordian from '../components/Accordian';
import {Cell } from 'react-native-table-component';
const host = 'netbi.netgen.com.ar';
var { height , width} = Dimensions.get('window');

export default  class slots extends React.Component {
  
    static navigationOptions = 
    {
      headerTitle: 'Resultados Slots',
      
    }

    constructor(params){       
        super(params);
         this.state = {    
             tablaSlotsDiario : null,
             tablaSlotsMensual : null,
         };
      }

    recarga()
    {
      const {idSala} = this.props.navigation.state.params.data;
      console.log(idSala);

      fetch('https://'+ host+ '/api-mobile/server.php?opcion=slots-diario&sala='+ idSala)
      .then((response) => response.text())
      .then((responseJson) => 
      {
        if (Platform.OS === 'android') {
          responseJson = responseJson.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
        }        
        responseJson = JSON.parse(responseJson);
        console.log(responseJson);
        this.setState({tablaSlotsDiario: responseJson});
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

      fetch('https://'+ host+ '/api-mobile/server.php?opcion=slots-mensual&sala='+ idSala)
      .then((response) => response.text())
      .then((responseJson) => 
      {
        if (Platform.OS === 'android') {
          responseJson = responseJson.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
        }        
        responseJson = JSON.parse(responseJson);
        this.setState({tablaSlotsMensual: responseJson});
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

  procesaSlotsDiarios(data){
    let color = ["white", "#EDEBEB"];
    var celdas= [];
    var i=0;

    if(data.datos != null){
        celdas.push(<View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
        <Cell  data="Fecha" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
        <Cell  data="Win" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
        <Cell  data="Drop" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
      </View>
        );

        data.datos.forEach(function () {       
        celdas.push(
        <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
        <Cell  data={data.datos[i].Fecha} textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
        <Cell  data={data.datos[i].Win}textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
        <Cell  data= {data.datos[i].Drops} textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2]}}/> 
        </View>
        );
        i += 1;
        });
    }
    else
        celdas.push(<View style = {{height: height/8, alignItems:'center', justifyContent:'center'}}><Text style = {{ fontWeight:'bold',fontSize: 13,color: 'grey' , textAlign: 'center'}}>No existen resultados</Text></View>);
   
    return celdas;
  }

  procesaSlotsMensual(data){
    let color = ["white", "#EDEBEB"];
    var celdas= [];
    var i=0;

    if(data.datos != null){
      celdas.push(<View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
      <Cell  data="Mes" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
      <Cell  data="Win" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
      <Cell  data="Win prom por día" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
    </View>
      );

      data.datos.forEach(function () {       
      celdas.push(
      <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
      <Cell  data={data.datos[i].Mes} textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
      <Cell  data={data.datos[i].Win}textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
      <Cell  data= {data.datos[i].WPromedio} textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2]}}/> 
      </View>
      );
      i += 1;
      });

    }
    else
       celdas.push(<View style = {styles.cabecera}><Text style = {{ fontWeight:'bold',fontSize: 15,color: '#517fa4' , textAlign: 'center'}}>No existen resultados</Text></View>);


    return celdas;
  }

  render(){

    if (!this.state.tablaSlotsDiario | !this.state.tablaSlotsMensual) 
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

    const resultadosSlotsDiarios = this.procesaSlotsDiarios(this.state.tablaSlotsDiario);
    const resultadosSlotsMensual = this.procesaSlotsMensual(this.state.tablaSlotsMensual);
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

       

        <Accordian expanded = {true} title= {"Resultados Diarios                    Mes: "+this.state.tablaSlotsDiario.mes} data = {resultadosSlotsDiarios}/>
        
        <Accordian title= {"Resultados Mensuales             Año: "+this.state.tablaSlotsMensual.anio} data = {resultadosSlotsMensual}/>
            
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