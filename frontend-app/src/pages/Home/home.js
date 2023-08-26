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
        <SafeAreaView className="bg-light h-screen flex-1 justify-center items-center">
            <ImageBackground
                source={require('../../assets/newspaper_bkg.png')}
                className="h-full w-[100vw] flex-1 justify-center items-center"
            >
                <Image 
                    source={require('../../assets/valid_logo_transparent.png')}
                    className="h-24 max-w-full scale-50 mt-6"
                    resizeMode="contain"
                />
                <View className="flex flex-col items-center px-10 pb-16 pt-2">
                    <Text className="bg-primary text-black2 font-bold text-2xl mt-6 px-10 py-1">Who are you?</Text>
                    <View className="flex flex-row items-center space-x-6 mt-8">
                        <Text className="text-pri font-bold text-xl basis-1/2 text-center">I'm user</Text>
                        <Text className="text-pri font-bold text-xl basis-1/2 text-center">I'm journalist</Text>
                    </View>
                    <View className="h-56 flex flex-row items-center space-x-6">
                        <TouchableOpacity className="bg-transparent basis-1/2" onPress={() => navigation.navigate("Verifier")}>
                            <Image 
                                source={require('../../assets/avatar_default_bw.png')}
                                className="max-w-full"
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-transparent basis-1/2" onPress={() => navigation.navigate("Validator")}>
                            <Image 
                                source={require('../../assets/avatar_journalist_default_bw.png')}
                                className="max-w-full"
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="bg-primary w-full flex flex-col items-center px-10 py-10">
                    <Text className="text-black2 text-xl text-center w-[70vw]">A solution to check false information by connecting the user to the news source.</Text>
                </View>
                <View className="bg-secondary h-36 flex flex-row items-center space-x-6 px-10 py-10">
                    <Image 
                        source={require('../../assets/bbc-logo-0.png')}
                        className="basis-1/5 px-2"
                        resizeMode="contain"
                    />
                    <Image 
                        source={require('../../assets/cnn-logo-1-1.png')}
                        className="basis-1/5 px-2"
                        resizeMode="contain"
                    />
                    <Image 
                        source={require('../../assets/Symbol-New-York-Times.png')}
                        className="basis-1/5 px-2 scale-75"
                        resizeMode="contain"
                    />
                    <Image 
                        source={require('../../assets/washingtonpost_logo_icon_170226.png')}
                        className="basis-1/5 px-2"
                        resizeMode="contain"
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};  

export default HomeScreen;