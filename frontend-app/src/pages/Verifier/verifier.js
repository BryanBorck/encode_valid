import React, { useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground} from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
// import { useNavigation } from '@react-navigation/native';
import 'nativewind';

const VerifierScreen = ({navigation}) => {

    const [newsToCheck, setNewsToCheck] = useState('');

    return (
        <SafeAreaView className="bg-secondary flex-1 items-center px-6">
            <Image 
                source={require('../../assets/valid_logo_transparent.png')}
                className="h-40 max-w-full scale-50 mt-12"
                resizeMode="contain"
            />
            <Text className="text-light text-xl text-center uppercase pt-10">Check information now!</Text>
            <TouchableOpacity className="bg-light w-full h-12 rounded-full shadow-md flex items-center justify-center mt-8" onPress={() => navigation.navigate("")}>
                <Text className="text-black2 text-xl font-bold">Connect your wallet</Text>
            </TouchableOpacity>
            <Text className="text-light text-xl text-left pt-10 px-4 italic">Write below the piece of text you wish to check if is true or false:</Text>
            <TextInput
                className="bg-light px-8 border-b-2 text-xl border-black2 w-full rounded-full h-12 mt-8 focus:outline-none focus:bg-tertiary"
                placeholder="News to be credit-check"
                value={newsToCheck}
                onChangeText={setNewsToCheck}
            />
            <TouchableOpacity className="bg-primary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-8" onPress={() => navigation.navigate("")}>
                <Text className="text-black2 text-xl font-bold">Check</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};  

export default VerifierScreen;