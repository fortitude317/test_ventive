import React, { useState } from 'react'
import {
    View, Text, StyleSheet, TextInput
  } from 'react-native';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
    Metrics, Colors, Fonts, Normalize
  } from './../styles/theme';
import DmButton from '../components/DmButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const dark = false
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    const store = useSelector(state => state.user)
    const login = () => {
        const current_user = store.filter(user => {
            if (user.email == email && user.password == password) {
                return true
            }
            return false
        })
        if (current_user.length) {
            navigation.navigate("Dashboard");
        }
    }

    return <KeyboardAwareScrollView
        style={styles.containerBg}
        showsVerticalScrollIndicator={false}
    >
        <View style={styles.container}>
            <View style={styles.titleSection}>
                <Text style={styles.title}>Sign in with your email</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                <TextInput
                    dark={dark}
                    name="email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    style={styles.input}
                    keyType="email-address"
                    placeholder="Email address"
                    autoCapitalize = 'none'
                />
                <TextInput
                    dark={dark}
                    name="password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}
                    isBorderBottom={false}
                    autoCapitalize = 'none'
                />
                </View>
                <DmButton
                    dark={dark}
                    transparent
                    title="Register"
                    action={() => navigation.navigate("Register")}
                    btnStyle={styles.btnStyle}
                    txtStyle={styles.txtStyle}
                />
            </View>
            <View>
                <DmButton dark={dark} title="Login" isLoading={isLoading} action={login} primary />
            </View>
        </View>
    </KeyboardAwareScrollView>
}

const styles = StyleSheet.create({
    container: {
        ...Metrics.formContainer(true),
        flex: 1
    },
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

export default SignIn