import React, { useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground} from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
// import { useNavigation } from '@react-navigation/native';
import 'nativewind';

const ValidatorScreen = ({navigation}) => {

    return (
        <SafeAreaView className="bg-light flex-1 justify-center items-center px-10">
            {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground> */}
            <Image 
                source={require('../../assets/valid_logo_transparent.png')}
                className="h-40 max-w-full scale-50"
                resizeMode="contain"
            />
            <Text className="text-black2 text-xl">Validator</Text>
        </SafeAreaView>
    );
};  

export default ValidatorScreen;