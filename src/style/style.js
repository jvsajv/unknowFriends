import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#fcd303',
        padding: 16,
        borderWidth: 1,
        borderColor: '#000000'
    },
    title: {
        paddingLeft: 16,
        fontSize: 24,
    },
});

export default styles