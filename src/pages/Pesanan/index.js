/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

import Styles from './index.styles';
import * as Api from '../../services/api';
import {IconPesananAktif} from '../../assets';

export default function Index({navigation}) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Api.getUserData()
      .then(res => setUserData(res))
      // eslint-disable-next-line no-alert
      .catch(err => alert(err.message));
  }, []);

  // const item = '';
  const onPressCardView = item => {
    navigation.navigate('Detail', item);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Pesanan Aktif</Text>
        </View>
        <View style={Styles.scrollView}>
          {userData.map(item => (
            <TouchableOpacity
              key={item.id}
              style={Styles.cardView}
              onPress={() => onPressCardView(item)}>
              <View style={Styles.cardView1}>
              <IconPesananAktif />
              </View>
              <View style={Styles.cardView2}>
                <Text style={Styles.text1}>{`${item.first_name}`}</Text>
                <Text style={Styles.text2}>Pesanan {`${item.id}`}</Text>
                <Text style={Styles.text3}>Belum Dicuci</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
