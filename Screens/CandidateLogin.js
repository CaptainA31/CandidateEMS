import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native'
import React, { useState } from 'react'
import styles from '../style'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import ip from '../ipconfig'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function CandidateLogin(props) {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(){
        const userData = {
            email: email,
            password: password,
        }

        axios
        .post(`${ip}/login-user`, userData)
        .then((res) => {
            console.log(res.data); // Log the response
            if (res.data.data === "Login Successfull") {
                Alert.alert("Login Successful");
                navigation.navigate('CandidateHome', { email: email });
            } else {
                Alert.alert("Login Failed");
            }
        })
        .catch((error) => {
            console.log(error); // Log any errors
            Alert.alert("Network Error", error.message);
        });

    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps= "always">
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View>
                <View style={styles.loginContainer}>
                    <Text style={[styles.text_header, {textAlign: 'center'}]}>
                        Candidate Login!
                    </Text>

                    <View style={styles.action}>
                        <TextInput placeholder='Mobile or Email' style={styles.textInput} onChange={e => setEmail(e.nativeEvent.text)}/>
                    </View>
                    <View style={styles.action}>
                        <TextInput placeholder='Password' style={styles.textInput} onChange={e => setPassword(e.nativeEvent.text)}/>
                    </View>
                    {/* <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: "flex-end", marginTop: 8, marginRight: 10, }}>
                        <Text>Forgot Password</Text>
                    </TouchableOpacity> */}

                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
                        <Text style={styles.textSign}>
                            Log in
                        </Text>
                    </TouchableOpacity>

                     <View style={{padding: 15}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: "#919191"}}>
                            {/* --as  */}
                        </Text>
                    </View>

                    <View style={styles.bottomButton}>
                        <TouchableOpacity style={styles.inBut2}>
                            <FontAwesome name="google" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.inBut2}>
                            <FontAwesome name="facebook" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.inBut2}>
                            <FontAwesome name="twitter" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.inBut2}>
                            <FontAwesome name="linkedin" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text style={[styles.text_header, {textAlign: 'center', fontSize: 15}]}>
                        Don't have an account?
                    </Text>
                </View>

                <View style={styles.bottomButton}>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <TouchableOpacity style={[styles.inBut2, {width: 100}]} onPress={() => {navigation.navigate("CandidateRegister")}}>
                            <View>
                                <Text style={styles.textSign}>
                                    Sign in
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.bottomText}></Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
