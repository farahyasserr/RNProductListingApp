import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 3,
    },
    infoContainer:{
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
    },
    title:{
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 18,
    },
    price:{
        color: colors.gray
    },
    brand:{
        fontWeight: 'bold',
        color: colors.gray
    },
    description:{
        marginVertical: 10
    }
})

export default styles