import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity, Linking, StyleSheet, TextInput
} from 'react-native';
import DmButton from '../components/DmButton';
import {
  Metrics, Colors, Fonts, Normalize
} from './../styles/theme';
import { register } from '../store/user/action';
import { useDispatch } from 'react-redux';

const formState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const formFields = (state) => {  

  return [
    {
      value: state.firstName,
      placeholder: 'First Name',
      name: 'firstName',
      isBorderBottom: true,
    },
    {
      value: state.lastName,
      placeholder: 'Last Name',
      name: 'lastName',
      isBorderBottom: true,
    },
    {
      value: state.email,
      placeholder: 'you@example.com',
      keyType: 'email-address',
      name: 'email',
      isBorderBottom: true,
    },
    {
      value: state.password,
      placeholder: 'Password',
      security: true,
      name: 'password',
      isBorderBottom: false,
    },
  ];
}

const Register = () => {
  const dark = false
  const [state, setState] = useState(formState);
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch()

  function onChange(name, text) {
    const copyState = { ...state };
    copyState[name] = text;
    setState(copyState);
  }

  const onSignUp = () => {
    dispatch(register(state));
    navigation.navigate("Dashboard");
  }

  const moveToAction = () => {

  };

  return <ScrollView style={dmStyle.containerBg} showsVerticalScrollIndicator={false}>
    <View style={dmStyle.container}>
      <Text style={dmStyle.headerText}>Create your credentials</Text>
      <KeyboardAvoidingView style={dmStyle.form}>
        {formFields(state).map((i, k) => (
          <TextInput
            key={k}
            dark={dark}
            value={i.value}
            name={i.name}
            onChangeText={(text) => onChange(i.name, text)}
            placeholder={i.placeholder}
            customStyle={k === 3 && dmStyle.nonBorder}
            style={dmStyle.input}
            keyType={i.keyType ? i.keyType : 'default'}
            secureTextEntry={i.security ? i.security : false}
            isBorderBottom={i.isBorderBottom}
            autoCapitalize = 'none'
          />
        ))}
      </KeyboardAvoidingView>
      <DmButton dark={dark} title="Continue" action={onSignUp} isLoading={false} primary />
      <TouchableOpacity
        style={dmStyle.termsWrapper}
        activeOpacity={0.8}
        onPress={moveToAction}
      >
        <Text style={dmStyle.terms}>
          By continuing you agree with our
          {' '}
          <Text style={dmStyle.termsLink}>terms and</Text>
        </Text>
        <Text style={dmStyle.termsLink}>Conditions.</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
}

const dmStyle = StyleSheet.create({
  container: Metrics.formContainer(true),
  headerText: {
    fontSize: Normalize(21),
    lineHeight: Normalize(25, 'height'),
    color: Colors.mainBlack,
    fontWeight: '700'
  },
  containerBg: {
    backgroundColor: 'white',
  },
  form: {
    width: Metrics.screenWidth * 0.8,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.borderColor,
    padding: 10
  },
  nonBorder: {
    borderBottomWidth: 0,
  },
  pinForm: {
    minHeight: Metrics.minHeight * 0.55,
    alignItems: 'center',
    padding: Metrics.basePadding,
    paddingBottom: 20,
  },
  title: {
    fontSize: Fonts.size.h4,
    fontWeight: 'bold',
    color: Colors.blue,
  },
  subTitle: {
    textAlign: 'center',
    color: 'black',
    marginVertical: Normalize(30, 'height'),
    width: '80%',
  },
  pinText: {
    fontSize: Fonts.size.medium,
    color: Colors.mainBlack,
    fontWeight: 'bold',
    marginTop: Metrics.baseMargin,
    marginBottom: Normalize(40, 'height'),
  },
  resendBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Normalize(30, 'height'),
    marginBottom: Normalize(20, 'height'),
  },
  btnText: {
    color: Colors.gold,
  },
  loadingWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Normalize(20, 'height'),
  },
  termsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  terms: {
    fontSize: Normalize(13),
    lineHeight: Normalize(16, 'height'),
    color: Colors.borderColor
  },
  termsLink: {
    fontSize: Normalize(13),
    lineHeight: Normalize(16, 'height'),
    color: Colors.gold
  },
  selectionBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  selectionPadding: {
    paddingHorizontal: Normalize(20),
  },
  selectionTitle: {
    color: Colors.gold,
    fontSize: Normalize(25),
    lineHeight: Normalize(30, 'height'),
    fontWeight: '700',
    marginTop: Normalize(30, 'height')
  },
  selectionSubTitle: {
    color: Colors.white,
    fontSize: Normalize(15),
    lineHeight: Normalize(18, 'height'),
    marginTop: Normalize(14, 'height'),
    textAlign: 'center',
  },
  selectionBtnGroup: {
    alignItems: 'center',
    marginTop: Normalize(28, 'height'),
  },
  selectionBtnText: {
    color: Colors.gold,
    fontSize: Normalize(15),
    lineHeight: Normalize(20, 'height'),
    fontWeight: '700',
  },
  createWalletBg: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Normalize(26),
    paddingTop: Normalize(80, 'height'),
  },
  createWalletSubTitle: {
    textAlign: 'center',
  },
  createWalletInputGroup: {
    width: '100%',
    borderRadius: 3,
    borderColor: Colors.borderColor,
    borderWidth: 1,
  },
  createWalletBtnGroup: {
    position: 'absolute',
    bottom: Normalize(30),
  },
  completeBtnGroup: {
    position: 'absolute',
    bottom: Normalize(30),
  },
  input: {
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    color: "white"
  }
})

export default Register