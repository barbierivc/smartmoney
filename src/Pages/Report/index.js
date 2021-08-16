import React from 'react'
import { View, StyleSheet, Button  } from 'react-native'

import {Picker} from '@react-native-picker/picker'

import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import BalanceLabel from '../../components/BalanceLabel';

export default function Report(){
    
    return (
        <View>
            <BalanceLabel/>
            <View>
                
                <Picker >
                    <Picker.Item  label="Todas Categorias" />
                </Picker>
                <Picker>
                    <Picker.Item  label="Últimos 7 dias" />
                </Picker>
                
            </View>
            <EntrySummary/>
            <EntryList/>
            <View>
                <Button title="Salvar"/>
                <Button title="Fechar"/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
})

