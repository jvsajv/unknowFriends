import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();


const ICON_SIZE = 180;

export default class CardOptions extends Component {
    render() {
        return (
            <TouchableHighlight onPress={() => this.props.navigation(this.props.routeName)} underlayColor="#DDDDDD">
                <View style={{
                    marginHorizontal: 16,
                    marginVertical: 8,
                    backgroundColor: 'rgba(35, 31, 32, 1)',
                    borderRadius: 10,
                    justifyContent: 'center',
                    elevation: 1,
                    borderColor: 'grey'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginHorizontal: 24, marginVertical: 8 }}>
                            <Icon name={this.props.iconName} color='#FDB92E' size={48} />
                        </View>
                        <View style={{}}>
                            <Text style={{
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                marginVertical: 2,
                                marginHorizontal: 16,
                                textAlign: 'left',
                                fontSize: 16,
                                color: 'white',
                            }}>{this.props.title}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}
