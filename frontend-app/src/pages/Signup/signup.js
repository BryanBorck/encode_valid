import React, { useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import 'nativewind';

const SignupScreen = ({navigation}) => {

    const [cellphone, setCellphone] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');

    const handleSignup = () => {
        // Implement your Signup logic here
    };

    return (
        <SafeAreaView className="bg-light flex-1 justify-center items-center">
            <ImageBackground
                source={require('../../assets/newspaper_bkg.png')}
                className="h-full w-[100vw] flex-1 justify-center items-center px-10"
            >
                <Image 
                    source={require('../../assets/valid_logo_transparent.png')}
                    className="h-40 max-w-full scale-50"
                    resizeMode="contain"
                />
                <TextInput
                    className="bg-light pl-4 border-b-2 text-xl border-black2 w-full h-16 mt-16 focus:outline-none focus:bg-tertiary"
                    placeholder="Cellphone"
                    value={cellphone}
                    onChangeText={setCellphone}
                />
                <TextInput
                    className="bg-light pl-4 border-b-2 text-xl border-black2 w-full h-16 mt-4 focus:outline-none focus:bg-tertiary"
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    className="bg-light pl-4 border-b-2 text-xl border-black2 w-full h-16 mt-4 focus:outline-none focus:bg-tertiary"
                    placeholder="Company"
                    secureTextEntry
                    value={company}
                    onChangeText={setCompany}
                />
                <TouchableOpacity className="bg-primary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-24" onPress={() => navigation.navigate("")}>
                    <Text className="text-black2 text-xl">Connect Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-secondary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-4" onPress={() => navigation.navigate("Login")}>
                    <Text className="text-light text-xl">Submit</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default SignupScreen;