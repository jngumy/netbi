import React from 'react'
import { Alert, Picker, StyleSheet, Dimensions, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import {Button, Icon} from 'react-native-elements'
import { Cell } from 'react-native-table-component';

var { height , width} = Dimensions.get('window');
const host = 'netbi.netgen.com.ar';

export default class RTMensuales extends React.Component
{

    static navigationOptions = 
    {
      tabBarLabel: 'Resultados Mensuales',
    };

    constructor(props) 
    {
      var x = new Date().setSeconds(-(3*60*60));
      var mes_actual= new Date(x).getMonth() + 1;
      var año_actual= new Date(x).getFullYear();
      super(props);
      this.state = {
        date: new Date(x),
        tablaTotalSlotsMensual : null,
        tablaTotalMesasMensual : null,
        mes: mes_actual,
        año: año_actual
      }
      console.log(this.state);
    }

    formatoFecha(fecha)
  {
    let aux = fecha.split('-');
    return aux[2]+ '-'+ aux[1]+'-'+aux[0];
  }

    recarga()
    {
      var fecha_hoy = this.state.año+'-'+this.state.mes+'-'+'01';
      const {filtro} = this.props.navigation.state.params.data;      
      var paramsQuery = '';

      for (let i=0; i<filtro.salas.lista.length ; i++){
          paramsQuery = paramsQuery + '&salas[]='+filtro.salas.lista[i].id;

      }
      paramsQuery = paramsQuery + '&fecha='+fecha_hoy;

      fetch('https://'+ host+ '/api-mobile/server.php?opcion=totales-mensual'+ paramsQuery)
      .then((response) => response.text())
      .then((responseJson) => 
      {
        if (Platform.OS === 'android') {
          responseJson = responseJson.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
        }        
        responseJson = JSON.parse(responseJson);

        this.setState({tablaTotalSlotsMensual: responseJson.TSMensual, tablaTotalMesasMensual:responseJson.TMMensual});
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

  procesaTotalMensualSlots(data){
    let color = ["white", "#EDEBEB"];
    var celdas= [];
    var i=0;
    var {filtro} = this.props.navigation.state.params.data;

    celdas.push(<View style={{backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                  <Cell  data="Sala" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft:16,flex:1,backgroundColor: '#517fa4'}}/>
                  <Cell  data="Win" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                  <Cell  data="Win prom por día" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                </View>
    );

    for(i;i<filtro.salas.lista.length;i++){
        celdas.push(
            <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
                  <Cell  data={filtro.salas.lista[i].nombre} textStyle = {styles.textoCeldas}  style={{paddingLeft:16,flex:1,backgroundColor: color[i%2],}}/>
                  <Cell  data={data[i][1]} textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
                  <Cell  data={data[i][2]} textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
            </View>
        );
    }
    celdas.push(
        <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
              <Cell  data={data[i][0]} textStyle = {{color: 'black', fontSize: 14, textAlign: 'left',fontWeight: 'bold'}}  style={{paddingLeft:16,flex:1,backgroundColor: color[i%2],}}/>
              <Cell  data={data[i][1]} textStyle = {{color: 'black', fontSize: 14, textAlign: 'left',fontWeight: 'bold'}}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
              <Cell  data={data[i][2]} textStyle = {{color: 'black', fontSize: 14, textAlign: 'left',fontWeight: 'bold'}}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
        </View>
    )
    return celdas;
  }

  procesaTotalMensualMesas(data){
    let color = ["white", "#EDEBEB"];
    var celdas= [];
    var i=0;
    var {filtro} = this.props.navigation.state.params.data;

    celdas.push(<View style={{backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                  <Cell  data="Sala" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 16,flex:1,backgroundColor: '#517fa4'}}/>
                  <Cell  data="Win" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                  <Cell  data="Win prom por día" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                </View>
    );

    for(i;i<filtro.salas.lista.length;i++){
      if(filtro.salas.lista[i].mesas){
        celdas.push(
          <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
                <Cell  data={filtro.salas.lista[i].nombre} textStyle = {styles.textoCeldas}  style={{paddingLeft: 16,flex:1,backgroundColor: color[i%2],}}/>
                <Cell  data={data[i][1]} textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
                <Cell  data={data[i][2]} textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
          </View>
      );

      }
    }
    if(this.tienemesas())
      celdas.push(
          <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
                <Cell  data={data[i][0]} textStyle = {{color: 'black', fontSize: 14, textAlign: 'left',fontWeight: 'bold'}}  style={{paddingLeft: 16,flex:1,backgroundColor: color[i%2],}}/>
                <Cell  data={data[i][1]} textStyle = {{color: 'black', fontSize: 14, textAlign: 'left',fontWeight: 'bold'}}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
                <Cell  data={data[i][2]} textStyle = {{color: 'black', fontSize: 14, textAlign: 'left',fontWeight: 'bold'}}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
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
        if (!this.state.tablaTotalSlotsMensual | !this.state.tablaTotalMesasMensual) 
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

        const {date} = this.state;
       
        var año_actual = new Date().getFullYear();
        var headerMesas = this.headermesas();
        const resultadosTotalSlotsMensual = this.procesaTotalMensualSlots(this.state.tablaTotalSlotsMensual);
        var resultadosTotalMesasMensual;
        if(this.tienemesas())
          resultadosTotalMesasMensual = this.procesaTotalMensualMesas(this.state.tablaTotalMesasMensual);
        else
        resultadosTotalMesasMensual = null;

        const state = this.state;
       

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
                    
                      <Picker
                      mode={'dialog'}
                      selectedValue={state.mes}
                      style={{color: 'white', height: 50, width: width/3}}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({mes : itemValue})
                      }>
                      <Picker.Item label="Enero" value= {1} />
                      <Picker.Item label="Febrero" value={2} />
                      <Picker.Item label="Marzo" value={3} />
                      <Picker.Item label="Abril" value={4} />
                      <Picker.Item label="Mayo" value={5} />
                      <Picker.Item label="Junio" value={6} />
                      <Picker.Item label="Julio" value={7} />
                      <Picker.Item label="Agosto" value={8} />
                      <Picker.Item label="Septiembre" value={9} />
                      <Picker.Item label="Octubre" value={10} />
                      <Picker.Item label="Noviembre" value={11} />
                      <Picker.Item label="Diciembre" value={12} />

                    </Picker>
                    <Picker
                      
                      selectedValue={this.state.año}
                      style={{color: 'white', height: 50, width: width/3}}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({año: itemValue})
                      }>
                      
                      <Picker.Item label={año_actual.toString()} value= {año_actual} />
                      <Picker.Item label={(año_actual -1).toString()} value={año_actual -1} />
                      <Picker.Item label={(año_actual -2).toString()} value={año_actual -2} />
                      <Picker.Item label={(año_actual -3).toString()} value={año_actual -3} />
                      <Picker.Item label={(año_actual -4).toString()} value={año_actual -4} />
                     

                    </Picker>

                    <Button
                        title="Consultar"
                        raised
                        onPress={() => {this.setState({tablaTotalMesasMensual: null, tablaTotalSlotsMensual:null});
                                        this.recarga();
                                        }}
                            buttonStyle= {{width: width/4, height : height/15}}
                            titleStyle = {{fontSize:12}}
                    />
                </View>
                    <View style= {styles.vistaTexto}>
                        <Text style = {{ fontWeight:'bold',color: '#517fa4',fontSize: 13}}>Resultados Slots</Text> 
                    </View>
                    <View style = {{justifyContent: 'center', paddingBottom:1, alignItems: 'center', width: width}}>
                      {resultadosTotalSlotsMensual}
                    </View>
                    {headerMesas}
                    <View style = {{justifyContent: 'center',paddingBottom:1, alignItems: 'center', width: width}}>
                       {resultadosTotalMesasMensual}
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
        fontSize: 12,
      },
    textoCeldas: {
        color: 'grey',
        fontSize: 12,
        textAlign: 'left'
      },
      vistaTexto: { paddingLeft: width/20,justifyContent: 'center',backgroundColor: 'white',height: height/10}
    });