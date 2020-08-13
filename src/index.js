import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native';

import styles from './style/style.js'

const DATA = [
    {
        id: '0',
        title: 'Apex',
        route: './components/apex/index.js'
    },
    {
        id: '1',
        title: 'League of Legends',
        route: './components/lol/index.js'
    }
]

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function App() {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={console.log(`Clicou em ${item.title}`)} >
            <Item title={item.title} />
        </TouchableOpacity>
    );
    return (
        <ScrollView>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return <FlatListItem item={item} index={index} />;
                    }}
                />
            </View>
        </ScrollView>
    );
}

class FlatListItem extends Component {
    state = { showItemIndex: [false, false] };

    _onPress = title => () => {
        console.log(`Clicou em ${title}`)
    };

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._onPress(this.props.item.title)}>
                    <Text style={styles.item}>{this.props.item.title}</Text>
                </TouchableOpacity>
                {(
                    <FlatList
                        renderItem={({ item, index }) => {
                            return (
                                <Text item={item} index={index}>
                                    {item.name}
                                </Text>
                            );
                        }}
                    />
                )}
            </View>
        );
    }
}