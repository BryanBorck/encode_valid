import React, { useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground} from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
// import { useNavigation } from '@react-navigation/native';
import 'nativewind';

const HomeScreen = ({navigation}) => {

    function goToAction(navigation) {
        navigation.navigate("")
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
    };

    NativeWindStyleSheet.create({
        "text-black": {
            color: "#000",
        }, 
    });

    return (
        <SafeAreaView className="bg-light flex-1 justify-center items-center">
            <ImageBackground
                source={require('../../assets/newspaper_bkg.png')}
                className="h-full w-[100vw] px-10 flex-1 justify-center items-center"
            >
                {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground> */}
                <Image 
                    source={require('../../assets/valid_logo_transparent.png')}
                    className="h-40 max-w-full scale-50"
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
                <TouchableOpacity className="bg-primary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-24" onPress={() => navigation.navigate("Home")}>
                    <Text className="text-black2 text-xl">Entre</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-tertiary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-4" onPress={() => navigation.navigate("Signup")}>
                    <Text className="text-black2 text-xl">Cadastre-se</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
};  

export default HomeScreen;