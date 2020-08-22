import React, { Component } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import CardOptions from '../utils/cardOptions';
import api from '../services/api';

const ICON_SIZE = 180;


class Home extends Component {


    goToComponent = async (name) => {
        this.props.navigation.navigate(name)
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ marginVertical: 8 }}>
                    <CardOptions
                        title="Apex Legends"
                        routeName="Apex"
                        navigation={this.goToComponent}
                        iconName="monetization-on"
                    />
                    <CardOptions
                        title="League of Legends"
                        routeName="LoL"
                        navigation={this.goToComponent}
                        iconName="payment"
                    />
                </ScrollView>
            </View>
        )
    }
}

export default Home;