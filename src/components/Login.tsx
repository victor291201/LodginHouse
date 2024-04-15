/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Icon from "react-native-vector-icons/Ionicons"
import GlobalStyles from '../utilities/GlobalStyles';

const Login = () => {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
    const {input1,opacity7,bg1,bg2,bg3,fz3,fz2,fw2,fw3,fw5,fc2,fc3,mt2,mt1,pv1,ph2} = GlobalStyles;
    return (
        <View style={{  
                        backgroundColor:"#ED5E28",
                        width:"100%",
                        height:"100%",
                        flex:1,
                        justifyContent:'center',
                        alignItems:"center",
                        fontFamily:"Roboto"}}>
            <Text style={{fontSize:40,...fw5,...fc3, fontFamily:"sans-serif-condensed"}}>LODGINHOUSE</Text>
      <TextInput
        style={{...input1,...opacity7, ...bg2,...fz3,...fw3,...fc2,...pv1,...ph2,...mt2}}
        placeholderTextColor={"white"}
        placeholder="Nombre de Usuario"
        keyboardType="numeric"
        value={userName}
        onChangeText={setUserName}
      />
      
      <TextInput
        style={{...input1,...opacity7, ...bg2,...fz3,...fw3,...fc2,...pv1,...ph2,...mt2}}
        placeholderTextColor={"white"}
        placeholder="Contraseña"
        keyboardType="numeric"
        value={password}
        onChangeText={setPassword}
      />
      <View style={mt2}>
      <TouchableOpacity style={{ ...bg2,...ph2, ...pv1, borderRadius:10}}>
        <Text style={{...fc3,...fw5,...fz3, fontFamily:"sans-serif-condensed"}}>INICIAR SESION</Text>
      </TouchableOpacity>
      </View>
        <Text style={{...fz3,...fw2,...mt1,...fc2}}>Registrarse</Text>
        <View style={{height:30, ...mt1}}>
          <View style={{flex:1,flexDirection:"row", justifyContent:'center', alignItems:"center"}}>
              <View style={{width:"45%", backgroundColor:"white", height:2}}></View>
              <Text style={{height:30, width:"5%",textAlign:"center", paddingTop:4.5, ...fc2,...fw3,...fz3}}>O</Text>
              <View style={{width:"45%", backgroundColor:"white", height:2}}></View>
          </View>
        </View>
        <View style={{height:70}}>
          <View style={{flex:1,flexDirection:"row",width:200, justifyContent:"space-evenly", alignItems:"center"}}>
              
            <Icon
                color={bg3.backgroundColor}
                name="logo-facebook"
                size={60}
            />
            <Icon
                color={bg3.backgroundColor}
                name="logo-google"
                size={60}
            />
          </View>
          
        </View>
    </View>
    )
  
}
export default Login;