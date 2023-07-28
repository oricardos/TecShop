import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: colors.primaryBlue,
        paddingVertical: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 16
    },
    total: {
        textAlign: 'center',
        fontWeight: '600',
        color: colors.red,
        fontSize: 16
    }
})