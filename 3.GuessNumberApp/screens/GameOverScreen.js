import React from 'react';
import { Button, Image, StyleSheet, View, Text } from 'react-native';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return <View style={styles.screen}>
        <BodyText style={DefaultStyles.bodyText}>Game is over !</BodyText>
        <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMode='cover' source={require('../assets/success.png')} />
        </View>
        <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
                Your phone needed :
            <Text style={styles.highlight}> {props.roundsNumber} </Text>
                rounds to guees the number
            <Text style={styles.highlight}> {props.userNumber} </Text></BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>;
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: '100%',
        height: '100%'
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 30
    },
    highlight:{
        color: Colors.primaryColor,
        fontFamily: 'open-sans-bold',
    },
    resultText:{
        textAlign: 'center',
        fontSize: 20
    },
    resultContainer:{
        marginHorizontal : 30,
        marginVertical: 15
    }

});

export default GameOverScreen;