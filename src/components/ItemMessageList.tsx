/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemMessageList = () => {
    const {input1,opacity6,bg1,bg5,bg3,fz4,fz3,fw1,fw2,fw3,fw4,fw5,fc1,fc4,fc5,ph2,ph1,pb1,pv2,pv1,m0,ml1,mr1,mh1,mb1,mt1,pt1,wh100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
        <View style={{
            width:"100%",height:80,justifyContent:"space-between",alignItems:"center",
            flexDirection:"row",...pv2,
            borderEndColor:bg5.backgroundColor,borderBottomWidth:0.15,
            borderStartColor:bg5.backgroundColor,borderTopWidth:0.15}}>
            <View style={{width:70,...ml1}}>
                <Image style={{width:70, height:70,borderRadius:65}} source={require("../utilities/usuario.jpg")}/>
            </View>
            <View style={{flex:1,...mh1,height:"100%",justifyContent:"center"}}>
                <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",marginBottom:4}}>
                    <Text style={{...fz3,...fw4,marginRight:4,paddingBottom:2}}>Pedro Lorenzo</Text>
                    <View style={{width:10,height:10,borderRadius:10,backgroundColor:"green"}}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                    <Icon
                    color={"gray"}
                    name="checkmark-done-outline"
                    size={20}/>
                    <Text>me puedes pasar la plata?</Text>
                </View>
            </View>
            <View style={{width:65,...mr1,justifyContent:"center",alignItems:"center"}}>
                <Text>12:03pm</Text>
            </View>
        </View>
      )
  }
export default ItemMessageList;
