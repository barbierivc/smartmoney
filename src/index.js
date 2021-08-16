/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Alert,
   FlatList,
 } from 'react-native';
 
 const DATA_CAT = [
   {key: '01', title:'Alimentação: $200'},
   {key: '02', title:"Combustível: $12"},
   {key: '03', title:"Aluguel: $120"},
   {key: '04', title:"Lazer: $250"},
   {key: '05', title:"Outros: $1200"}
 ];
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
 
 const App: () => Node = () => {
    const addEntry  = () => {
             alert("Abrir tela de adicionar lançamentos");
          }
    const renderItem = ({ item }) => (
           <Item title={item.title} />
         );     
     
     return (
       <View style={{padding: 10}}>
         <Text style={{fontSize: 22, 
                       fontWeight: 'bold', 
                       textAlign: 'center',
                       marginTop: 10,
                       marginBottom: 10
                     }}>
                     Saldo Atual: 
         </Text>
         <Text style={{fontSize: 22, 
                       fontWeight: 'bold', 
                       textAlign: 'center',
                       marginTop: 10,
                       marginBottom: 10
                     }}>
                     R$ 9.999,00
         </Text>
         <Button title="Adicionar" onPress={addEntry}></Button>
         <Text style={{fontSize: 22, 
                       fontWeight: 'bold', 
                       textAlign: 'center',
                       marginTop: 10,
                       marginBottom: 10
                     }}>
                       Categorias
         </Text>
         <SafeAreaView style={styles.container}>
           <FlatList
             data={DATA_CAT}
             renderItem={renderItem}
             keyExtractor={item => item.key}
           />
         </SafeAreaView>
         <Text style={{fontSize: 22, 
                       fontWeight: 'bold', 
                       textAlign: 'center',
                       marginTop: 10,
                       marginBottom: 10
                     }}>
                       Últimos Lançamentos
         </Text>
         <SafeAreaView style={styles.container}>
           <FlatList
             data={DATA_REALESE}
             renderItem={renderItem}
             keyExtractor={item => item.key}
           />
         </SafeAreaView>
       </View>
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default App;