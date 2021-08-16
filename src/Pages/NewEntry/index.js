import React from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel';
export default function NewEntry() {
    return (
        <View style={styles.container}>
            <BalanceLabel/>
        <View>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <Button title="GPS"/>
            <Button title="CAMERA"/>
        </View>
        <View>
            <Button title="Adicionar"/>
            <Button title="Cancelar"/>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginLeft:7,
        marginRight:7,
        
    },
    input:{
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 15,
        width: 380,
        marginTop: 20,
    }
});


