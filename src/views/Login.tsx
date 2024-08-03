/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Icon from "react-native-vector-icons/Ionicons"
import GlobalStyles from '../utilities/GlobalStyles';
import { RootStackParams } from '../../../../aplicaciones moviles/Pokedex/Pokedex/src/navigation/Navigator';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<RootStackParams,"login">{}
const Login = ({navigation,route}:Props) => {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
    const {input1,opacity6,bg1,bg2,bg3,fz3,fz2,fw2,fw3,fw5,fc2,fc3,mt2,mt1,mt3,mt4,mt5,pv1,ph2,wh100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
    return (
        <View style={{  
                        ...bg1,
                        ...wh100,
                        ...flexCC,
                        ...ff1}}>
            <Text style={{fontSize:40,...fw5,...fc3,...ff2}}>LODGINHOUSE</Text>
      <TextInput
        style={{...input1,...opacity6, ...bg4,...fz3,...fw3,...fc3,...pv1,...ph2,...mt5}}
        placeholderTextColor={fc3.color}
        placeholder="Nombre de Usuario"
        keyboardType="numeric"
        value={userName}
        onChangeText={setUserName}
      />
      
      <TextInput
        style={{...input1,...opacity6, ...bg4,...fz3,...fw3,...fc3,...pv1,...ph2,...mt2}}
        placeholderTextColor={fc3.color}
        placeholder="Contraseña"
        keyboardType="numeric"
        value={password}
        onChangeText={setPassword}
      />
      <View style={mt2}>
        <View style={{ ...bg2,...ph2, ...pv1, ...mt3,...br2}} >
        <Text style={{...fc3,...fw5,...fz3, ...ff2}}>INICIAR SESION</Text>

        </View>
      </View>
      <TouchableOpacity onPress={()=>{navigation.push("register")}}>
        <Text style={{...fz3,...fw2,...mt1,...fc2}}>Registrarse</Text>
      </TouchableOpacity>
        <View style={{height:30, ...mt5}}>
          <View style={{flexDirection:"row",...flexCC}}>
              <View style={{width:"45%", backgroundColor:"white", height:2}}></View>
              <Text style={{height:30, width:"5%",textAlign:"center", paddingTop:4.5, ...fc2,...fw3,...fz3}}>O</Text>
              <View style={{width:"45%", backgroundColor:"white", height:2}}></View>
          </View>
        </View>
        <View style={{height:70,...mt1}}>
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