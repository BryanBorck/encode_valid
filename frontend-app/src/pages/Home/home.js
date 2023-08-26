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

    return (
        <SafeAreaView className="bg-light flex-1 justify-center items-center px-10">
            {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground> */}
            <Image 
                source={require('../../assets/valid_logo_transparent.png')}
                className="h-40 max-w-full scale-50"
                resizeMode="contain"
            />
            <Text className="text-black2 text-xl">Write below the piece of text you wish to check if is true or false:</Text>
            <TouchableOpacity className="bg-primary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-6" onPress={() => navigation.navigate("Journalist")}>
                <Text className="text-black2 text-xl">JOURNALIST</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-primary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-6" onPress={() => navigation.navigate("Validator")}>
                <Text className="text-black2 text-xl">VALIDATOR</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-primary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-6" onPress={() => navigation.navigate("Verifier")}>
                <Text className="text-black2 text-xl">VERIFIER</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};  

export default HomeScreen;