import React from 'react'
import { Dimensions,FlatList, ScrollView,StyleSheet, Text, View } from 'react-native'
import { Avatar, Icon ,Divider, Button, ListItem, withTheme} from 'react-native-elements'
import {Cell } from 'react-native-table-component';
import Accordian from '../components/Accordian'
var { height , width} = Dimensions.get('window');

export default  class ParteDiario extends React.Component {
  
  static navigationOptions = 
  {
    headerTitle: 'Parte Diario',
  }
  
  //http://192.168.1.41/api-mobile-casino/server.php?opcion=parte-diario&fecha=2020-03-12&sala=1
// https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=es

  render(){

    const tablaPersonal =  <View style = {{}}>
                        <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                            <Cell  data="Novedad" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                            <Cell  data="Minutos" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                            <Cell  data="Empleado" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                         </View>
                        <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight: height/18}}>  
                            <Cell  data="Tardanza"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
                            <Cell  data="50"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
                            <Cell  data="Perez, Alberto"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
                         </View> 
                          <View style={{backgroundColor: '#EDEBEB',flexDirection: 'row', minHeight: height/18}}>  
                          <Cell  data="Tardanza"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: '#EDEBEB'}}/>
                            <Cell  data="50"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: '#EDEBEB'}}/>
                            <Cell  data="Perez, Alberto"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: '#EDEBEB'}}/>
                         </View> 
                         <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight: height/18}}>  
                            <Cell  data="Tardanza"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
                            <Cell  data="50"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
                            <Cell  data="Perez, Alberto"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
                         </View> 
                   </View>;
                  

    const tablaMaquinas =  <View style = {{}}>
                        <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                            <Cell  data="UID" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                            <Cell  data="Novedades" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:3,backgroundColor: '#517fa4'}}/>
                         </View>
                        <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight: height/18}}>  
                            <Cell  data="1435"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
                            <Cell  data="Esto es un texto de ejemplo para ver como es que funciona"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
                         </View> 
                          <View style={{backgroundColor: 'EDEBEB',flexDirection: 'row', minHeight: height/18}}>  
                            <Cell  data="1435"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: '#EDEBEB'}}/>
                            <Cell  data="Esto es un texto de ejemplo para ver como es que funciona"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: '#EDEBEB'}}/>
                         </View> 
                          <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight: height/18}}>  
                            <Cell  data="1435"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
                            <Cell  data="Esto es un texto de ejemplo para ver como es que funciona"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
                         </View> 
                   </View>;
        
    const tablaPagosManuales =  <View style = {{}}>
        <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
            <Cell  data="UID" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
            <Cell  data="Importe"textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
            <Cell  data="Novedades" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:3,backgroundColor: '#517fa4'}}/>
         </View>
        <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight: height/15}}>  
            <Cell  data="25369"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
            <Cell  data="16.000"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
            <Cell  data="21:21 ARISTOCRAT BUFALO, pago manual juego acumulativo , apuesta 400 cred"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
         </View> 
         <View style={{backgroundColor: '#EDEBEB',flexDirection: 'row', minHeight: height/15}}>  
            <Cell  data="25369"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: '#EDEBEB'}}/>
            <Cell  data="16.000"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: '#EDEBEB'}}/>
            <Cell  data="21:21 ARISTOCRAT BUFALO, pago manual juego acumulativo , apuesta 400 cred"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: '#EDEBEB'}}/>
         </View> 
         <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight: height/15}}>  
            <Cell  data="25369"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
            <Cell  data="16.000"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
            <Cell  data="20:22 BELATRA PREHISTORIC STORY, pago manual po excesod e credito, apuesta 250cred."textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
         </View> 
   </View>;
  
  const tablaMantenimiento =  <View style = {{}}>
  <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
      <Cell  data="Novedad" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
      <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:3,backgroundColor: '#517fa4'}}/>
   </View>
  <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight:height/18}}>  
      <Cell  data="Cajas"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
      <Cell  data="Realizo limpieza de basuras frente y costado de la sala, se lava veredas y ventanales,se realiza limpieza de la sala cubriendo licencia del señor Bresanovich Nestor,se controla iten de planilla y queda todos en condiciones menos equipo de aire viga de tragamonedas,se cubre guardia de 06 a 14 hs. DOMINGUEZ JAVIER ."textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
   </View> 
    <View style={{backgroundColor: 'EDEBEB',flexDirection: 'row', minHeight:height/18}}>  
      <Cell  data="1435"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: '#EDEBEB'}}/>
      <Cell  data="Cambio cpu un texto de ejemplo para ver como es que funciona"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: '#EDEBEB'}}/>
   </View> 
    <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight:height/18}}>  
      <Cell  data="1435"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
      <Cell  data="Esto es un texto de ejemplo para ver como es para ver como es que f para ver como es que f que funciona"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
   </View> 
</View>;

const tablaSlots =  <View style = {{}}>
<View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
    <Cell  data="UID" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
    <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:3,backgroundColor: '#517fa4'}}/>
 </View>
<View style={{backgroundColor: 'white',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="1435"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
    <Cell  data="Producido final : Gold S3 $19.591,85 / Novomatic $32.406,93 / Konami $15.062,55 / SG Dualos $27.295,70 / 88 Fortune $-7.934,01 / Bally Street $55.752,87.- "textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
 </View> 
  <View style={{backgroundColor: 'EDEBEB',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="1435"textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: '#EDEBEB'}}/>
    <Cell  data="Esto es un texto de ejemplo para ver como es que funciona" textStyle = {styles.textoCeldas} style={{alignItems: 'center',flex:3,backgroundColor: '#EDEBEB'}}/>
 </View> 
  <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="1435" textStyle = {styles.textoCeldas} style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
    <Cell  data="Producido final : Gold S3 $19.591,85 / Novomatic $32.406,93 / Konami $15.062,55 / SG Dualos $27.295,70 / 88 Fortune $-7.934,01 / Bally Street $55.752,87.- "textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
 </View> 
</View>;

const tablaRuletas =  <View style = {{}}>
<View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
    <Cell  data="Ruleta" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
    <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:3,backgroundColor: '#517fa4'}}/>
 </View>
