import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import ip from '../ipconfig';
import styles from '../style';

export default function CandidateHome({ route }) {
  const { email } = route.params;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(`${ip}/userdata`, { email: email });
        setUserData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [email]);

  return (
    <View style={styles.loginContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Candidate Home</Text>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>Name: {userData.name}</Text>
          </View>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>Email: {userData.email}</Text>
          </View>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>Mobile: {userData.mobile}</Text>
          </View>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>Password: {userData.password}</Text>
          </View>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>Date of Birth: {userData.dob}</Text>
          </View>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>Gender: {userData.gender}</Text>
          </View>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>Address: {userData.address}</Text>
          </View>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>Passport Number: {userData.passportNumber}</Text>
          </View>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>CNIC: {userData.cnic}</Text>
          </View>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>Party Name: {userData.partyName}</Text>
          </View>
          <View>
            <Text style={[styles.text_header, {fontSize: 15 }]}>Experience: {userData.experience}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

;
