import React from 'react'
import { Alert, StyleSheet, Dimensions, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import {Button, Icon} from 'react-native-elements'
import { Cell } from 'react-native-table-component';
import DateTimePicker from '@react-native-community/datetimepicker';

var { height , width} = Dimensions.get('window');
const host = 'netbi.netgen.com.ar';

export default class RTDiarios extends React.Component
{

    static navigationOptions = 
    {
      tabBarLabel: 'Resultados Diarios',
    };

    constructor(props) 
    {
      var x = new Date().setSeconds(-(3*60*60));
      super(props);
      this.state = {
        show : false,
        mode: null,
        date: new Date(x),
        tablaTotalSlotsDiario : null,
        tablaTotalMesasDiario : null,
      }
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
      tablaTotalSlotsDiario : null,
      tablaTotalMesasDiario : null,
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


    recarga()
    {
      var fecha_hoy = this.state.date.toISOString().split('T')[0];
      const {filtro} = this.props.navigation.state.params.data;      
      var paramsQuery = '';

      for (let i=0; i<filtro.salas.lista.length ; i++){
          paramsQuery = paramsQuery + '&salas[]='+filtro.salas.lista[i].id;

      }
      paramsQuery = paramsQuery + '&fecha='+fecha_hoy;

      fetch('https://'+ host+ '/api-mobile/server.php?opcion=totales-diario'+ paramsQuery)
      .then((response) => response.text())
      .then((responseJson) => 
      {
        if (Platform.OS === 'android') {
          responseJson = responseJson.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
        }        
        responseJson = JSON.parse(responseJson);

        this.setState({tablaTotalSlotsDiario: responseJson.TSDiario, tablaTotalMesasDiario:responseJson.TMDiario});
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

  tienemesas(){
    var {filtro} = this.props.navigation.state.params.data;
    var i=0;
    var rta = false;
    while(i<filtro.salas.lista.length && !rta){
      if (filtro.salas.lista[i].mesas)
        rta = true;
      i++;
    }
    return rta;
  }

  procesaTotalDiariosSlots(data){
    let color = ["white", "#EDEBEB"];
    var celdas= [];
    var i=0;
    var {filtro} = this.props.navigation.state.params.data;

    celdas.push(<View style={{backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                  <Cell  data="Sala" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft:16,flex:1,backgroundColor: '#517fa4'}}/>
                  <Cell  data="Win" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                </View>
    );

    for(i;i<filtro.salas.lista.length;i++){
        celdas.push(
            <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
                  <Cell  data={filtro.salas.lista[i].nombre} textStyle = {styles.textoCeldas}  style={{paddingLeft:16,flex:1,backgroundColor: color[i%2],}}/>
                  <Cell  data={data[i][1]} textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
            </View>
        );
    }
    celdas.push(
        <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
              <Cell  data={data[i][0]} textStyle = {{color: 'black', fontSize: 14, textAlign: 'left',fontWeight: 'bold'}}  style={{paddingLeft: 16,flex:1,backgroundColor: color[i%2],}}/>
              <Cell  data={data[i][1]} textStyle = {{color: 'black', fontSize: 14, textAlign: 'left',fontWeight: 'bold'}}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
        </View>
    )
    return celdas;
  }

  procesaTotalDiariosMesas(data){
    let color = ["white", "#EDEBEB"];
    var celdas= [];
    var i=0;
    var {filtro} = this.props.navigation.state.params.data;

    celdas.push(<View style={{backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                  <Cell  data="Sala" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft:16,flex:1,backgroundColor: '#517fa4'}}/>
                  <Cell  data="Win" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                </View>
    );

    for(i;i<filtro.salas.lista.length;i++){
      if(filtro.salas.lista[i].mesas){
        celdas.push(
          <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
                <Cell  data={filtro.salas.lista[i].nombre} textStyle = {styles.textoCeldas}  style={{paddingLeft: 16,flex:1,backgroundColor: color[i%2],}}/>
                <Cell  data={data[i][1]} textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
          </View>
      );
      }        
    }
    if(this.tienemesas())
      celdas.push(
          <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
                <Cell  data={data[i][0]} textStyle = {{color: 'black', fontSize: 14, textAlign: 'left',fontWeight: 'bold'}}  style={{paddingLeft: 16, flex:1,backgroundColor: color[i%2],}}/>
                <Cell  data={data[i][1]} textStyle = {{color: 'black', fontSize: 14, textAlign: 'left',fontWeight: 'bold'}}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
          </View>
      )
    return celdas;
  }

  headermesas(){
    if (this.tienemesas())
      return(<View style= {styles.vistaTexto}>
        <Text style = {{ fontWeight:'bold',color: '#517fa4',fontSize: 13}}>Resultados Mesas</Text> 
    </View>);
    else
      return null;
  }

    render(){
        if (!this.state.tablaTotalSlotsDiario | !this.state.tablaTotalMesasDiario) 
        {
            return (
                <View style={{flex: 1,justifyContent: 'center'}}> 
                    <ActivityIndicator
                    animating={true}
                    style={styles.indicator}
                    size="large"
                    color= '#517fa4'
                    />
                </View>
            );
        }
        const { show, date, mode } = this.state;

        var headerMesas = this.headermesas();

        const resultadosTotalSlotsDiario = this.procesaTotalDiariosSlots(this.state.tablaTotalSlotsDiario);
        var resultadosTotalMesasDiario;
        if(this.tienemesas())
          resultadosTotalMesasDiario = this.procesaTotalDiariosMesas(this.state.tablaTotalMesasDiario);
        else
          resultadosTotalMesasDiario = null;

        const {filtro} = this.props.navigation.state.params.data;
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}} vertical={true} showsVerticalScrollIndicator ={false}>
                <View style = {styles.cabecera}>
                    <View style= {{width: width/4.5, height: height/7, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white'}}>
                            <Text style = {{fontSize: 13,color:'black'}}>{filtro.nombre}</Text>
                    </View>
                    <View style= {{width: width/2.5, height: height/7, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white'}}>
                    
                    </View>
    
                    <Button
                        title="Cambiar Operación"
                        raised
                        onPress={() => this.props.navigation.navigate('Operaciones')}
                            buttonStyle= {{width: width/4, height : height/15}}
                            titleStyle = {{fontSize:12}}
                    />
                </View>
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
                    <View style= {styles.vistaTexto}>
                        <Text style = {{ fontSize: 13, fontWeight:'bold',color: '#517fa4',}}>Resultados Slots</Text> 
                    </View>
                    <View style = {{justifyContent: 'center', paddingBottom:1, alignItems: 'center', width: width}}>

                    {resultadosTotalSlotsDiario}
                    </View>

                    {headerMesas}

                    <View style = {{justifyContent: 'center',paddingBottom:1, alignItems: 'center', width: width}}>
                    {resultadosTotalMesasDiario}
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
    fecha : {
      width: width,
      height: height/8,
      backgroundColor : '#517fa4',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: width/22,
      
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
    textoCabeceraCeldas : {
        color: 'white',
        fontSize: 12
      },
    vistaTexto: { paddingLeft: width/20,justifyContent: 'center',backgroundColor: 'white',height: height/10},
    textoCeldas: {
        color: 'grey',
        fontSize: 12,
    }});