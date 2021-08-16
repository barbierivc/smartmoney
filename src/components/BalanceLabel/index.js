import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BalanceLabel() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}>$9.999,99</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex: 2,
        height: 250,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        marginTop: 5,
        marginBottom: 20,

    },
    label:{
        fontSize: 18,
        paddingBottom: 5,

    },
    value:{
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 15,
        color: '#FFF',
        backgroundColor: 'blue',
        width: 190,
        
        textAlign: 'center',
        
    },
})

