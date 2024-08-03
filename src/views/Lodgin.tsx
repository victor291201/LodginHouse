/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPension from '../components/CardPension';

interface Props extends StackScreenProps<RootStackParams,"lodgin">{}
const Lodgin = ({navigation,route}:Props) => {
      const {input1,opacity6,bg1,bg2,bg3,fc2,fz5,fz2,fz3,fz4,fw1,fw4,ph2,mt1,mt2,mt3,ml1,fw2,fw3,fw5,fc1,fc4,fc5,ph1,pv1,pv2,m0,mb1,mb2,pt1,wh100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
        <View style={{  
          ...bg4,
          ...wh100,
          justifyContent:"start", alignItems:"center",
          ...ff1
        }}>
          <View style={{height:"30%", width:"100%",backgroundColor:"#C1D37F"}}>
            <View style={{...m0,height:"100%",flexDirection:"row",justifyContent:"space-between", alignItems:"start"}}>
              <TouchableOpacity onPress={()=>{navigation.pop()}} style={{zIndex:100}}>
                <Icon
                      color={bg4.backgroundColor}
                      name="arrow-back"
                      size={32} 
                      style={{position:"absolute",zIndex:100,marginTop:15,marginLeft:10}}
                  />
              </TouchableOpacity>
              <View style={{width:"100%",height:"100%"}}>
                <ScrollView style={{width:"100%",height:"100%"}} horizontal>
                    <Image style={{width:410,height:"100%",
                                  resizeMode:"cover"}} 
                                  source={require("../utilities/pension.jpeg")}/>
                    <Image style={{width:410,height:"100%",
                                  resizeMode:"cover"}} 
                                  source={require("../utilities/usuario2.jpg")}/>
                </ScrollView>
              </View>
            </View>
          </View>
      <View style={{height:"100%",flexDirection:"row",justifyContent:"space-between", alignItems:"start",...ph1,...pv2}}>
        <View style={{justifyContent:"start", alignItems:"center"}}>
          <Text style={{...fz5,...fw3}}>Pension Villa marbella</Text>
          <View style={{width:120,height:22, flexDirection:"row", justifyContent:"space-between",...mb2}}>
											<Icon
												color={"gold"}
												name="star"
												size={22}
											/>
											<Icon
												color={"gold"}
												name="star"
												size={22}
											/>
											<Icon
												color={"gold"}
												name="star"
												size={22}
											/>
											<Icon
												color={"gold"}
												name="star"
												size={22}
											/>
											<Icon
												color={"gold"}
												name="star"
												size={22}
											/>
										</View>
          <Text style={{...fw2,...fz3,textAlign:"center",...mb1}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur</Text>
          <View style={{height:30, width:"100%"}}>
            <Text style={{...fw2,fontSize:13,...mb1, color:bg1.backgroundColor,textAlign:"center"}}>a 5 minutos de la univewrsidad</Text>
          </View>
          <View style={{width:"100%"}}>
            <Text style={{...fz3,...fw4}}>
              Caracteristicas:
            </Text>
          </View>
          <View style={{width:"100%",maxHeight:150}}>
            <ScrollView>
              <Text style={{...fw2,...fz3,...mb1}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </Text>
            </ScrollView>
          </View>
          <View style={{width:"100%"}}>
            <Text style={{...fw2,...fz4,...mb1,...fc5,textAlign:"center",...mt1}}>400.000 COP</Text>
          </View>
          <TouchableOpacity style={{ ...bg1,...ph2, ...pv1,...br2}} onPress={()=>{navigation.push("profile")}}>
            <Text style={{...fc2,...fw5,...fz3, ...ff2}}>CONTACTAR</Text>
          </TouchableOpacity>
        </View>
      </View>
          
    </View>
      )
  }
export default Lodgin;
