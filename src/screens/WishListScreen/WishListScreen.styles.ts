import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 20,
        backgroundColor: colors.primary
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 10,
        marginEnd: 18
    }
})

export default styles