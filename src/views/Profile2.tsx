/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPension from '../components/CardPension';

interface Props extends StackScreenProps<RootStackParams,"profile">{}
const Profile = ({navigation,route}:Props) => {
      const {input1,opacity6,bg1,bg2,bg3,fc2,fz5,fz2,fz3,fz4,fw1,ph2,mt3,ml1,fw2,fw3,fw5,fc1,fc4,fc5,ph1,pv1,pv2,m0,mb2,pt1,wh100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
        <View style={{  
          ...bg4,
          ...wh100,
          justifyContent:"start", alignItems:"center",
          ...ff1
        }}>
          <View style={{height:"25%", width:"100%",backgroundColor:"#C1D37F"}}>
            <View style={{...m0,height:"100%",flexDirection:"row",justifyContent:"space-between", alignItems:"start",...ph1,...pv1}}>
              <TouchableOpacity onPress={()=>{navigation.pop()}} style={{zIndex:100}}>
                <Icon
                      color={bg4.backgroundColor}
                      name="arrow-back"
                      size={32} 
                  />
              </TouchableOpacity>
            </View>
          </View>
      <View style={{...flexCC,position:"absolute",top:"16.5%"}}>
        <View style={{backgroundColor:"white", width:140,height:140,borderRadius:70,...flexCC}}>
          <Image style={{width:130, height:130,borderRadius:65}} source={require("../utilities/usuario2.jpg")}/>
        </View>
      </View>
      <View style={{height:"100%",flexDirection:"row",justifyContent:"space-between", alignItems:"start",...ph1,...pv2,marginTop:60}}>
        <View style={{justifyContent:"start", alignItems:"center"}}>
          <Text style={{...fz5,...fw3}}>Dominik Martin</Text>
          <Text style={{...fw2,fontSize:13,...mb2}}>Casero</Text>
          <Text style={{...fw2,...fz3,textAlign:"center",...mb2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur</Text>
          <View style={{height:30, width:"100%"}}>
            <View style={{flexDirection:"row", ...flexCC}}>
              
              
              <View style={{flexDirection:"row", ...flexCC,height:30,width:'auto',}}>
                  <Icon
                      color={bg2.backgroundColor}
                      name="compass"
                      size={20}
                  />
                  <Text style={{...fw2,marginLeft:4,fontSize:13}}>Santa Marta (Magdalena)</Text>
              </View>
              
            </View>
          </View>
          <TouchableOpacity style={{ ...bg1,...ph2, ...pv1, ...mt3,...br2}} onPress={()=>{navigation.push("chat")}}>
            <Text style={{...fc2,...fw5,...fz3, ...ff2}}>ENVIAR MENSAJE</Text>
          </TouchableOpacity>
        </View>
      </View>
          
    </View>
      )
  }
export default Profile;
