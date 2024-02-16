import { StyleSheet } from "react-native";
import { colors } from "../../../theme/Colors";

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        color: colors.gray
    },
    description:{
        color: colors.gray,
        textAlign: 'center',
    }
})

export default styles