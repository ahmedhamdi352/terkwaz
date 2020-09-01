import React,{useCallback} from 'react';
import { StyleSheet, Text, View, Dimensions,Image,Linking,Alert } from 'react-native';
import { useSelector } from 'react-redux';
import  Card  from '../../components/Layout/card';
import img from '../../assets/images/im.png';
import { Button } from 'native-base';

const CategoryMealScreen = props =>  {
  const itemDetails = useSelector(state => state.item.activeItem);

  const handlePress = useCallback(async () => {
    const url = itemDetails.Link;
    const supported = await Linking.canOpenURL( itemDetails.Link);

    if (supported) {
      
      await Linking.openURL( itemDetails.Link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${ itemDetails.Link}`);
    }
  }, [ itemDetails.Link]);

  return (
    <View style={styles.container}>
      <Card style={styles.contentCard}>
      <View style={{flex:0.5,justifyContent:'center',alignItems:'center',marginTop:20}}>
          <Image  source={img} style={styles.image}/>
        </View>

          <View style={styles.content}>
            <View style={styles.textContetnt}>
            <Text style={styles.text} >
             {itemDetails.API}
            </Text>
            <Text style={styles.text} >
             {itemDetails.Description}
            </Text>
            <Button onPress={()=>handlePress()} style={styles.btn}>
              <Text>
                {itemDetails.Link}
              </Text>
            </Button>
            </View>
      
          </View>
        
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:5
  },
  contentCard:{
    width:'75%',
    maxWidth: Dimensions.get('window').width / 1 - 10, 
    maxHeight:Dimensions.get('window').width / 1 - 10,

    flexDirection:'column'

  },
  content:{
    flexDirection:'column',
    flex:1,
    // backgroundColor:'red',
    width:'100%',
    alignSelf:'center',
    marginTop:5
  },
  textContetnt:{
    marginBottom:30
  },
  text:{
    textAlign:'center',
    fontSize:20,
   marginVertical:10
  },
  btn:{
    backgroundColor:'rgb(44,209,158)',
    borderRadius:4,
    marginTop:5,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  }

});

export default CategoryMealScreen;
