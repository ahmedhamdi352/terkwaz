import { ActivityIndicator, Alert, FlatList, Text, StyleSheet, View, TextInput,Dimensions } from 'react-native';
import React,{Component} from 'react'
import {SERVER_URL} from '../../config/config'
import axios from 'axios'
import Card from '../../components/Layout/card'
import {Button} from 'native-base'
import Lodding from '../../components/Layout/lodding'
import {connect} from 'react-redux'
import {SET_ACTIVE_ITEM} from '../../store/actions/Items'

class ItemScreen extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isLoading: true,
      text: '',
      data: [],
      error:false
    }

    this.arrayholder = [];
  }

  componentDidMount() {
    const {itemName} = this.props.route.params;
    const {navigation} = this.props

    return axios.get(`${SERVER_URL}entries?category=${itemName}`)
      .then((response) => {
        console.log(response)
        this.setState({
          isLoading: false,
          data: response.data.entries,
        }, () => {
          this.arrayholder = response.data.entries;

        });
      })
      .catch((error) => {
        Alert.alert(
          "An Error Occurred!",
          "Please choose another Category",
          [
            
            { text: "OK", onPress: () =>  navigation.navigate('Home')}
          ],
          { cancelable: false }
          )
     
      });
  }


  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      console.log(item)
      const itemData = item.API.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });

    this.setState({
      data: newData,
      text: text
      })
    }

    itemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }

     handelPress = (itemData)=>{
       this.props.setItems(itemData)
      
      this.props.navigation.navigate('Details')
  
     }

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
           <Lodding/>
          </View>
        );
      }
   
      return (
   
        <View style={styles.MainContainer}>
       
        <TextInput 
         style={styles.textInput}
         onChangeText={(text) => this.searchData(text)}
         value={this.state.text}
         underlineColorAndroid='transparent'
         placeholder="Search Here" />

        <FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index.toString() }
          showsVerticalScrollIndicator={false}
          renderItem={({item,index}) => (
            <Card  key={index}  
            style={styles.itemContent}
            >
              <View style={styles.cardContiner}>
     
                <View style={styles.textConent}>
                  <Text style={styles.itemName}>{item.API}</Text>
                  <Text style={styles.itemName}>{item.Description}</Text>
                  <Text style={styles.itemName}>support Cors {item.Cors}</Text>
                </View>
     
                <View style={styles.btnContent}>
                  <Button style={styles.btn} onPress={()=>this.handelPress(item)}> 
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
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,

  },

  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: "#FFFF"

  },
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

const dispatchToProps = (dispatch) => ({
  setItems:(activeItem)=>{
    dispatch({
        type:SET_ACTIVE_ITEM,
        activeItem
    })
},

});

export default connect(null, dispatchToProps)(ItemScreen);