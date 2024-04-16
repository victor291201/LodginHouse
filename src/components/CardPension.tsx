/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const CardPension = () => {
      const {input1,opacity6,bg1,bg5,bg3,fz3,fz2,fw1,fw2,fw3,fw5,fc1,fc4,fc5,ph1,pv1,m0,pt1,wH100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
						<View style={{width:"100%", ...bg4, height:"55%",...br2, borderColor:"grey", borderWidth:0.5,...ph1,...pv1}}>
							<View style={{width:"100%", height:"50%",...br2}}>
								<Image style={{width:"100%", height:"100%",...br2}} source={require("../utilities/pension.jpeg")}/>
								<View style={{width:50,height:50,position:"absolute",right:5,top:5,...bg4,...br2,...flexCC}}>
									<Icon
												color={bg3.backgroundColor}
												name="bookmark-outline"
												size={35}
										/>
								</View>
							</View>
							<View style={{width:"100%", height:"50%",...pt1,justifyContent:"space-between"}}>
								<View style={{ width:"100%"}}>
									<View style={{flexDirection:"row", justifyContent:"space-between"}}>
										<Text style={{...fw5,fontSize:20}}>Pension villa marbella</Text>
										<View style={{width:120,height:22, flexDirection:"row", justifyContent:"space-between"}}>
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
									</View>
									<View>
										<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae dolor vel nibh facilisis gravida sed sit amet velit. Morbi tempor leo in gravida ornare. Cras semper dui id nunc eleifend maximus. semper mi euismod malesuada.</Text>
									</View>
								</View>
								<View style={{width:"100%"}}>
									<View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:2}}>
										<Text style={{...fc4,...fw3}}>Caracteristicas</Text>
										<Text  style={{...fc4,...fw3}}>a 5 min de distancia</Text>
									</View>
									<View><Text style={{...fw1}}>lavanderia, aire acondicionado, comida, visitas, aseo, wifi, parqueadero</Text></View>
									<Text style={{...fc5, position:"absolute", bottom:0, right:0}}>400.000 COP</Text>
								</View>
							</View>
						</View>
      )
  }
export default CardPension;
