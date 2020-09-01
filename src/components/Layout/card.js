import React from 'react'
import { StyleSheet, Dimensions,TouchableOpacity } from 'react-native'

const card = (props) => {
    return (
        <TouchableOpacity  key={props.key} style={{ ...styles.card, ...props.style }} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>          
    )
}

export default card

const styles = StyleSheet.create({
    card: {
    flexDirection:'row',
    shadowColor: 'black',
    shadowOpacity: 5.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius:8,
    padding:15,        
    flex:1,
    maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)
    justifyContent: 'center',
    alignItems:'center',    
    margin:8,
    height:100,
    maxHeight:Dimensions.get('window').width / 3 - 10,
      }
})
