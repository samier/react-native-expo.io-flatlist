import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, StatusBar, Platform } from 'react-native';

/* Setup the Statusbar */
const Statusbar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
);

/* Set the Statusbar for Android and iOS */
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

/* Create Style for the Statusbar */
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
});

export default Statusbar;