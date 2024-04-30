import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    smallIcon: {
        marginRight: 10,
        fontSize: 24,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 260,
        width: 260,
        marginTop: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        paddingTop: 18,
        paddingBottom: 8,
        marginTop: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#BB8493',
        borderRadius: 50,
    },
    textInput: {
        flex: 1,
        marginTop: -10,
        color: '#49243E',
        fontSize: 16,
    },
    loginContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    text_header: {
        color: '#49243E',
        fontWeight: 'bold',
        fontSize: 30,
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
        margin: 20,
    },
    inBut: {
        width: '70%',
        backgroundColor: '#49243E',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 50,
        shadowColor: '#49243E',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    inBut2: {
        backgroundColor: '#704264',
        height: 65,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5, // Add horizontal margin between buttons
        shadowColor: '#704264',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    bottomButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center', // Center the buttons
        marginTop: 20,
    },
    smallIcon2: {
        fontSize: 40,
    },
    bottomText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 5,
    },
});

export default styles;
