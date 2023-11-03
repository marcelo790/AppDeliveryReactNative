import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';

export const RegisterScreen = () => {

    const {name, lastname, email, phone, password, confirmPassword, onChange} = useViewModel();
    return (
        <View style={styles.container}>
          <Image
            style={styles.imageBackground}
            source={require('../../../../assets/chef.jpg')}
          />
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={require('../../../../assets/user_image.png')}
            />
            <Text style={styles.logoText}>SELECCIONA UNA IMAGE</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.formText}>REGISTRARSE</Text>
            <CustomTextInput 
              image={require('../../../../assets/user.png')}
              keyboardType='default'
              placeholder='Nombres'
              property='name'
              onChangeText={onChange}
              value={name}
            /> 
            <CustomTextInput 
              image={require('../../../../assets/my_user.png')}
              keyboardType='default'
              placeholder='Apellidos'
              property='lastname'
              onChangeText={onChange}
              value={lastname}
            />
            <CustomTextInput 
              image={require('../../../../assets/email.png')}
              keyboardType='email-address'
              placeholder='Correo Electronico'
              property='email'
              onChangeText={onChange}
              value={email}
            />  
            <CustomTextInput 
              image={require('../../../../assets/phone.png')}
              keyboardType='numeric'
              placeholder='Telefono'
              property='phone'
              onChangeText={onChange}
              value={phone}
            />
            <CustomTextInput 
              image={require('../../../../assets/password.png')}
              keyboardType='default'
              placeholder='Contraseña'
              property='password'
              onChangeText={onChange}
              value={password}
              secureTextEntry={true}
            />
            <CustomTextInput 
              image={require('../../../../assets/confirm_password.png')}
              keyboardType='default'
              placeholder='Confirmar Contraseña'
              property='confirmPassword'
              onChangeText={onChange}
              value={confirmPassword}
              secureTextEntry={true}
            />
            <View style={{marginTop: 30}}>
              <RoundedButton text='CONFIRMAR' onPress={() => ToastAndroid.show('CLICK', ToastAndroid.LONG)} />
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
        height: "70%",
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
        top: "5%",
        alignItems: "center"
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
