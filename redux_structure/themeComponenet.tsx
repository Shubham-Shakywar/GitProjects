import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {useDispatch, useSelector} from 'react-redux';
import {CHANGE_THEME, DECREMENT_COUNT, IncrementCountValue} from './action';
const ThemeComponenet = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  const {increReducer, themeReducer, } = useSelector<any>(state => state);
  const allReducer=useSelector((val)=>val)
  const dispatch = useDispatch();

  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>ThemeComponenet</Text>
      <Button
        title="toggle theme"
        onPress={() => dispatch({type: CHANGE_THEME})}
      />
      <Button
        title="count +"
        onPress={() => dispatch(IncrementCountValue(increReducer + 1))}
      />
    
    </View>
  );
};

export default ThemeComponenet;

const styles = StyleSheet.create({});
