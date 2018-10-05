import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const viewportHeight = Dimensions.get('window').height;
const viewportWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    containerChild: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        height: viewportHeight,
        justifyContent: 'space-evenly',
        position: 'absolute',
        width: viewportWidth,
        zIndex: 20,
    },
    mainLogo: {
        height: 250,
        width: 250,
    },
    fetchButton: {
        alignItems: 'center',
        backgroundColor: '#32dfff',
        borderColor: '#02D5DB',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 8,
        flexDirection: 'column',
        height: 60,
        justifyContent: 'center',
        width: 300
    },
    endButton: {
        alignItems: 'center',
        backgroundColor: '#32dfff',
        borderColor: '#02D5DB',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 8,
        flexDirection: 'column',
        height: 100,
        justifyContent: 'center',
        width: 300
    },
    endButtonContainer: {
        bottom: 5,
        display: 'flex',
        position: 'absolute',
        zIndex: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontFamily: 'whitney',
        fontSize: 35
    },
    dataPage: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 1
    },
    innerCircle: {
        backgroundColor: '#9acd32',
        borderRadius: 50,
        height: 25,
        position: 'absolute',
        width: 25,
        zIndex: 7,
    },
    outerCircle: {
        backgroundColor: '#556b2f',
        borderRadius: 90,
        height: 100,
        position: 'absolute',
        width: 100,
        zIndex: 3,
    },
    users: {
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        zIndex: 1,
    },
    flatView: {
        alignItems: 'center',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        flexDirection: 'row',
        padding: 8,
    },
    avatar: {
        borderRadius: 50,
        height: 80,
        width: 80
    },
    first_name: {
        color: '#000000',
        fontFamily: 'whitney',
        fontSize: 25,
        marginLeft: 20,
    },
    last_name: {
        color: '#000000',
        fontFamily: 'whitney',
        fontSize: 25,
        marginLeft: 10,
    }
});
