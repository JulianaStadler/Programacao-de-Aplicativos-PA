import { Button } from '@react-navigation/elements';
import { View, Text, StyleSheet, TextInput, Dimensions, Image, Pressable, TouchableOpacity, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebaseConfig';
import { useState } from 'react';
import { router } from 'expo-router';
import Swal from 'sweetalert2';

const { width, height } = Dimensions.get('window');

export default function NewPage() {
    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const minPassword = 6;
    
    
    const singUp = async () => {
        //nao pode ter menos de 6 caracteres na senha
        if(password.length < minPassword)
            return Swal.fire({
                icon: "error",
                title: "Erro",
                text: "A senha deve conter ao menos 6 caracteres."
            });
        
        //confimar a senha
        if(!(password === confirmPassword))
            return Swal.fire({
                icon: "error",
                title: "Erro",
                text: "As senhas precisam ser identicas."
            });
        
        //nao pode cadastrar o mesmo email
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Swal.fire({
                icon: "success",
                title: "sucesso",
                text: "Cadastrado com sucesso!"
            });
            return router.navigate('/login')
        }
        catch(e) {
            return Swal.fire({
                icon: "error",
                title: "sucesso",
                text: "Email já existe!" + e
            });
        }

        return;
        
    }

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
                    <Text style={styles.title}>Criar Conta</Text>
                    <TextInput style={styles.input} placeholder='Email' onChangeText={(value) => setEmail(value)}></TextInput>
                    <TextInput style={styles.input} placeholder='Senha' onChangeText={(value) => setPassword(value)}></TextInput>
                    <TextInput style={styles.input} placeholder='Confirme a senha' onChangeText={(value) => setConfirmPassword(value)}></TextInput>
                    <TouchableOpacity onPress={() => singUp()}><View><Text style={styles.bntlogin}>Registrar</Text></View></TouchableOpacity>
                    <Pressable><Text style={styles.esquecimaior}>Fazer Login</Text></Pressable>
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
    esquecimaior: {
        textAlign: 'center',
        margin: 20,
        fontSize: 12,
        fontWeight: 900,
        textTransform: 'uppercase',
        color: 'black'
    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 900,
        textTransform: 'uppercase',
        color: 'black'
    },
    infos: {
        width: '80%',
    },
});