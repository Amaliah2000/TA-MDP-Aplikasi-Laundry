/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {Profile} from '../../assets/images/index';
import {ScrollView} from 'react-native-gesture-handler';

const Akun = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
      <Image source={Profile} style={styles.logo} />
      <Text style={styles.username}>Amaliah Safitri</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Username</Text>
        <Text style={styles.Text}>amaliah_s</Text>
        <Text style={styles.title}>No HP</Text>
        <Text style={styles.Text}>0895335463656</Text>
        <Text style={styles.title}>Alamat</Text>
        <Text style={styles.Text}>Jakarta, JL Perjuangan No 5</Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default Akun;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#e0ffff',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: '#e0ffff',
  },
  logo: {
    marginTop: 50,
    alignSelf: 'center',
    width: windowWidth * 0.5,
    height: windowHeight * 0.28,
    backgroundColor: '#e0ffff',
  },
  username: {
    marginTop: 10,
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
    alignSelf: 'center',
  },
  title: {
    paddingLeft: 30,
    paddingTop: 15,
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 21,
  },
  Text: {
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 10,
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 15,
    borderBottomWidth: 0.5,
  },
  label: {
    fontSize: 25,
    fontFamily: 'TitilliumWeb-Bold',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#e0ffff',
  },
  card: {
    marginTop: 25,
    marginLeft: 30,
    marginRight: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#ffffff',
    height: windowHeight * 0.4,
  },
});
