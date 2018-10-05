import React, { Component } from 'react';
import { Animated, Easing, Platform, StyleSheet, View } from 'react-native';
import styles from '../styles/styles';

class PreLoader extends Component {
    constructor(props) {
        super(props);
        this.scaleValue = new Animated.Value(0);
        this.opacityValue = new Animated.Value(.60);
        this.scaleValue2 = new Animated.Value(0);
        this.opacityValue2 = new Animated.Value(.60);
    }

    componentDidMount() {
        let users = [];
        const url = 'https://reqres.in/api/users?per_page=1';
        let index = 0;

        let pullData = (resource, arr) => {
            fetch(resource)
            .then(res => res.json())
            .then(data => {
            	if(arr.length <= 29) {
                	arr.push(data.data[0]);
                    arr[arr.length-1].index = index;
                    index++;
                	pullData(resource, arr);
            	} else {
                    this.props.navigation.navigate('UsersScreen', {data:arr});
                }
            })
	    	.catch(err => {});
        }

        pullData(url, users);

        this.animateCircle();
    }

    animateCircle(){
        this.scaleValue.setValue(0);
        this.scaleValue2.setValue(0);

        setTimeout(() => {
            this.opacityValue.setValue(.30);
            this.opacityValue2.setValue(.30);
        },1200);

        Animated.parallel([
            Animated.timing(this.opacityValue, {
                toValue: 0,
                duration: 1350,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(this.scaleValue, {
                toValue: 2,
                duration: 1350,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(this.opacityValue2, {
                delay: 400,
                toValue: 0,
                duration: 1350,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(this.scaleValue2, {
                delay: 400,
                toValue: 2,
                duration: 1350,
                easing: Easing.linear,
                useNativeDriver: true
            }),

        ]).start(() => this.animateCircle());

    };

    render() {

        return(
            <View style={styles.dataPage}>
                <View style={styles.innerCircle} />
                <Animated.View
                  style={[
                      {
                          transform: [{scale: this.scaleValue}],
                          opacity: this.opacityValue
                      },
                      styles.outerCircle
                  ]}
                >
                </Animated.View>
                <Animated.View
                  style={[
                      {
                          transform: [{scale: this.scaleValue2}],
                          opacity: this.opacityValue2
                      },
                      styles.outerCircle
                  ]}
                >
                </Animated.View>

            </View>
        );
    }
}

export default PreLoader;
