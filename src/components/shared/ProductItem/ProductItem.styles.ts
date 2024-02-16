import { StyleSheet } from "react-native";
import { colors } from "../../../theme/Colors";

const styles = StyleSheet.create({
  mainContainer:{
    borderRadius: 10, 
    height: 200,
    width: '48%', 
    backgroundColor: colors.white, 
    paddingVertical: 8,
    paddingHorizontal: 6, 
    marginVertical: 10, 
    marginHorizontal: 4
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title:{
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  price:{
    color: colors.gray,
    textAlign: 'center'
  },
  subcontainer:{
    flexDirection: 'row'
  }
})

export default styles