<View style={{backgroundColor: 'white',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="Gold Club " textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
    <Cell  data="11:30 hs Villaverde Ramiro ingresa en el puesto 134 un total de $65.000 y realiza una descarga de $50.840, luego se pasa al puesto 131 ingresando un total de $25.000 y realiza una descarga de $36.600 y $25.800. En todas las ocasiones realizando jugadas dispersas de 1.000 créditos de $1.000 "textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
 </View> 
  <View style={{backgroundColor: 'EDEBEB',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="Ayex" textStyle = {styles.textoCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#EDEBEB'}}/>
    <Cell  data="Esto es un texto de ejemplo para ver como es que funciona" textStyle = {styles.textoCeldas} style={{alignItems: 'center',flex:3,backgroundColor: '#EDEBEB'}}/>
 </View> 
  <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="Ayex" textStyle = {styles.textoCeldas} style={{alignItems: 'center',flex:1,backgroundColor: 'white'}}/>
    <Cell  data="Producido final : Gold S3 $19.591,85 / Novomatic $32.406,93 / Konami $15.062,55 / SG Dualos $27.295,70 / 88 Fortune $-7.934,01 / Bally Street $55.752,87.- "textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
 </View> 
</View>;



const tablaMesas=  <View style = {{}}>
<View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
    <Cell  data="Mesas" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
 </View>
<View style={{backgroundColor: 'white',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="11:30 hs Villaverde Ramiro ingresa en el puesto 134 un total de $65.000 y realiza una descarga de $50.840, luego se pasa al puesto 131 ingresando un total de $25.000 y realiza una descarga de $36.600 y $25.800. En todas las ocasiones realizando jugadas dispersas de 1.000 créditos de $1.000 " textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
 </View> 
  <View style={{backgroundColor: 'EDEBEB',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="Esto es un texto de ejemplo para ver como es que funciona" textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: '#EDEBEB'}}/>
 </View> 
  <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="Produccion final : Gold S3 $19.591,85 / Novomatic $32.406,93 / Konami $15.062,55 / SG Dualos $27.295,70 / 88 Fortune $-7.934,01 / Bally Street $55.752,87.- " textStyle = {styles.textoCeldas} style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
 </View> 
</View>;

const tablaObservaciones=  <View style = {{}}>
<View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
    <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
 </View>
<View style={{backgroundColor: 'white',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="11:30 hs Villaverde Ramiro ingresa en el puesto 134 un total de $65.000 y realiza una descarga de $50.840, luego se pasa al puesto 131 ingresando un total de $25.000 y realiza una descarga de $36.600 y $25.800. En todas las ocasiones realizando jugadas dispersas de 1.000 créditos de $1.000 " textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
 </View> 
  <View style={{backgroundColor: 'EDEBEB',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="Esto es un texto de ejemplo para ver como es que funciona" textStyle = {styles.textoCeldas} style={{alignItems: 'center',flex:3,backgroundColor: '#EDEBEB'}}/>
 </View> 
  <View style={{backgroundColor: 'white',flexDirection: 'row', minHeight:height/18}}>  
    <Cell  data="Produccion final : Gold S3 $19.591,85 / Novomatic $32.406,93 / Konami $15.062,55 / SG Dualos $27.295,70 / 88 Fortune $-7.934,01 / Bally Street $55.752,87.- "textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:3,backgroundColor: 'white'}}/>
 </View> 
</View>;

    return (
         
        <View style={styles.container}>       
         <ScrollView>  
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
          
          <View style = {styles.cabecera}>
              
               <Button
                   title="Parte diario hoy"
                 
                   raised
                   onPress={() => this.props.navigation.navigate('Auth')}
                    buttonStyle= {{width: width/2.5, height : height/15}}
                    titleStyle = {{fontSize:11}}
               />
              <View style= {{width: width/10, height: height/7, alignItems: 'center', justifyContent: 'center'}}>
                    
                    </View>
              
               <Button
                   title="Parte diario ayer"
                   
                   raised
                   onPress={() => this.props.navigation.navigate('Auth')}
                    buttonStyle= {{width: width/2.5, height : height/15}}
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
            onPress={() => console.log('hello')} />
            <Text h3 style = {{fontSize: 18, color: 'white'}}> Fecha: 25-05-20</Text>

          </View>
         
          <Divider style={{ backgroundColor: 'lightgrey', height: height/25 }} />

                <Accordian title= "Personal" data = {  tablaPersonal}/>
            <Accordian title= "Máquinas fuera de servicio" data = {  tablaMaquinas}/>
            <Accordian title= "Pagos Manuales" data = {  tablaPagosManuales }/>
            <Accordian title= "Mantenimiento" data = {  tablaMantenimiento }/>
             <Accordian title= "Slots" data = { tablaSlots }/>
            <Accordian title= "Ruletas electrónica" data = {  tablaRuletas}/>
            <Accordian title= "Mesas" data = {  tablaMesas }/>
            <Accordian title= "Observaciones Generales" data = {  tablaObservaciones}/>
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
    paddingLeft: width/22
  },
  fecha : {
    width: width,
    height: height/8,
    backgroundColor : '#517fa4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width/22
  },
  textoCeldas: {
    color: 'grey',
    fontSize: 12
  },
  textoCabeceraCeldas : {
    color: 'white',
    fontSize: 12
  }
});