/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import { RootStackParams } from '../../../../aplicaciones moviles/Pokedex/Pokedex/src/navigation/Navigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams,"register">{}
const Register = ({navigation,route}:Props) => {
    const [email,setEmail]=useState("");
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
          placeholder="Correo Electronico"
          keyboardType="numeric"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput
          style={{...input1,...opacity6, ...bg4,...fz3,...fw3,...fc3,...pv1,...ph2,...mt2}}
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
        <TouchableOpacity style={{ ...bg2,...ph2, ...pv1, ...mt3,...br2}} onPress={()=>{navigation.pop()}}>
          <Text style={{...fc3,...fw5,...fz3, ...ff2}}>REGISTRARSE</Text>
        </TouchableOpacity>
        </View>
      </View>
      )
  }
export default Register;