import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
card:{
        shadowColor: 'black',
        shadowOffset: {height : 2, width : 0},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20
    }
})

export default Card;