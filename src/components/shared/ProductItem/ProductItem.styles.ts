import { StyleSheet } from "react-native";
import { colors } from "../../../theme/Colors";

const styles = StyleSheet.create({
  mainContainer:{
    borderRadius: 10, 
    width: '48%', 
    backgroundColor: colors.white, 
    paddingBottom: 8,
    marginBottom:24,
  },
  image: {
    height: 160,
    resizeMode: 'cover',
    borderTopEndRadius: 10, 
    borderTopStartRadius: 10,
  },
  title:{
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price:{
    color: colors.gray,
  },

  dataContainer:{
    marginTop:8,
    paddingHorizontal: 10
  }
})

export default styles