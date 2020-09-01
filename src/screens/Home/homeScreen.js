import React,{useEffect} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {connect} from 'react-redux';
import * as CategoriesAction from '../../store/actions/Categories'
import { useDispatch } from 'react-redux';
import Lodding from '../../components/Layout/lodding'
import {isEmpty} from 'lodash'
import Card from '../../components/Layout/card'

const CategoriesScreen = ({categories, navigation}) =>  {
  const dispatch = useDispatch();

  useEffect(() => {

    const fetch= async ()=>{

     const action =  CategoriesAction.fetchCategories();
   
     try {
      await dispatch(action);
    }
     catch (err) {
       console.log(err)
     
    }
 }
 
 
 fetch();
     
   }, []);

   if (isEmpty(categories)) {
     return (
       <Lodding/>
     )
   }
   else {

     return (
       <View style={styles.Screen}>
      
       <View style={styles.Contentcontainer}>
       
              <FlatList
              horizontal={false}
              numColumns={3}
              data={categories}
              showsVerticalScrollIndicator={false}
              renderItem={({item,index}) => (
              <Card  key={index}  onPress={() => navigation.navigate('items',{
                itemName: item,
              })}>
                  <Text style={styles.itemName}>{item}</Text>
             </Card > 
            )}
            />
       </View>
       </View>
      
     );
   }

}

const styles = StyleSheet.create({
  Screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
  Contentcontainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width:'80%'

},
itemName:{
  textAlign:'center'
}

});

const mapStateToProps = ({categories}) => ({
  categories:categories.categories
    
})

export default connect(mapStateToProps) (CategoriesScreen)




