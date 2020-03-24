import React, {Component} from 'react';
import { View, Dimensions,TouchableOpacity, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

var { height , width} = Dimensions.get('window');

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : props.expanded,
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'#c0c0c0'} />
            </TouchableOpacity>
            <View style={ styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                     {this.props.data}  
                </View>
            }
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: '#517fa4',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height: height/10,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: 'white'
    },
    parentHr:{
        height:1,
        color: 'white',
        width:width
    },
    child:{
        backgroundColor: 'lightgrey',
        //padding:16,
        paddingTop:16,
        paddingBottom:16
    }
  
});