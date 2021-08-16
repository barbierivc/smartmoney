import React from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'

const DATA_REALESE = [
    {key: '01', title:'Padaria Asa Branca: $10'},
    {key: '02', title:"Supermercado Isadora: $190"},
    {key: '03', title:"Posto Ipiranga: $190"},

];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
     </View>
);

export default function EntryList() {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Últimos Lançamentos</Text>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA_REALESE}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 3,
        margin: 5,
    },
    label:{
        fontSize: 16, 
        fontWeight: 'bold', 
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10
    },
})

