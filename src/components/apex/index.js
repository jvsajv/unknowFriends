import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements'

import styles from './style.js'

import api from '../services/api.js'

class Apex extends Component {

    state = {
        user: '',
        nick: '',
        lvl: '',
        rank: '',
        loaded: ''
    }

    componentDidMount = async () => {

        await this.apexTracker();

    }

    apexTracker = async () => {
        this.setState({ loaded: false })
        const user = await api.get(`/bridge?version=4&platform=PC&player=Lampiola&auth=DyF5BQl8OHoj6XJaAsiq`);
        const _user = user.data
        var nick = _user.global.name
        var lvl = _user.global.level
        var rank = _user.global.rank.rankImg
        var loaded = true
        console.log(rank)
        this.setState({ user, nick, lvl, rank, loaded })
    }

    render() {

        return (
            <ScrollView>
                {!this.state.loaded ? (
                    <Text>Loading...</Text>
                ) : (
                        <Card title='Apex Stats'>
                            <View style={styles.cardView}>
                                <Text>{this.state.nick}</Text>
                                <Text>Level {this.state.lvl}</Text>
                                <Image
                                    style={{
                                        width: 100,
                                        height: 100
                                    }}
                                    source={{
                                        uri: this.state.rank,
                                    }}
                                />
                            </View>
                        </Card>
                    )}
            </ScrollView>
        );
    }
}
export default Apex;