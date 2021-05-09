import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const NumberContainer = props => {
    return <View style={styles.container}>
        <Text style={styles.number}>{props.children}</Text>
    </View>;
};

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: Colors.accentColor,
        borderRadius : 10,
        padding: 10,
        margin: 10,
        alignItems : 'center',
        justifyContent: 'center'
    },
    number:{
        color : Colors.accentColor,
        fontSize: 20
    }
});

export default NumberContainer;