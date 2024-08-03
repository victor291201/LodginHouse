/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View,ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPension from '../components/CardPension';
import ItemSearchList from '../components/ItemSearchList';

interface Props extends StackScreenProps<RootStackParams,"chat">{}
const Chat = ({navigation,route}:Props) => {
    const [search,setSearch]=useState("");
      const {input1,opacity6,bg1,bg2,bg5,bg3,fz4,fz3,fz2,fw1,fw2,fw3,fw4,fw5,fc2,fc4,pb1,ph1,ph2,pv1,pv2,m0,mr1,mt1,ml1,mh1,mt3,pt1,wh100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
          <View style={{  
            ...bg4,
            ...wh100,
            ...flexCC,
            ...ff1
          }}>
            <View style={{height:"8%", width:"100%",borderEndColor:bg5.backgroundColor,
            borderBottomWidth:0.15,flexDirection:"row",justifyContent:"flex-start", alignItems:"center"}}>
                  <TouchableOpacity onPress={()=>{navigation.pop()}}>
                    <Icon
                          color={bg1.backgroundColor}
                          name="arrow-back"
                          size={32}
                          style={{marginLeft:4}}
                      />
                   
                  </TouchableOpacity>
                  <Image style={{width:50, height:50,borderRadius:65,...mr1}} source={require("../utilities/usuario.jpg")}/>
                <Text style={{...fz3,...fw3,marginRight:4}}>Pedro Lorenzo</Text>
								
						</View>
				<View style={{height:"84%",width:"100%", ...bg4}}>
          <View style={{...pb1,height:"100%",justifyContent:"flex-end",...ph1,...pv1}}>
            <View style={{width:"100%",alignItems:"flex-end",...mt1}}>
              <View style={{...pv2,...ph2,borderRadius:25, backgroundColor:bg1.backgroundColor}}>
                <Text style={{...fc2}}>Hola</Text>
              </View>
            </View>
            <View style={{width:"100%",alignItems:"flex-start",...mt1}}>
              <View style={{...pv2,...ph2,borderRadius:25, backgroundColor:bg2.backgroundColor}}>
                <Text style={{...fc2}}>Hola</Text>
              </View>
            </View>
            <View style={{width:"100%",alignItems:"flex-end",...mt1}}>
              <View style={{...pv2,...ph2,borderRadius:25, backgroundColor:bg1.backgroundColor}}>
                <Text style={{...fc2}}>me puedes pasar la plata?</Text>
              </View>
            </View>
          </View>
				</View>

        <View style={{height:"8%", width:"100%"}}>
							<View style={{...m0,height:"100%",flexDirection:"row",justifyContent:"space-between", alignItems:"center",...ph1,...pv1, position:"relative"}}>
                <TextInput 
                value={search} 
                onChangeText={setSearch}
                placeholder='Mensaje'
                style={{width:"100%",height:"100%", ...bg5,...br2, ...ph1,...pv1}}/>
                <Icon
											color={bg1.backgroundColor}
											name="send"
											size={25}
                      style={{position:"absolute", right:17}}
									/>
								
							</View>
						</View>
      </View>
      )
  }
export default Chat;
