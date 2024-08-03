/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemSearchList = () => {
      const {input1,opacity6,bg1,bg5,bg3,fz3,fz2,fw1,fw2,fw3,fw5,fc1,fz4,fc5,ph1,pv1,m0,pt1,wH100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
        <View style={{width:"100%",height:50,...ph1,...pv1,justifyContent:"center",
                      borderEndColor:bg5.backgroundColor,borderBottomWidth:0.15,
                      borderStartColor:bg5.backgroundColor,borderTopWidth:0.15}}>
            <Text style={{...fz4}}>asd</Text>
        </View>
      )
  }
export default ItemSearchList;
