import React, { useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import 'nativewind';

const LoginScreen = ({navigation}) => {

    function goToAction(navigation) {
        navigation.navigate("")
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
    };

    return (
        <SafeAreaView className="bg-light flex-1 justify-center items-center px-10">
            {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground> */}
            <Image 
                source={require('../../assets/valid_logo_transparent.png')}
                className="h-40 max-w-full scale-50"
                resizeMode="contain"
            />
            <TextInput
                className="bg-light pl-4 border-b-2 text-xl border-black2 w-full h-16 mt-16 focus:outline-none focus:bg-tertiary"
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                className="bg-light pl-4 border-b-2 text-xl border-black2 w-full h-16 mt-4 focus:outline-none focus:bg-tertiary"
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity className="bg-primary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-24" onPress={() => navigation.navigate("Login")}>
                <Text className="text-black2 text-xl">Entre</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-tertiary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-4" onPress={() => navigation.navigate("Signup")}>
                <Text className="text-black2 text-xl">Cadastre-se</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default LoginScreen;