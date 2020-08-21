import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: '#2E2E2E',
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center'
    },   
    textButton: {
        fontSize: 14,
        color: '#FBFBFB'
    },
    contPrimary: {
        height: '80%',
        justifyContent: 'center'
    },
    contSecondary: {
        flex: 1,
        height: '20%',
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center'
    },
    contHeader: {
        flexDirection: 'row',
        height: '30%',
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    signatureArea: {
        flex: 1,
    },
    signLine: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        width: '85%',
        alignSelf: 'center',
        marginBottom: 10
    },
    signature: {       
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1
    },
    contBtnBack: {
        width: '8%'
    },
    contTitle: {
        backgroundColor: "#fff",
        justifyContent: 'center',
        width: '92%'
    }
})