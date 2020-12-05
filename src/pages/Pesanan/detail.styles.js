/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
// eslint-disable-next-line prettier/prettier

const {width, height} = Dimensions.get('window');
// eslint-disable-next-line prettier/prettier

const main = StyleSheet.create({
  icon:{
    width: 150,
    height: 150,
  },
  container: {
    flex: 2,
    backgroundColor: '#e0ffff',
  // eslint-disable-next-line prettier/prettier
  },
  card: {
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ffff',
    width: '90%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingBottom: 40,
  // eslint-disable-next-line prettier/prettier
  },
  scrollView: {
    // width,
    // height,
    backgroundColor: '#e0ffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  view1: {
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
  },
  view2: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  text: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 30,
  },
  titleContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#000',
    marginTop: 150,
    fontWeight: 'bold',
  },
  margin:
  {marginBottom: 10},
  nameView: {
    marginTop: 8,
    alignItems: 'center',
  },
  text1: {
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 10,
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 23,
    borderBottomWidth: 0.5,
    borderBottomColor: '#4682b4',
  },
  text2: {
    marginTop: 100,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf:'center',
    letterSpacing: 0.3,
  },
  list: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#a5a5a5',
  },
});

export default main;
