import AsyncStorage from '@react-native-async-storage/async-storage';


const storeKey = '@TestApplication';

export const storeData = async (key: string, value: object | string) => {
  try {
    await AsyncStorage.setItem(`${storeKey}:${key}`, JSON.stringify(value));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(`${storeKey}:${key}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const retrieveData = async <T>(key: string): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(`${storeKey}:${key}`);
    if (value !== null) {
      return JSON.parse(value) as T;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};
