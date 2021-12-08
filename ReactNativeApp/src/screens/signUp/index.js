import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function SignUp(){
    return (
        <SafeAreaView>
            <View style={styles.default}>
                <View style={styles.card}>
                    <TextInput placeholder="informe seu e-mail"/>
                    <TextInput placeholder="informe sua senha" secureTextEntry={true}/>
                    <TouchableOpacity>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    default:{
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height
    },
    card: {
        backgroundColor: '#FFFFF',
        paddingHorizontal: 20,
        paddingVertical:30,
        borderRadius:12
    }
});