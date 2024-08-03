/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPension from '../components/CardPension';
import Header1 from '../components/Header1';

interface Props extends StackScreenProps<RootStackParams,"home">{}
const Save = ({navigation,route}:Props) => {
    const [email,setEmail]=useState("");
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
      const {input1,opacity6,bg2,bg5,bg3,fz3,fz2,fw1,fw2,fw3,fw5,fc1,fc4,fc5,ph1,ph2,pv1,m0,mt3,pt1,wh100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
          <View style={{  
                          ...bg4,
                          ...wh100,
                          ...flexCC,
                          ...ff1}}>
            
            <Header1 navigate={()=>navigation.push("messages")}/>
				<View style={{height:"93%",width:"100%", ...bg5,...ph1,...pv1}}>
          <FlatList
            data={[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5}]}
            renderItem={(item)=>
              <TouchableOpacity onPress={()=>{navigation.push("lodgin")}}>
                <CardPension save/>
              </TouchableOpacity>
              }
            onEndReachedThreshold={0.4}
            showsVerticalScrollIndicator={false}
          />
				</View>
      </View>
      )
  }
export default Save;
