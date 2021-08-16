import React from 'react';
import { View, StyleSheet } from 'react-native';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

const EntrySummary = () => {
 return (
   <View>
       <EntrySummaryList></EntrySummaryList>
       <EntrySummaryChart></EntrySummaryChart>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
});


export default EntrySummary;