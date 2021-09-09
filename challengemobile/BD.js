import AsyncStorage from "@react-native-async-storage/async-storage"


const insertString = async(key,value,callback = null) => {
    try{
        await AsyncStorage.setItem(key,value,callback);
    }
    catch (e) {
        throw new Error("Nao foi possivel inserir os dados");
    }
}

const insertObject = async(key,value,callback = null) => {
    try{
        const json = JSON.stringify(value)
        await AsyncStorage.setItem(key,json,callback);
    }
    catch (e) {
        throw new Error("Nao foi possivel inserir o objeto")
    }
}

const read = async(key,callback = null) => {
    try{
        const value = await AsyncStorage.getItem(key,callback)
        return value
    }
    catch (e) {
        throw new Error("Nao foi possivel pesquisar o dado")
    }
}


const allKeys = async(callback = null) => {
    try{
        await AsyncStorage.getAllKeys(callback)
    }
    catch (e) {
        throw new Error("Nao foi possivel pegar todas as chaves")
    }
}

const remove = async(key, callback = null) => {
    try{
        await AsyncStorage.removeItem(key,callback)
    }
    catch (e) {
        throw new Error("Nao foi possivel remover os dados")
    }
}

const clear = async( callback = null) => {
    try{
        await AsyncStorage.clear(callback)
    }
    catch (e) {
        throw new Error("Nao foi possivel remover os dados")
    }
}

export {insertObject}
export {insertString}
export {read}
export {allKeys}
export {remove}
export {clear}