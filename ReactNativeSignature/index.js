import React, { Component } from 'react';
import { 
    StyleSheet,
    View, 
    Text, 
    TouchableHighlight,
    Platform,
    PermissionsAndroid
} from "react-native";
import RNFetchBlob from 'rn-fetch-blob'
import SignatureCapture from 'react-native-signature-capture';

import styles from "./styles.js";

class ReactNativeSignature extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            titleText: this.props.titleText,
            cleanButtonText: this.props.cleanButtonText,
            signButtonText: this.props.signButtonText,
            buttonsCollor: this.props.buttonsCollor,

            imgAssinatura: '',
            signature: null,
            photo: [],
            timer: 0,
        }
    }    

    render() {       
        const buttonStyle = StyleSheet.create({
            button: {
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 250,
                backgroundColor: this.state.buttonsCollor,
                margin: 10,
                borderRadius: 4
            },
        });

        const portraitButtonStyle = StyleSheet.create({
            button: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 80,
                backgroundColor: this.state.buttonsCollor,
                margin: 5,
                borderRadius: 4
            },
        });
        return (
            <View style={styles.container}>  
                <View style={styles.contTitle}>
                    <Text style={styles.title}>{this.state.titleText}</Text>
                </View>
               
                <SignatureCapture
                    style={styles.signature}
                    ref="sign"
                    onSaveEvent={this._onSaveEvent.bind(this)}
                  
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    viewMode={this.props.orientation} />

               
                <View style={styles.signLine}></View>                
                {this.props.orientation == 'landscape' ? (
                    <View style={styles.contSecondary}>
                        <TouchableHighlight style={buttonStyle.button}
                            onPress={() => { this.saveSign() }} >
                            <Text style={styles.textButton}>{this.state.signButtonText}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={buttonStyle.button}
                            onPress={() => { this.resetSign() }} >
                            <Text style={styles.textButton}>{this.state.cleanButtonText}</Text>
                        </TouchableHighlight>
                    </View>
                ) : 
                <View style={styles.contSecondary}>
                <TouchableHighlight style={portraitButtonStyle.button}
                    onPress={() => { this.saveSign() }} >
                    <Text style={styles.textButton}>{this.state.signButtonText}</Text>
                </TouchableHighlight>
                <TouchableHighlight style={portraitButtonStyle.button}
                    onPress={() => { this.resetSign() }} >
                    <Text style={styles.textButton}>{this.state.cleanButtonText}</Text>
                </TouchableHighlight>
            </View>
                }
            </View>
        )
    }

    saveSign() {
        this.refs["sign"].saveImage()
        this.setState({ isLoading: true })

    }

    resetSign() {
        this.refs["sign"].resetImage();
    }
   
    async _onSaveEvent(result) {
        var photo = []     

        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    let num = Math.floor(Math.random() * 65536)
                    const dirs = RNFetchBlob.fs.dirs
                    const file_path = dirs.DCIMDir + "/" + num + "image_signature_motoboyapp" + ".png"
                    await RNFetchBlob.fs.writeFile(file_path, result.encoded, 'base64')
                        .then((sucess) => {
                            photo.push({
                                type: "image/png",
                                name: result.pathName,
                                uri: "file://" + file_path,
                            })
                        })
                        .catch((erro) => {
                            console.log("RNFetchBlob ERROR", erro);
                        })
                }
            } catch (error) {               
                console.log('Not permited')
            }
        } else {
            photo.push({
                type: "image/png",
                name: result.pathName,
                uri: result.pathName,
            })
        }
        try {
            if (photo) {                
                this.props.onColletSignature(photo[0])
            } else {
                console.log('Erro em _onSaveEvent: ', this.state.photo)
            }
        } catch (error) {
            console.log("Erro tela de assinatura:", error)
        }

    }
}
export default ReactNativeSignature;
