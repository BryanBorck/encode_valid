import React, { useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import 'nativewind';

const LoginScreen = ({navigation}) => {

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
                <TouchableOpacity className="bg-primary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-24" onPress={() => navigation.navigate("Home")}>
                    <Text className="text-black2 text-xl">Login as User</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-secondary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-4" onPress={() => navigation.navigate("Signup")}>
                    <Text className="text-light text-xl">Sign up as Journalist</Text>
                </TouchableOpacity>
                <View>
                    <Text className="bg-light px-[10vw] py-2 text-black2 text-md text-center mt-24">You can login without authentication as a user, and you need to signup to send news as a journalist</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default LoginScreen;