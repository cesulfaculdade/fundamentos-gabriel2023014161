import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    name: {
        fontSize: 16,
        flex: 1,
        marginLeft: 16
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    }
})