import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface FilterProps {
  setCustomTop: (val: number) => void;
  customTop: number;
}

const Filter = ({ customTop, setCustomTop }: FilterProps) => {
  const toggleStatus = (data: number) => {
    setCustomTop(data);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => toggleStatus(1)}
        style={[
          styles.button,
          styles.rightBorder,
          customTop === 1 ? styles.active:styles.unActive
        ]}
      >
        <Text style={customTop === 1 ? styles.activeText :styles.unActiveText }>FirstTop</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => toggleStatus(2)}
        style={[
          styles.button,
          customTop === 2? styles.active:styles.unActive
        ]}
      >
        <Text style={customTop === 2 ? styles.activeText : styles.unActiveText}>SecondTop</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  rightBorder: {
    borderRightWidth: 1,
    borderColor: 'red',
  },
  active: {
    backgroundColor: '#fdd',
  },
  unActive:{
    backgroundColor:'white'
  },
  activeText: {
    fontWeight: 'bold',
    color: 'red',
  },
  unActiveText:{
    fontWeight:'bold',
    color:'black'
  }
});
