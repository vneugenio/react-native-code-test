import React, { Component } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/styles';

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: this.props.navigation.state.params.data,
            endButton: 'none'
        }

    }

    componentDidMount() {
        console.log(this.state.users);
    }

    renderUsers(data) {
        return (
            <View style={styles.flatView}>
                <Image style={styles.avatar} source={{uri: data.avatar}}/>
                <Text style={styles.first_name}>{data.first_name}</Text>
                <Text style={styles.last_name}>{data.last_name}</Text>
            </View>
        )
    }

    showButton() {
        this.setState({endButton: 'flex'});
    }

    render() {

        return (
            <View style={styles.users}>
                <FlatList
                    data={this.state.users}
                    keyExtractor={(item) => item.index.toString()}
                    renderItem={({item}) => this.renderUsers(item)}
                    onEndReached={({ distanceFromEnd }) => {
                        console.log('on end reached ');
                        this.showButton();
                    }}
                    onEndReachedThreshold={.25}
                />
                <View style={styles.endButtonContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.popToTop();
                        }
                    }

                    style={[styles.endButton, {display: this.state.endButton}]}
                    >
                        <Text
                            style={styles.buttonText}>
                            End of List Reached
                        </Text>
                        <Text
                            style={[
                                styles.buttonText,
                                {fontSize: 22}
                            ]}>
                            Go To HomeScreen
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


export default Users;
