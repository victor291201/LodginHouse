/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPension from '../components/CardPension';

const Home = () => {
    const [email,setEmail]=useState("");
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
      const {input1,opacity6,bg1,bg5,bg3,fz3,fz2,fw1,fw2,fw3,fw5,fc1,fc4,fc5,ph1,pv1,m0,pt1,wH100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
          <View style={{  
                          ...bg4,
                          ...wH100,
                          ...flexCC,
                          ...ff1}}>
            <View style={{height:"7%", width:"100%"}}>
							<View style={{...m0,height:"100%",flexDirection:"row",justifyContent:"space-between", alignItems:"center",...ph1}}>
								<Text style={{fontSize:30,...fw5,...fc4,...ff2}}>LODGINHOUSE</Text>
								<View style={{flexDirection:"row", justifyContent:"space-around",width:75, alignItems:'center', height:50}}>
									<Icon
											color={bg3.backgroundColor}
											name="chatbubble-outline"
											size={32}
									/>
									<Icon
											color={bg3.backgroundColor}
											name="notifications-outline"
											size={32}
									/>
								</View>
							</View>
						</View>
				<View style={{height:"93%",width:"100%", ...bg5,...ph1,...pv1}}>
          <FlatList
            data={[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5}]}
            renderItem={(item)=><CardPension/>}
            onEndReachedThreshold={0.4}
            showsVerticalScrollIndicator={false}
          />
				</View>
      </View>
      )
  }
export default Home;
