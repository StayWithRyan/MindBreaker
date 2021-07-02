import AsyncStorage from '@react-native-async-storage/async-storage';
const STORAGE_KEY = 'data6'

const clearData = async () => {
    await AsyncStorage.clear();
}
const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
    } catch (e) {
        alert('storeData: localStorage FAILED')
    }
}
const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
        if (jsonValue === null) {
            alert('localStorage is empty')
        }
        return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        alert('getData: localStorage FAILED')
    }
}
export {
    clearData,
    storeData,
    getData
};