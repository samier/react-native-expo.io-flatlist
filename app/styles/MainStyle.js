import { StyleSheet, Dimensions, Platform } from 'react-native';
import Constants from '../constants/Constants';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

/* Main StyleSheet for the Home Screen */
const styles = StyleSheet.create({
    appBar: {
        backgroundColor: Constants.primaryColor,
        height: APPBAR_HEIGHT,
        elevation: 4,
        justifyContent: 'center',
        alignItems:'center'
    },
    appBarTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },
    noRecordFoundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noRecordFoundTitle: {
        color: 'black',
        fontSize: 16,
        marginTop: 15,
        fontWeight: '500',
    },
    flatListContainer: {
        flex: 1,
    },
})

export default styles;