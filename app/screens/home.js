import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import styles from '../styles/styles';

const viewportWidth = Dimensions.get('window').width;

class HomePage extends Component {

    render() {
        return (
                <View style={styles.containerChild}>
                    <Image
                        source={require('../components/img/react-logo.png')}
                        style={styles.mainLogo}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('PreLoadScreen');
                        }
                    }

                    style={styles.fetchButton}
                    >
                        <Text style={styles.buttonText}>Fetch Data</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

export default HomePage;
