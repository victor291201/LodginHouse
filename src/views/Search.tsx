/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View,ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPension from '../components/CardPension';
import ItemSearchList from '../components/ItemSearchList';
const Search = () => {
    const [search,setSearch]=useState("");
      const {input1,opacity6,bg1,bg5,bg3,fz4,fz2,fw1,fw2,fw3,fw5,fc1,fc4,pb1,ph1,pv1,m0,mt3,pt1,wh100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
          <View style={{  
            ...bg4,
            ...wh100,
            ...flexCC,
            ...ff1
          }}>
            <View style={{height:"8%", width:"100%",borderEndColor:bg5.backgroundColor,borderBottomWidth:0.15}}>
							<View style={{height:"100%",flexDirection:"row",justifyContent:"space-between", alignItems:"center",...ph1,...pv1}}>
                
                <TextInput 
                value={search} 
                onChangeText={setSearch}
                placeholder='Buscar Pension ...'
                style={{width:"100%",height:"90%", ...bg5,...br2, ...ph1,...pv1}}/>
								
							</View>
              <Icon
											color={bg1.backgroundColor}
											name="search"
											size={30}
                      style={{position:"absolute",right:15,top:15}}
									/>
						</View>
				<View style={{height:"92%",width:"100%", ...bg4}}>
          <ScrollView style={{...pb1,height:"100%"}}>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
            <ItemSearchList/>
          </ScrollView>
				</View>
      </View>
      )
  }
export default Search;
