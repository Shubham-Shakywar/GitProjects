import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext, useEffect, useState} from 'react';

// Define the context type
interface ThemeContextType {
  isTheme: string;
  toggleTheme: () => void;
}

// Create the context with an initial value of undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

const ThemeProvider = ({children}: any) => {
  const [isTheme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(isTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(()=>{
    const getTheme=async()=>{
const stored=await AsyncStorage.getItem('theme')
console.log("stored=============",stored);
setTheme(stored)
    }

    getTheme()
  },[])
  useEffect(() => {
    const setTheme = async () => {
      await AsyncStorage.setItem('theme', isTheme);
    };
    
    setTheme();
  }, [isTheme]);
  return (
    <ThemeContext.Provider value={{isTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

//make a hook
export const useTheme = () => {
  const Context = useContext(ThemeContext);
  if (!Context) {
    throw new Error('useTheme is not provide');
  }
  return Context;
};
