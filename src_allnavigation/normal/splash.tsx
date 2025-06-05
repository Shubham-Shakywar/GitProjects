import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      setTimeout(() => {
        navigation.navigate('parent');
      }, 500);
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
};

export default Splash;
