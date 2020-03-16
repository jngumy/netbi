import React from 'react'
const host = '192.168.1.47';
import Icono from "react-native-vector-icons/Ionicons";

import { AsyncStorage, StyleSheet, View, TextInput,Dimensions,TouchableOpacity,ToastAndroid,  Image,
    Alert
  } from 'react-native';

import { Icon, Text} from 'react-native-elements'
var { height , width} = Dimensions.get('window');


export default class Login extends React.Component 
{
  static navigationOptions = { headerShown: false };

  constructor(props) 
  {
      super(props);

      this.state = {
        usuario: '',
        password : null,
        placeholder: 'Usuario'
      }
  }

    componentDidMount(){
      this.retrieveData();
    }
    
    async storeData() 
    {
      try {
        await AsyncStorage.setItem('Usuario', this.state.usuario);
      } catch (error) {
        // Error saving data
      }
    };

    async retrieveData() 
    {
      try {
        const value = await AsyncStorage.getItem('Usuario');
        if (value !== null) {
            this.setState({usuario: value, placeholder: value});
        }
      } catch (error) {
        // Error retrieving data
      }
    };
    
  validarUsuario()
  {
    var data = new FormData();
    data.append("usuario", this.state.usuario);
    data.append("clave", this.state.password);
    
    fetch("http://"+host+"/API-mobile/server.php", 
    {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'multipart/form-data'
            },

            body: data
    })
    .then((response) => response.text())
    .then((responseJson) => {
      
      if (Platform.OS === 'android') {
        responseJson = responseJson.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
      }
      responseJson = JSON.parse(responseJson);

      if(responseJson.rta == true)
      {
        this.storeData();
        ToastAndroid.show('Bienvenido/a,  '+this.state.usuario,ToastAndroid.SHORT);   
        this.props.navigation.navigate('Operaciones', {data : {filtro : responseJson.filtro, usuario: this.state.usuario}});
      }
      else
       if(responseJson.rta == false)  
           Alert.alert('Error al ingresar Usuario y/o Contraseña'); 
    })
    .catch((error) => 
    {
      Alert.alert('¡Ocurrió un error!');  
    });
  
  }  

 // https://i.pinimg.com/originals/a3/05/78/a30578cd3f7ffeda4ce4aeb6923cc118.jpg
  render() 
  {
    return (
        <View style={styles.container}>
            <View>
            </View>
            <Image style={styles.bgImage} source={{ uri:"https://images2.alphacoders.com/996/thumb-1920-996876.jpg" }}/> 
            
            
            <Icono name="md-person" style={styles.icon}></Icono>
          
            <View style={styles.inputContainer}>
                    <Icon
                        name='user'
                        type='evilicon'
                        color='#517fa4'
                    />
                <TextInput style={styles.inputs}
                    placeholder= {this.state.placeholder}
                    keyboardType="default"
                    placeholderTextColor= "black"
                    underlineColorAndroid='transparent'
                    onChangeText={text => {if (text == '') 
                                        this.setState({placeholder: 'Usuario'});
                                      this.setState({usuario:text})}}
                />
            </View>
          <View style={styles.inputContainer}>
            <Icon
                    name='lock'
                    type='evilicon'
                    color='#517fa4'
            />
            <TextInput style={styles.inputs}
                placeholder="Pin"
                placeholderTextColor= "black"
                secureTextEntry={true}
                keyboardType = 'numeric'
                underlineColorAndroid='transparent'
                onChangeText={text => this.setState({password:text})}
                onSubmitEditing = {() => this.validarUsuario()}/>
    
          </View>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.validarUsuario()}>
            <Text style={styles.loginText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    paddingLeft: width/23,
    width:width/1.40,
    height:height/13,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:height/13,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:width/1.40,
    borderRadius:30,
    backgroundColor:'transparent'
  },

  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
  },
  
  icon: {
    color: "#00b5ec",
    fontSize: 70,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: height/30,
  }
}); 