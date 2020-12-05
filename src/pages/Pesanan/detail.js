/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';

import Styles from './detail.styles';

export default function Detail({route}) {
  const {
    email,
    id,
    first_name,
    last_name,
  } = route.params;

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.view}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>Detail Pesanan</Text>
          </View>
          <View style={Styles.card}>
          <Text style={Styles.text}>Username</Text>
            <Text style = {Styles.text1}>{first_name} {last_name}</Text>
            <Text style={Styles.text}>Rincian</Text>
            <Text style = {Styles.text1}>Pesanan {id}</Text>
            <Text style={Styles.text}>Contact Person</Text>
            <Text style = {Styles.text1}>{email}</Text>
            <Text style={Styles.text}>Quantity</Text>
            <Text style = {Styles.text1}>Total {id} Kg</Text>
            <Text style = {Styles.text2}>Biaya total Rp.{id}0.000</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
