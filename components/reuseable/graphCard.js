import React, { Component } from 'react';
import {TouchableHighlight,StyleSheet} from 'react-native'

import {BarChart} from 'react-native-charts-wrapper';
import {Card,View, CardItem, Body, Right,Left, Text,Icon} from 'native-base';
export default function graphCard({onPress,saleem,aboubakar,ali,account}){
   

    
        let state = {
          legend: {
            enabled: true,
            textSize: 14,
            form: 'SQUARE',
            formSize: 14,
            xEntrySpace: 10,
            yEntrySpace: 5,
            formToTextSpace: 5,
            wordWrapEnabled: true,
            maxSizePercent: 0.5
          },
          data: {
            dataSets: [{
              values: [{y: saleem?saleem:0}, {y: aboubakar?aboubakar:0}, {y: ali?ali:0}],
              label: 'Total Spent',
              config: {
                color: ('green'),
                barShadowColor: ('lightgrey'),
                highlightAlpha: 90,
                highlightColor: ('red'),
              }
            }],
    
            config: {
              barWidth: 0.7,
            }
          },
          highlights: [{x: 3}, {x: 6}],
          xAxis: {
            valueFormatter: ['Saleem',"Aboubakar","Ali"],
            granularityEnabled: true,
            granularity : 1,
          }
        };
return(
  <View>
    <Card style={styles.card}>
    <BarChart
            style={styles.chart}
            data={state.data}
            xAxis={state.xAxis}
            animation={{durationX: 2000}}
            legend={state.legend}
            visibleRange={{x: { min: 5, max: 5 }}}
            drawBarShadow={false}
            drawValueAboveBar={true}
            drawHighlightArrow={true}
            highlights={state.highlights}
            onChange={(event) => console.log(event.nativeEvent)}
          />
          
          </Card>
          {account == "mutual"?
          <View>
          <Card style={styles.card2}>
            <Text>Saleem: {saleem} / 3 = {Math.ceil(saleem/3)}</Text>
            
          </Card>
          <Card style={styles.card2}>
            <Text>Aboubakar: {aboubakar} / 3 = {Math.ceil(aboubakar/3)}</Text>
          </Card>
          
          <Card style={styles.card2}>
            <Text>Ali: {ali}  / 3 = {Math.ceil(ali/3)}</Text>
          </Card>
          </View>
          :
          <View>
          <Card style={styles.card2}>
            <Text>Saleem: {saleem} / 2 = {Math.ceil(saleem/2)}</Text>
            
          </Card>
          <Card style={styles.card2}>
            <Text>Aboubakar: {aboubakar} / 2 = {Math.ceil(aboubakar/2)}</Text>
          </Card>
          
          <Card style={styles.card2}>
            <Text>Ali: {ali}  / 2 = {Math.ceil(ali/2)}</Text>
          </Card>
          </View>
          }
         </View>
          
    
);
}
const styles = StyleSheet.create({
    chart:{
        flex:1
    },
    card:{
        height:200,
        padding:'2%'
    },
    card2:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:'2%'
    }
})