/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardPension from '../components/CardPension';
import CheckBox from '@react-native-community/checkbox';
import Header1 from '../components/Header1';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams,"add">{}
const Add = ({navigation,route}:Props) => {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [distance,setDistance]=useState("");
    const [price,setPrice]=useState("");
	const [toggleCheckBox, setToggleCheckBox] = useState(false)
      const {input1,opacity6,bg1,bg5,bg3,fz3,mr1,bg2,mt3,fw3,fw5,fc3,fc4,fc5,ph1,pv1,ph3,m0,mb1,mv2,ph2,mt2,wh100,flexCC,ff1,ff2,bg4,br2} = GlobalStyles;
      return (
          <View style={{  
                          ...bg4,
                          ...wh100,
                          ...flexCC,
                          ...ff1}}>
            
            <Header1 navigate={()=>navigation.push("messages")}/>
						<View style={{height:"93%",width:"100%", ...bg5,...ph1,...pv1,...flexCC}}>
							<View style={{width:"100%", ...bg4,...br2,...ph1,...pv1,justifyContent:"flex-start", alignItems:"center"}}>
							<Text style={{...fc3,...fw5,fontSize:25, ...ff2}}>AGREGAR PENSION</Text>
							<TextInput
								style={{...input1, ...bg5,...fz3,...fw3,...fc3,...pv1,...ph2,...mt2}}
								placeholderTextColor={fc3.color}
								placeholder="Titulo"
								keyboardType="numeric"
								value={title}
								onChangeText={setTitle}
							/>
							<TextInput
								style={{...input1,height:100, ...bg5,...fz3,...fw3,...fc3,...pv1,...ph2,...mt2}}
								placeholderTextColor={fc3.color}
								placeholder="Descripcion"
								keyboardType="numeric"
								value={description}
								onChangeText={setDescription}
								multiline
								textAlignVertical="top"
							/>
							<TextInput
								style={{...input1, ...bg5,...fz3,...fw3,...fc3,...pv1,...ph2,...mt2}}
								placeholderTextColor={fc3.color}
								placeholder="Distancia"
								keyboardType="numeric"
								value={distance}
								onChangeText={setDistance}
							/>
							<TextInput
								style={{...input1, ...bg5,...fz3,...fw3,...fc3,...pv1,...ph2,...mt2}}
								placeholderTextColor={fc3.color}
								placeholder="Precio"
								keyboardType="numeric"
								value={price}
								onChangeText={setPrice}
							/>
								<View style={{width:"100%",...ph3,...mt2,...mb1}}>
									<Text style={{...fw5, color:"black"}}>Caracteristicas</Text>
								</View>
							<View style={{width:"100%",height:200,justifyContent:"flex-start",...ph3}}>
								<ScrollView>
									<View style={{height:35,justifyContent:"flex-start",alignItems:"center", flexDirection:"row",...mr1}}>
										<CheckBox
											disabled={false}
											value={toggleCheckBox}
											onValueChange={(newValue) => setToggleCheckBox(newValue)}
											tintColors={{ true:bg1.backgroundColor, false: 'black' }}
										/>
										<Text>Aire</Text>
									</View>
									<View style={{height:35,justifyContent:"flex-start",alignItems:"center", flexDirection:"row",...mr1}}>
										<CheckBox
											disabled={false}
											value={toggleCheckBox}
											onValueChange={(newValue) => setToggleCheckBox(newValue)}
											tintColors={{ true:bg1.backgroundColor, false: 'black' }}
										/>
										<Text>Wifi</Text>
									</View>
									<View style={{height:35,justifyContent:"flex-start",alignItems:"center", flexDirection:"row",...mr1}}>
										<CheckBox
											disabled={false}
											value={toggleCheckBox}
											onValueChange={(newValue) => setToggleCheckBox(newValue)}
											tintColors={{ true:bg1.backgroundColor, false: 'black' }}
										/>
										<Text>Visitas</Text>
									</View>
									<View style={{height:35,justifyContent:"flex-start",alignItems:"center", flexDirection:"row",...mr1}}>
										<CheckBox
											disabled={false}
											value={toggleCheckBox}
											onValueChange={(newValue) => setToggleCheckBox(newValue)}
											tintColors={{ true:bg1.backgroundColor, false: 'black' }}
										/>
										<Text>Comidas</Text>
									</View>
									<View style={{height:35,justifyContent:"flex-start",alignItems:"center", flexDirection:"row",...mr1}}>
										<CheckBox
											disabled={false}
											value={toggleCheckBox}
											onValueChange={(newValue) => setToggleCheckBox(newValue)}
											tintColors={{ true:bg1.backgroundColor, false: 'black' }}
										/>
										<Text>Servicio de aseo</Text>
									</View>
									<View style={{height:35,justifyContent:"flex-start",alignItems:"center", flexDirection:"row",...mr1}}>
										<CheckBox
											disabled={false}
											value={toggleCheckBox}
											onValueChange={(newValue) => setToggleCheckBox(newValue)}
											tintColors={{ true:bg1.backgroundColor, false: 'black' }}
										/>
										<Text>Servicio de lavanderia</Text>
									</View>
									<View style={{height:35,justifyContent:"flex-start",alignItems:"center", flexDirection:"row",...mr1}}>
										<CheckBox
											disabled={false}
											value={toggleCheckBox}
											onValueChange={(newValue) => setToggleCheckBox(newValue)}
											tintColors={{ true:bg1.backgroundColor, false: 'black' }}
										/>
										<Text>Baño personal</Text>
									</View>
									<View style={{height:35,justifyContent:"flex-start",alignItems:"center", flexDirection:"row",...mr1}}>
										<CheckBox
											disabled={false}
											value={toggleCheckBox}
											onValueChange={(newValue) => setToggleCheckBox(newValue)}
											tintColors={{ true:bg1.backgroundColor, false: 'black' }}
										/>
										<Text>Escaparate</Text>
									</View>
									<View style={{height:35,justifyContent:"flex-start",alignItems:"center", flexDirection:"row",...mr1}}>
										<CheckBox
											disabled={false}
											value={toggleCheckBox}
											onValueChange={(newValue) => setToggleCheckBox(newValue)}
											tintColors={{ true:bg1.backgroundColor, false: 'black' }}
										/>
										<Text>Lavadora</Text>
									</View>
								</ScrollView>
							</View>
								

							<TouchableOpacity style={{ ...bg2,...ph2, ...pv1, ...mt3,...br2}}>
								<Text style={{...fc3,...fw5,...fz3, ...ff2}}>AGREGAR</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
      )
  }
export default Add;
