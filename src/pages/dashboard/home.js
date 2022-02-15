import React, {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import DmButton from '../../components/DmButton'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(false);

    const logout = () => {
        navigation.navigate("Sign-in");
    }

    return <View>
        <Text>Home</Text>
        <DmButton dark={true} title="Log Out" isLoading={isLoading} action={logout} primary />
    </View>
}

const styles = StyleSheet.create({
    btnStyle: {
    }
})

export default Home