import React from 'react'
import { Dimensions,StyleSheet, View } from 'react-native'
var { height , width} = Dimensions.get('window');

import {Cell } from 'react-native-table-component';
let color = ["white", "#EDEBEB"];

const styles = StyleSheet.create({
    textoCeldas: {
        color: 'grey',
        fontSize: 12,
        textAlign: 'left'
      },
      textoCabeceraCeldas : {
        color: 'white',
        fontSize: 12,
      },
      textoNovedadCabecera : {

      }
  }
);

function genera_array_funciones_tablas (){


    var funciones = [];
    funciones[0] = function generaTablaPersonal(datos){
       
       var celdas= [];
       var i=0;
 
       celdas.push(<View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                      <Cell  data="Novedad" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10, flex:1,backgroundColor: '#517fa4'}}/>
                      <Cell  data="Minutos" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                      <Cell  data="Empleado" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10,flex:1,backgroundColor: '#517fa4'}}/>
                   </View>
 
       );
       
       datos.forEach(function () {       
          celdas.push(
          <View style={{backgroundColor: color[i%2], flexDirection: 'row', minHeight: height/18}}>  
                <Cell  data={datos[i][4]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:1,backgroundColor: color[i%2],}}/>
                <Cell  data={datos[i][5]}textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2],}}/>
                <Cell  data= {datos[i][1]+', '+ datos[i][0]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:1,backgroundColor: color[i%2]}}/> 
          </View>
          );
          i += 1;
       });
       return celdas;
    };
 
    funciones[1] = function generaTablaMaquinasFueraServicio(datos){
       
       var celdas= [];
       var i=0;
 
       celdas.push(<View style={{ backgroundColor:color[i%2],flexDirection: 'row', height: height/18}}>  
                    
                      <Cell  data="Novedades" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10,flex:1,backgroundColor: '#517fa4'}}/>
                      <Cell  data="UID" textStyle = {styles.textoCabeceraCeldas} style={{flex:1,backgroundColor: '#517fa4'}}/>
                      <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{flex:2,backgroundColor: '#517fa4'}}/>
                      <Cell  data="Q ultimos 90 dias" textStyle = {styles.textoCabeceraCeldas} style={{alignItems: 'center',flex:1,backgroundColor: '#517fa4'}}/>
                   </View>
 
       );
       
       datos.forEach(function () {       
          celdas.push(
             <View style={{backgroundColor: color[i%2],flexDirection: 'row', minHeight: height/15}}>  
                <Cell  data= {datos[i][1]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:1,backgroundColor: color[i%2]}}/>
                <Cell  data= {datos[i][0]} textStyle = {styles.textoCeldas}  style={{flex:1,backgroundColor: color[i%2]}}/>
                <Cell  data= {datos[i][2]}textStyle = {styles.textoCeldas}  style={{flex:2,backgroundColor: color[i%2]}}/>
                <Cell  data= {datos[i][3]}textStyle = {styles.textoCeldas}  style={{alignItems: 'center',flex:1,backgroundColor: color[i%2]}}/>
             </View> 
          );
          i += 1;
       });
       return celdas;
    };
    
    funciones[2] = function  generaTablaPagosManuales(datos){
       var celdas= [];
       var i=0;
 
       celdas.push( <View style={{ backgroundColor: color[i%2],flexDirection: 'row', height: height/18}}>  
                      <Cell  data="UID" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10,flex:1,backgroundColor: '#517fa4'}}/>
                      <Cell  data="Importe"textStyle = {styles.textoCabeceraCeldas} style={{flex:1,backgroundColor: '#517fa4'}}/>
                      <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{flex:3,backgroundColor: '#517fa4'}}/>
                   </View>
       );
       
       datos.forEach(function () {       
          celdas.push(
             <View style={{backgroundColor: color[i%2],flexDirection: 'row', minHeight: height/15}}>  
                <Cell  data= {datos[i][0]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:1,backgroundColor: color[i%2]}}/>
                <Cell  data= {datos[i][1]} textStyle = {styles.textoCeldas}  style={{flex:1,backgroundColor: color[i%2]}}/>
                <Cell  data= {datos[i][2]} textStyle = {styles.textoCeldas}  style={{flex:3,backgroundColor: color[i%2]}}/>
             </View> 
          );
          i += 1;
       });
       return celdas;
 
    };
 
    funciones[3] = function  generaTablaNovedadesMantenimiento(datos){
 
       var celdas= [];
       var i=0;
 
       celdas.push( <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                      <Cell  data="Novedad" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10,flex:1,backgroundColor: '#517fa4'}}/>
                      <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{flex:3,backgroundColor: '#517fa4'}}/>
                   </View>
       );
       
       datos.forEach(function () {       
          celdas.push(
             <View style={{backgroundColor: color[i%2],flexDirection: 'row', minHeight:height/18}}>  
                <Cell  data= {datos[i][1]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:1,backgroundColor: color[i%2]}}/>
                <Cell  data= {datos[i][2]} textStyle = {styles.textoCeldas}  style={{flex:3,backgroundColor: color[i%2]}}/>
             </View> 
          );
          i += 1;
       });
       return celdas;
    };
 
    funciones[4] = function  generaTablaNovedadesMarketing(datos){
 
       var celdas= [];
       var i=0;
 
       celdas.push( <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                      <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10,flex:1,backgroundColor: '#517fa4'}}/>
                   </View>
       );
       
       datos.forEach(function () {       
          celdas.push(
             <View style={{backgroundColor: color[i%2],flexDirection: 'row', minHeight:height/18}}>  
                   <Cell  data={datos[i][1]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:1,backgroundColor: color[i%2]}}/>
             </View> 
          );
          i += 1;
       });
       return celdas;
    };
 
    funciones[5] = function generaTablaNovedadesMesas(datos){
       var celdas= [];
       var i=0;
 
       celdas.push( <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                         <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10,flex:1,backgroundColor: '#517fa4'}}/>
                   </View>
       );
       
       datos.forEach(function () {       
          celdas.push(
             <View style={{backgroundColor: color[i%2],flexDirection: 'row', minHeight:height/18}}>  
                   <Cell  data= {datos[i][1]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:3,backgroundColor: color[i%2]}}/>
             </View> 
          );
          i += 1;
       });
       return celdas;
    } ;
 
    funciones[6] = function generaTablaNovedadesSlots(datos){
          var celdas= [];
          var i=0;
 
          celdas.push( <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                         <Cell  data="UID" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10,flex:1,backgroundColor: '#517fa4'}}/>
                         <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{flex:3,backgroundColor: '#517fa4'}}/>
                      </View>
          );
          
          datos.forEach(function () {       
             celdas.push(
                <View style={{backgroundColor: color[i%2],flexDirection: 'row', minHeight:height/18}}>  
                      <Cell  data={datos[i][0]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:1,backgroundColor: color[i%2]}}/>
                      <Cell  data={datos[i][3]} textStyle = {styles.textoCeldas}  style={{flex:3,backgroundColor: color[i%2]}}/>
                </View> 
             );
             i += 1;
          });
          return celdas;
 
    }
 
    funciones[7] = function generaTablaNovedadesRuletaElectronica(datos){
          var celdas= [];
          var i=0;
 
          celdas.push( <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                         <Cell  data="Ruleta" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10,flex:1,backgroundColor: '#517fa4'}}/>
                         <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{flex:3,backgroundColor: '#517fa4'}}/>
                      </View>
          );
          
          datos.forEach(function () {       
             celdas.push(
                <View style={{backgroundColor: color[i%2],flexDirection: 'row', minHeight:height/18}}>  
                      <Cell  data={datos[i][0]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:1,backgroundColor: color[i%2]}}/>
                      <Cell  data={datos[i][3]} textStyle = {styles.textoCeldas}  style={{flex:3,backgroundColor: color[i%2]}}/>
                </View> 
             );
             i += 1;
          });
          return celdas;
 
    }
 
       funciones[8] = function generaTablaNovedadesSistemas(datos){
          var celdas= [];
          var i=0;
 
          celdas.push( <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                         <Cell  data="Novedad" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10,flex:1,backgroundColor: '#517fa4'}}/>
                         <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{flex:2,backgroundColor: '#517fa4'}}/>
                      </View>
          );
          
          datos.forEach(function () {       
             celdas.push(
                <View style={{backgroundColor: color[i%2],flexDirection: 'row', minHeight:height/18}}>  
                      <Cell  data={datos[i][1]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:1,backgroundColor: color[i%2]}}/>
                      <Cell  data={datos[i][2]} textStyle = {styles.textoCeldas}  style={{flex:2,backgroundColor: color[i%2]}}/>
                </View> 
             );
             i += 1;
          });
          return celdas;
    }
 
 
 
       funciones[9] = function generaTablaObservacionesGenerales(datos){
             var celdas= [];
             var i=0;
 
             celdas.push( <View style={{ backgroundColor: '#EDEBEB',flexDirection: 'row', height: height/18}}>  
                            <Cell  data="Observaciones" textStyle = {styles.textoCabeceraCeldas} style={{paddingLeft: 10,flex:1,backgroundColor: '#517fa4'}}/>
                         </View>
             );
             
             datos.forEach(function () {       
                celdas.push(
                   <View style={{backgroundColor: color[i%2],flexDirection: 'row', minHeight:height/18}}>  
                         <Cell  data={datos[i][0]} textStyle = {styles.textoCeldas}  style={{paddingLeft: 10,flex:1,backgroundColor: color[i%2]}}/>
                   </View> 
                );
                i += 1;
             });
             return celdas;
       }
 
       return funciones;
   }
 
   const myFunctionArray = genera_array_funciones_tablas();

   export default myFunctionArray;