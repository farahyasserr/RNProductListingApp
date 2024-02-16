import { StyleSheet } from "react-native";
import { colors } from "../../../../theme/Colors";

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        color: colors.primary
    },
    description:{
        color: colors.primary,
        marginBottom: 30,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles