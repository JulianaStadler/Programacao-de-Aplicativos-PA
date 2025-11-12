import { Button } from '@react-navigation/elements';
import { View, Text, StyleSheet, TextInput, Dimensions, Image, Pressable, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function NewPage() {
    return (
        <View style={styles.all}>
            <View style={[styles.all, styles.animatedimages]}>

            </View>
            <View style={[styles.all, styles.content]}>
                <Image 
                    source={require('@/assets/images/breshowlogo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                ></Image>
                <View style={styles.infos}>
                    <TextInput style={styles.input} placeholder='Login'></TextInput>
                    <TextInput style={styles.input} placeholder='Senha'></TextInput>
                    <TouchableOpacity style={styles.bntlogin}>ENTRAR</TouchableOpacity>
                    <Pressable style={styles.esqueci}>Esqueci a Senha</Pressable>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    all: {
        width: width * 1,
        height: height * 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 60,
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif'

    },
    content: {
        paddingBottom: 50,
    },
    animatedimages: {
        position: 'absolute',
        backgroundColor: '#ddd',
        
    },
    logo: {
        width: '50%',
        marginTop: 30,
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#8f8e8e',
        height: 20,
        borderRadius: 150,
        padding: 20,
        marginBottom: 10,
        color: '#4d4c4c'
    },
    bntlogin: {
        backgroundColor: '#1c2120',
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 8,
        marginTop: 5
    },
    esqueci: {
        textAlign: 'center',
        margin: 20,
        fontSize: 12
    },
    infos: {
        width: '80%',
    },
});