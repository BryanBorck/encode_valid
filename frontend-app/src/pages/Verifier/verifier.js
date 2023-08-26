import React, { useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground} from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
// import { useNavigation } from '@react-navigation/native';
import 'nativewind';

const VerifierScreen = ({navigation}) => {

    const [newsToCheck, setNewsToCheck] = useState('');

    return (
        <SafeAreaView className="bg-light flex-1 justify-center items-center px-10">
            <Image 
                    source={require('../../assets/valid_logo_transparent.png')}
                    className="h-40 max-w-full scale-50"
                    resizeMode="contain"
                />
            <View className="bg-black2 h-80 px-10 w-full rounded-[20px] flex sitems-center justify-center">
                {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground> */}
                <Text className="text-light text-xl text-center">Check Information</Text>
                <Text className="text-light text-xl text-center">NOW!</Text>
                <TouchableOpacity className="bg-secondary w-full h-12 border rounded-full shadow-md flex items-center justify-center mt-4" onPress={() => navigation.navigate("")}>
                    <Text className="text-black2 text-xl">Connect your wallet</Text>
                </TouchableOpacity>
                <TextInput
                    className="bg-light pl-4 border-b-2 text-xl border-black2 w-full rounded-full h-12 mt-4 focus:outline-none focus:bg-tertiary"
                    placeholder="News to be checked"
                    value={newsToCheck}
                    onChangeText={setNewsToCheck}
                />
                <TouchableOpacity className="bg-secondary w-full h-12 border rounded-full shadow-md flex items-center justify-center mt-4" onPress={() => navigation.navigate("")}>
                    <Text className="text-black2 text-xl">Check</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};  

export default VerifierScreen;