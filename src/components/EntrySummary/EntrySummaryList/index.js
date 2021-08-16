import React from 'react';
import {Text, View, FlatList, SafeAreaView, StyleSheet } from 'react-native';

const DATA_CAT = [
    {key: '01', title:'Alimentação: $200'},
    {key: '02', title:"Combustível: $12"},
    {key: '03', title:"Aluguel: $120"},
    {key: '04', title:"Lazer: $250"},
    {key: '05', title:"Outros: $1200"}
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const EntrySummaryList = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
 return (
   <View style={styles.container}>
     <Text style={styles.label}>Categorias</Text>
       <SafeAreaView>
          <FlatList 
            data={DATA_CAT}
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
  values:{
    textAlign: 'right',
    fontSize: 22,
}
})

export default EntrySummaryList;
