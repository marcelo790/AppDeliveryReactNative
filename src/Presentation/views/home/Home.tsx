import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';

export const HomeScreen = () => {

    const {email, password, onChange} = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
          <Image
            style={styles.imageBackground}
            source={require('../../../../assets/chef.jpg')}
          />
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={require('../../../../assets/logo.png')}
            />
            <Text style={styles.logoText}>FOOD APP</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.formText}>INGRESAR</Text>
            <CustomTextInput
              image={require('../../../../assets/email.png')}
              placeholder='Correo Electronico'
              keyboardType='email-address'
              property='email'
              onChangeText={onChange}
              value={email}
            />
            <CustomTextInput
              image={require('../../../../assets/password.png')}
              placeholder='Contraseña'
              keyboardType='default'
              property='password'
              onChangeText={onChange}
              value={password}
              secureTextEntry={true}
            />            
            <View style={{marginTop: 30}}>
              <RoundedButton text='ENTRAR' onPress={() => ToastAndroid.show('CLICK', ToastAndroid.LONG)} />
            </View>
            <View style={styles.formRegister}>
              <Text>No tienes cuenta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.formRegisterText}>Registrate</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageBackground:{
        width: "100%",
        height: "100%",
        opacity: 0.7,
        bottom: "30%"
      },
      form:{
        width: "100%",
        height: "40%",
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
      },
      formInput:{
        flexDirection:"row",
        marginTop: 30
      },
      formIcon:{
        width:25,
        height:25,
        marginTop: 5
      },
      logoContainer:{
        position:"absolute",
        alignSelf: "center",
        top: "15%"
      },
      logoImage:{
        width: 100,
        height: 100
      },
      logoText:{
        color:"white",
        textAlign:"center",
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold"
      },
      formText:{
        fontWeight: "bold",
        fontSize: 16
      },
      formTextInput:{
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
        marginLeft:15
      },
      formRegister:{
        flexDirection: "row",
        justifyContent:"center",
        marginTop: 30
      },
      formRegisterText:{
        fontStyle: "italic",
        color:"orange",
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        fontWeight: "bold",
        marginLeft: 10
      }
    });
