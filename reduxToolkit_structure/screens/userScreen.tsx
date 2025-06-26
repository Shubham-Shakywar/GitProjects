import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UserSlice, {
  addUser,
  clearAll,
  delteUser,
} from '../redux_toolkit/slices/userSlice';

const UserScreen = () => {
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

  const Data = useSelector(state => state.userReducer);

  const sendData = (data: any) => {
    console.log('send data callll');
    dispatch(UserSlice.actions.addUser(data));
    setValue('');
  };

  const deleteSingleUser = index => {
    dispatch(delteUser(index));
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => deleteSingleUser(index)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        <Text>{item.name}</Text>
        <Text style={{color: 'red'}}>{`delete`}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text>UserScreen</Text>
      <TextInput
        placeholder="enter name"
        value={value}
        onChangeText={setValue}
        placeholderTextColor={'red'}
        style={{borderWidth: 2}}
      />
      <Button onPress={() => sendData({name: value})} title="add user" />

      <FlatList data={Data} renderItem={renderItem} />
      <Button onPress={() => dispatch(clearAll())} title="clear all" />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
