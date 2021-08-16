import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BalancePanelLabel = () => {
    return (
       <View style={styles.container}>
           <Text style={styles.label} >Saldo Atual:</Text>
           <Text style={styles.value}>$9.999,99</Text>
       </View> 
    );
}

const styles = StyleSheet.create({
    container:{
       alignItems: 'center',    
    },
    label:{
        fontSize: 18,
        padding: 10
    },
    value:{
        fontSize: 26,
        padding: 10,
        fontWeight: 'bold'

    }

});


export default BalancePanelLabel;