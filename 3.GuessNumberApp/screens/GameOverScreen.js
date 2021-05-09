import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOverScreen = props => {
    return <View style={styles.screen}>
        <Text>Game is over !</Text>
        <Text> Number of rounds: {props.roundsNumber}</Text>
        <Text> Number was: {props.userNumber}</Text>
        <Button title="NEW GAME" onPress={props.onRestart}></Button>
    </View>;
};

const styles = StyleSheet.create({
    scren:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;