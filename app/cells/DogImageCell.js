import React from 'react';
import { View, Text, TouchableHighlight, Button, Image } from 'react-native';
import Constants from '../constants/Constants';
import CellStyle from '../styles/CellStyle';

/* Custom DogImageCell for the FlatList to show the Dog Images */
export default class DogImageCell extends React.Component { 
    constructor(props) {
        super(props);
        this.state = ({
            dogImage: props.data.item,
        })
    }

    render() { 
        return (
            /* Image Component for the Dog Image */
            <Image style={CellStyle.cardViewContainer}
                source={{ uri: this.state.dogImage }} />
        )
    }
}