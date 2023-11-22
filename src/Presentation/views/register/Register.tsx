import React, { useEffect } from 'react'
import {  Text, View, Image, ScrollView, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

export const RegisterScreen = () => {

    const {name, lastname, email, phone, password, confirmPassword, onChange, register,  errorMessage} = useViewModel();
    
    useEffect(() => {
      if(errorMessage != ''){        
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      }
    },[errorMessage])
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
            <ScrollView>
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
                <RoundedButton text='CONFIRMAR' onPress={() => register()} />
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
    
