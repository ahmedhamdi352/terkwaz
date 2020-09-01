import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Alert, FlatList, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import Lodding from '../../components/Layout/lodding';
import {isEmpty} from 'lodash';
import {connect} from 'react-redux';
import Card from '../../components/Layout/card'

import *as ItemsActions from '../../store/actions/Items'
import { Button } from 'native-base';
const ItemsScreen = ({ route, navigation, items }) =>  {
  const [error,setError]=useState(false)
  const dispatch = useDispatch();
  const { itemName } = route.params;

  useEffect(() => {

    const fetch= async ()=>{

     const action =  ItemsActions.fetchItems(itemName);
   
     try {
      await dispatch(action);
    }
     catch (err) {
       setError(true)
    }
 }

  if (error) {
    Alert.alert(
      "An Error Occurred!",
      "Please choose another Category",
      [
        
        { text: "OK", onPress: () =>  navigation.navigate('Home')}
      ],
      { cancelable: false }
    );
  }
 
 fetch();
   }, [error]);

   const handelPress = (itemData)=>{

    const action =ItemsActions.setActiveItem(itemData);
    dispatch (action);
    navigation.navigate('Details')

   }

   if(isEmpty(items)){
     return(
       <Lodding/>
     )
   }
   else{
     
     return (
       <View style={styles.container}>

<View style={styles.Contentcontainer}>
       
       <FlatList
       horizontal={false}
       numColumns={1}
       data={items}
       showsVerticalScrollIndicator={false}
       renderItem={({item,index}) => (
       <Card  key={index}  onPress={() => navigation.navigate('items',{
         itemName: item,
       })}
       style={styles.itemContent}
       >
         <View style={styles.cardContiner}>

           <View style={styles.textConent}>
             <Text style={styles.itemName}>{item.API}</Text>
             <Text style={styles.itemName}>{item.Description}</Text>
             <Text style={styles.itemName}>support Cors {item.Cors}</Text>
           </View>

           <View style={styles.btnContent}>
             <Button style={styles.btn} onPress={()=>handelPress(item)}> 
               <Text>
                 Details
               </Text>
             </Button>
           </View>
        </View>
      </Card > 
     )}
     />
</View>
        
       </View>
     );
   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Contentcontainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width:'80%',

},
  itemContent:{
    maxWidth: Dimensions.get('window').width / 1 - 10, // Width / 3 - (marginLeft and marginRight for the components)
  },
  cardContiner:{
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  textConent:{
    flex:1,
    width:'70%'
  },
  btnContent :{
    width:'30%'
  },
  btn:{
    backgroundColor:'red',
    borderRadius:4,
    marginTop:5,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    height:35
  }

});

const mapStateToProps = ({item}) => ({
  items:item.entries
    
})

export default connect(mapStateToProps) (ItemsScreen)
