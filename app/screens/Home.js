import React from 'react';
import { View, Text, Alert, ActivityIndicator, FlatList } from 'react-native';
import MainStyle from '../styles/MainStyle';
import Constants from '../constants/Constants';
import Statusbar from '../components/Statusbar';
import { getDogListAction } from '../actions/DogListActions';
import { connect } from 'react-redux';
import DogImageCell from '../cells/DogImageCell';

/** 
 *@ Main Screen of the App 
*/

class Home extends React.Component { 
    constructor(props) {
        super(props);
        /* Initialization of State */
        this.state = ({
            dogList: this.props.data.message != null ? this.props.data.message : null,
            isLoading: false,
        })
    }

    componentDidMount() {
        // Call the getDogImageListAPI()
        this.props.getDogImageListAPI();
    }

    componentWillReceiveProps(newProps) {
        this.setState({ 
            isLoading: newProps.isLoading,
        })

        /* Set the new data in the state */
        if (newProps.data != null) {
            this.setState({
                dogList: newProps.data.message,
            });
        } else if (newProps.error === "error") {
            // If getting any kind of error.
            Alert.alert(
                'Error',
                Constants.invalidError,
                [{
                    text: 'Try again!', onPress: () => {
                        this.props.getDogList();
                    }
                }],
            );
        }
    }

    /* Render and main View to show the Dog Images */
    render() { 
        return (
            <View style={{ flex: 1 }}>
                <Statusbar backgroundColor={Constants.accentColor} barStyle="dark-content"/>
                <View style={MainStyle.appBar}>
                    <Text style={MainStyle.appBarTitle}>Affenpinscher Dog's Image</Text>
                </View>
                <View style={MainStyle.content}>
                    {this.state.dogList != null ?
                        <View style={MainStyle.flatListContainer}>
                            {/* Initialization of FlatList */}    
                            <FlatList
                                data={this.state.dogList}
                                renderItem={this._renderItem.bind(this)}
                                keyExtractor={(item, index) => index}
                                />
                        </View>    
                    :
                    <View style={MainStyle.noRecordFoundContainer}>
                        <ActivityIndicator
                                animating={this.state.isLoading ? this.state.isLoading : true}    
                                color={Constants.primaryColor}
                                size='large' />
                        <Text style={MainStyle.noRecordFoundTitle}>Loading, please wait!</Text>
                        </View>}
                </View>
            </View>
        );
    }

    /* Render the received the response of the Dog Images */
    _renderItem(data) {
        return (
            <DogImageCell data={data} />
        )
    }
}

/* Set the data in the state */
function mapStateToProps(state) {
    return {
        data: state.DogListReducer.data,
        isLoading: state.DogListReducer.isProgress,
        error: state.DogListReducer.error,
    };
}

function mapDispatchToProps(dispatch) { 
    return {
        getDogImageListAPI: () => {
            dispatch(getDogListAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);