import React, { useState} from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground} from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
// import { useNavigation } from '@react-navigation/native';
import 'nativewind';

const JournalistScreen = ({navigation}) => {

    const [cellphoneNumber, setCellphoneNumber] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');

    return (
        <SafeAreaView className="bg-light flex-1 justify-center items-center px-10">
            <Image 
                    source={require('../../assets/valid_logo_transparent.png')}
                    className="h-40 max-w-full scale-50"
                    resizeMode="contain"
                />
            <View className="bg-black2 h-100 px-10 w-full rounded-[20px] flex sitems-center justify-center">
                {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground> */}
                <Text className="text-light text-xl text-center">Journalist Information</Text>
                <TouchableOpacity className="bg-secondary w-full h-12 rounded-full shadow-md flex items-center justify-center mt-4" onPress={() => navigation.navigate("")}>
                    <Text className="text-black2 text-xl">Connect your wallet</Text>
                </TouchableOpacity>
                <TextInput
                    className="bg-light pl-4 border-b-2 text-xl border-black2 w-full rounded-full h-12 mt-4 focus:outline-none focus:bg-tertiary"
                    placeholder="Cellphone Number"
                    value={cellphoneNumber}
                    onChangeText={setCellphoneNumber}
                />
                <TextInput
                    className="bg-light pl-4 border-b-2 text-xl border-black2 w-full rounded-full h-12 mt-4 focus:outline-none focus:bg-tertiary"
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    className="bg-light pl-4 border-b-2 text-xl border-black2 w-full rounded-full h-12 mt-4 focus:outline-none focus:bg-tertiary"
                    placeholder="Company"
                    value={company}
                    onChangeText={setCompany}
                />
                <TouchableOpacity className="bg-secondary w-full h-12 border rounded-full shadow-md flex items-center justify-center mt-4" onPress={() => navigation.navigate("")}>
                    <Text className="text-black2 text-xl">Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};  

export default JournalistScreen;