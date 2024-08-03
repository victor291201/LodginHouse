/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPension from '../components/CardPension';

const Header1 = (props) => {
    const [email,setEmail]=useState("");
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
      const {input1,opacity6,bg2,bg5,bg3,fz3,fz2,fw1,fw2,fw3,fw5,fc1,fc4,fc5,ph1,ph2,pv1,m0,mt3,pt1,wh100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
        <View style={{height:"7%", width:"100%",borderEndColor:bg5.backgroundColor,borderBottomWidth:0.15}}>
          <View style={{...m0,height:"100%",flexDirection:"row",justifyContent:"space-between", alignItems:"center",...ph1}}>
            <Text style={{fontSize:30,...fw5,...fc4,...ff2}}>LODGINHOUSE</Text>
            <View style={{flexDirection:"row", justifyContent:"space-around",width:40, alignItems:'center', height:50}}>
              <TouchableOpacity onPress={props.navigate}>
                <Icon
                    color={bg3.backgroundColor}
                    name="chatbubble-outline"
                    size={32}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
  }
export default Header1;
