import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image, SafeAreaView, StatusBar  } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../style'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import ip from '../ipconfig';

export default function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [cnic, setCnic] = useState('');
    const [partyName, setPartyName] = useState('');
    const [experience, setExperience] = useState('');
    const [signature, setSignature] = useState('');

    const [nameVerify, setNameVerify] = useState(false);
    const [emailVerify, setEmailVerify] = useState(false);
    const [mobileVerify, setMobileVerify] = useState(false);
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [dobVerify, setDobVerify] = useState('');
    const [genderVerify, setGenderVerify] = useState('');
    const [addressVerify, setAddressVerify] = useState('');
    const [passportNumberVerify, setPassportNumberVerify] = useState('');
    const [cnicVerify, setCnicVerify] = useState('');
    const [partyNameVerify, setPartyNameVerify] = useState('');
    const [experienceVerify, setExperienceVerify] = useState('');
    const [signatureVerify, setSignatureVerify] = useState('');

    const [showDatePicker, setShowDatePicker] = useState(false);
    const navigation = useNavigation()

    function handleSubmit() {
        const userData = {
            name,
            email,
            mobile,
            password,
            dob,
            gender,
            address,
            passportNumber:passportNumber.toString(),
            cnic,
            partyName,
            experience,
        };
        console.log("Name:"+nameVerify + " Email:" + emailVerify+ " Password:" + passwordVerify+ " Mobile:" + mobileVerify + " dob:" + dobVerify + " Gender:" + genderVerify + " Address:" + addressVerify + " Passport:" + passportNumberVerify + " cnic:" + cnicVerify + " ofParty:" + partyNameVerify  + " Experience:" + experienceVerify  + " Sign:" + signatureVerify);
        if (nameVerify && emailVerify && mobileVerify && passwordVerify && dobVerify && genderVerify && addressVerify && passportNumberVerify && cnicVerify && partyNameVerify && experienceVerify){
            axios
            .post(`${ip}/register`, userData)
            .then((res) => {
                console.log(res.data); // Log the response
                if (res.data.status === "ok") {
                    Alert.alert("Registration Successful");
                    navigation.navigate("CandidateLogin");
                } else {
                    Alert.alert("Registration Failed", res.data.error);
                }
            })
            .catch((error) => {
                console.log(error); // Log any errors
                Alert.alert("Network Error", error.message);
            });

        } else {
            Alert.alert("Fill in all details")
        }
    }
    

    // useEffect(() => {
    //     (async () => {
    //         if (Constants.platform?.android) {
    //             const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //             if (status !== 'granted') {
    //                 Alert.alert('Sorry, we need camera roll permissions to make this work!');
    //             }
    //         }
    //     })();
    // }, []);

    function handleName(text) {
        setName(text);
        setNameVerify(text.length > 1);
    }

    function handleEmail(text) {
        setEmail(text);
        setEmailVerify(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(text));
    }

    function handlePassword(text) {
        setPassword(text);
        setPasswordVerify(text.length > 5);
    }

    function handleMobile(text) {
        setMobile(text);
        setMobileVerify(/^\d{11}$/.test(text) && text.startsWith('0'));
    }

    const handledob = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setDob(currentDate.toISOString().split('T')[0]); // Formatting the date to YYYY-MM-DD
        setDobVerify(true);
        setShowDatePicker(false);
    };

    function handleGender(selectedGender) {
        setGender(selectedGender);
        setGenderVerify(selectedGender !== "None");
        // console.log(selectedGender + " " + (selectedGender !== "None"));
    }
    
    function handleAddress(text) {
        setAddress(text);
        setAddressVerify(text.length > 0);
    }

    function handlePassportNumber(text) {
        setPassportNumber(text);
        setPassportNumberVerify(text.length === 9);
    }
    

    function handleCnic(text) {
        setCnic(text);
        setCnicVerify(text.length === 13 && /^\d+$/.test(text));
    }

    function handlePartyName(text) {
        setPartyName(text);
        setPartyNameVerify(text.length > 0);
    }

    function handleExperience(text){
        setExperience(text);
        setExperienceVerify(text.length > 0);
    };

    // const handleSignature = async () => {
    //     try {
    //         let result = await ImagePicker.launchImageLibraryAsync({
    //             mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //             allowsEditing: true,
    //             aspect: [4, 3],
    //             quality: 1,
    //         });
    //         if (!result.cancelled) {
    //             setSignature(result.uri);
    //             setSignatureVerify(true);
    //         }
    //     } catch (E) {
    //         console.log(E);
    //     }
    // };
    
    // function handleSignature() {
    //     const selectPhoto=()=>{
    //         ImagePicker.openPicker({
    //             width: 300,
    //             height: 400,
    //             cropping: true,
    //             includeBase64: trues
    //           }).then(image => {
    //             console.log(image);
    //         });
    //     }
    // }




    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always">
                <View>
                    <View style={styles.loginContainer}>
                        <Text style={styles.text_header}>
                            Register!
                        </Text>
                        
                        {/* Name */}
                        <View style={styles.action}>
                            <FontAwesome name='user-o' color="#430475" style={styles.smallIcon} />
                            <TextInput
                                placeholder='Name'
                                style={styles.textInput}
                                onChangeText={text => handleName(text)}
                            />
                            {name.length < 1 ? null : nameVerify ? (
                                <FontAwesome name='check-circle' color="green" size={20} />
                            ) : (
                                <FontAwesome name='exclamation' color="red" size={20} />
                            )}
                        </View>
                        {name.length < 1 ? null : nameVerify ? null :
                            <Text style={{ marginLeft: 20, color: "red" }}>
                                Name should be more than 1 characters
                            </Text>
                        }

                        {/* Mobile */}
                        <View style={styles.action}>
                            <FontAwesome name='mobile' color="#430475" style={styles.smallIcon} />
                            <TextInput
                                placeholder='Mobile'
                                style={styles.textInput}
                                onChangeText={text => handleMobile(text)}
                                maxLength={11}
                                keyboardType='numeric'
                            />
                            {mobile.length < 1 ? null : mobileVerify ? (
                                <FontAwesome name='check-circle' color="green" size={20} />
                            ) : (
                                <FontAwesome name='exclamation' color="red" size={20} />
                            )}
                        </View>
                        {mobile.length < 1 ? null : mobileVerify ? null :
                            <Text style={{ marginLeft: 20, color: "red" }}>
                                Phone number with 11 digits
                            </Text>
                        }






















                        {/* Date of Birth */}
                        <View style={styles.action}>
                            <FontAwesome name='calendar' color="#430475" style={styles.smallIcon} />
                            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                                <Text style={[styles.textInput, { flex: 1 }]}>
                                    {dob || 'Date of Birth (YYYY-MM-DD)'}
                                </Text>
                            </TouchableOpacity>
                            {dob.length > 0 && (dobVerify ? (
                                <FontAwesome name='check-circle' color="green" size={20} />
                            ) : (
                                <FontAwesome name='exclamation' color="red" size={20} />
                            ))}
                        </View>
                        {dob.length > 0 && !dobVerify && (
                            <Text style={{ marginLeft: 20, color: "red" }}>Enter a valid date of birth (YYYY-MM-DD)</Text>
                        )}
                        {showDatePicker && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={dob ? new Date(dob) : new Date()}
                                mode="date"
                                display="default"
                                onChange={handledob}
                            />
                        )}

                        {/* Gender */}
                        <View style={styles.action}>
                            <FontAwesome name='venus-mars' color="#430475" style={styles.smallIcon} />
                            <Picker
                                style={styles.textInput}
                                selectedValue={gender}
                                onValueChange={(itemValue, itemIndex) =>
                                    handleGender(itemValue)
                                }>
                                <Picker.Item label="Select Gender" value="None" />
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                                <Picker.Item label="Other" value="Other" />
                            </Picker>
                        </View>
                        {gender === "None" && (
                            <Text style={{ marginLeft: 20, color: "red" }}>
                                Please select a gender
                            </Text>
    )}



                        
                        {/* address */}
                        <View style={styles.action}>
                            <FontAwesome name='address-card' color="#430475" style={styles.smallIcon} />
                            <TextInput
                                placeholder='Address'
                                style={styles.textInput}
                                onChangeText={text => handleAddress(text)}
                            />
                            {address.length < 1 ? null : addressVerify ? (
                                <FontAwesome name='check-circle' color="green" size={20} />
                            ) : (
                                <FontAwesome name='exclamation' color="red" size={20} />
                            )}
                        </View>
                        {address.length < 1 ? null : addressVerify ? null :
                            <Text style={{ marginLeft: 20, color: "red" }}>
                                Address should not be empty
                            </Text>
                        }

                        {/* Passport Number */}
                        <View style={styles.action}>
                            <FontAwesome name='id-card' color="#430475" style={styles.smallIcon} />
                            <TextInput
                                placeholder='Passport Number'
                                style={styles.textInput}
                                onChangeText={text => handlePassportNumber(text)}
                                maxLength={9}
                            />
                            {passportNumber.length < 9 ? null : passportNumberVerify ? (
                                <FontAwesome name='check-circle' color="green" size={20} />
                            ) : (
                                <FontAwesome name='exclamation' color="red" size={20} />
                            )}
                        </View>
                        {passportNumber.length < 9 ? null : passportNumberVerify ? null :
                            <Text style={{ marginLeft: 20, color: "red" }}>
                                Passport Number should be of length 9
                            </Text>
                        }

                        {/* CNIC */}
                        <View style={styles.action}>
                            <FontAwesome name='id-card' color="#430475" style={styles.smallIcon} />
                            <TextInput
                                placeholder='CNIC'
                                style={styles.textInput}
                                onChangeText={text => handleCnic(text)}
                                maxLength={13}
                                keyboardType='numeric'
                            />
                            {cnic.length < 1 ? null : cnicVerify ? (
                                <FontAwesome name='check-circle' color="green" size={20} />
                            ) : (
                                <FontAwesome name='exclamation' color="red" size={20} />
                            )}
                        </View>
                        {cnic.length < 13 ? null : cnicVerify ? null :
                            <Text style={{ marginLeft: 20, color: "red" }}>
                                CNIC should be of 13 digits
                            </Text>
                        }

                        {/* Party Name */}
                        <View style={styles.action}>
                            <FontAwesome name='flag' color="#430475" style={styles.smallIcon} />
                            <TextInput
                                placeholder='Party Name'
                                style={styles.textInput}
                                onChangeText={text => handlePartyName(text)}
                            />
                            {partyName.length < 1 ? null : partyNameVerify ? (
                                <FontAwesome name='check-circle' color="green" size={20} />
                            ) : (
                                <FontAwesome name='exclamation' color="red" size={20} />
                            )}
                        </View>
                        {partyName.length < 1 ? null : partyNameVerify ? null :
                            <Text style={{ marginLeft: 20, color: "red" }}>
                                Party Name should not be empty
                            </Text>
                        }

                        {/* Experience */}
                        <View style={[styles.action, { height: 150 }]}>
                            <FontAwesome name='users' color="#430475" style={styles.smallIcon} />
                            <TextInput
                                placeholder='Experience'
                                style={[styles.textInput, { height: 130 }]}
                                multiline={true}
                                numberOfLines={5}
                                onChangeText={text => handleExperience(text)}
                            />
                            {experience.length < 1 ? null : experienceVerify ? (
                                <FontAwesome name='check-circle' color="green" size={20} />
                            ) : (
                                <FontAwesome name='exclamation' color="red" size={20} />
                            )}
                        </View>
                        {experience.length < 1 ? null : experienceVerify ? null :
                            <Text style={{ marginLeft: 20, color: "red" }}>
                                Experience should not be empty
                            </Text>
                        }

                        {/* Signature
                        <TouchableOpacity onPress={handleSignature}>
                            <View style={styles.action}>
                                <FontAwesome name='pencil' color="#430475" style={styles.smallIcon} />
                                <Text style={[styles.textInput, { height: 40, lineHeight: 40, flex: 1 }]}>
                                    {signature ? 'Image uploaded' : 'Upload Signature'}
                                </Text>
                                {signature ? (
                                    <FontAwesome name='check-circle' color='green' size={20} />
                                ) : (
                                    <FontAwesome name='exclamation' color='red' size={20} />
                                )}
                            </View>
                        </TouchableOpacity>
                        {!signature && (
                            <Text style={{ marginLeft: 20, color: 'red' }}>Please upload your signature</Text>
                        )}
                        {signature && (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={{ uri: signature }} style={{ width: 200, height: 200 }} />
                                <TouchableOpacity onPress={handleSignature} style={styles.commandButton}>
                                    <Text style={styles.panelButtonTitle}>Update Image</Text>
                                </TouchableOpacity>
                            </View>
                        )} */}



























                        <View style={styles.action}>
                            <FontAwesome name='envelope' color="#430475" style={styles.smallIcon} />
                            <TextInput
                                placeholder='Email'
                                style={styles.textInput}
                                onChangeText={text => handleEmail(text)}
                            />
                            {email.length < 1 ? null : emailVerify ? (
                                <FontAwesome name='check-circle' color="green" size={20} />
                            ) : (
                                <FontAwesome name='exclamation' color="red" size={20} />
                            )}
                        </View>
                        {email.length < 1 ? null : emailVerify ? null :
                            <Text style={{ marginLeft: 20, color: "red" }}>
                                Enter proper email address
                            </Text>
                        }

                        
                        <View style={styles.action}>
                            <FontAwesome name='lock' color="#430475" style={styles.smallIcon} />
                            <TextInput
                                placeholder='Password'
                                style={styles.textInput}
                                onChangeText={text => handlePassword(text)}
                                secureTextEntry={showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                {password.length < 1 ? null : !showPassword ? (
                                    <FontAwesome name='eye-slash' color={passwordVerify ? 'green' : 'red'} style={styles.smallIcon} />
                                ) : (
                                    <FontAwesome name='eye' color={passwordVerify ? 'green' : 'red'} style={styles.smallIcon} />
                                )}
                            </TouchableOpacity>
                        </View>
                        {password.length < 1 ? null : passwordVerify ? null :
                            <Text style={{ marginLeft: 20, color: "red" }}>
                                Password length not greater than 5
                            </Text>
                        }

                    

                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity style={styles.inBut} onPress={handleSubmit}>
                            <View>
                                <Text style={styles.textSign}>
                                    Register
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
