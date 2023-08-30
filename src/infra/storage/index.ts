import AsyncStorage from '@react-native-async-storage/async-storage';

import { StorageTokens } from '../../models';

async function setItem(key: StorageTokens, value: any) {
  AsyncStorage.setItem(key, JSON.stringify(value));
}

async function getItem<T>(key: StorageTokens): Promise<T | null> {
  const value = await AsyncStorage.getItem(key);

  if (value) return JSON.parse(value);

  return null;
}

const Storage = { setItem, getItem };

export { Storage };
