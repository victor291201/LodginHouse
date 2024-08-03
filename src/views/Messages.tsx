/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPension from '../components/CardPension';
import ItemMessageList from '../components/ItemMessageList';

interface Props extends StackScreenProps<RootStackParams,"messages">{}
const Messages = ({navigation,route}:Props) => {
    const [email,setEmail]=useState("");
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
      const {input1,opacity6,bg1,bg5,bg3,fz4,fz3,fw1,fw2,fw3,fw4,fw5,fc1,fc4,fc5,ph2,ph1,pb1,pv2,pv1,m0,ml1,mr1,mh1,mb1,mt1,pt1,wh100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
          <View style={{  
                          ...bg4,
                          ...wh100,
                          ...flexCC,
                          ...ff1}}>
            <View style={{height:"8%", width:"100%",borderEndColor:bg5.backgroundColor,borderBottomWidth:0.15}}>
                <View style={{...m0,height:"100%",flexDirection:"row",justifyContent:"space-between", alignItems:"center",...ph1}}>
                
                <TouchableOpacity onPress={()=>{navigation.pop()}}>
                    <Icon
                          color={bg1.backgroundColor}
                          name="arrow-back"
                          size={32}
                          style={{marginLeft:4}}
                      />
                   
                  </TouchableOpacity>
                    <View style={{flexDirection:"row", justifyContent:"space-around",width:75, alignItems:'center', height:50}}>
                        <Icon
                                color={bg3.backgroundColor}
                                name="search"
                                size={32}
                        />
                        <Icon
                                color={bg3.backgroundColor}
                                name="cog"
                                size={32}
                        />
                    </View>
                </View>
            </View>
            <View style={{height:"92%",width:"100%", ...bg4}}>
                <ScrollView style={{...pb1,height:"100%"}}>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.push("chat")}}>
                        <ItemMessageList/>
                    </TouchableOpacity>
                </ScrollView>
            </View>
      </View>
      )
  }
export default Messages;
