import { StyleSheet} from 'react-native'

export default StyleSheet.create({
  heading:{
    fontSize: 25,
    textAlign: 'center'
  },
  paragraph:{
    fontSize: 10,
    textAlign: 'center'
  },
  input:{
    height: 30,
    width: "55%",
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20
  },
  view: {
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
    },
  container:{
    flex: 0.25,
    justifyContent: 'center',
    backgroundColor: '#ffee00'
  },
  TopView:{
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffee00'
  },
  ScrollTopView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffee00',
    height: 57
  },
  BottomView:{
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffee00',
    flexDirection: 'row'
  },
  ScrollBottomView:{
    flexDirection: 'row',
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffee00'
  },
  main: {
    flex: 1
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text:{
    fontSize: 25,
    color: '#000033',
    borderColor: '#000033'
  },
  link:{
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd"
  },
  touchStyle:{
    width:200,
    height: 40,
    backgroundColor: '#ffee00',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollStyle:{
    flex: 4
  }
})
