import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Modal,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ListNotes from '../components/lists/ListNotes';

const data = [
  {
    id: 0,
    title: 'Katmerciye git',
  },
  {
    id: 1,
    title: 'Üsküdara uğra',
  },
];

function NoteScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState("");
  const [data, setData] = useState([
    {
      title: 'Katmerciye git',
    },
    {
      title: 'Üsküdara uğra',
    },
  ]);

const addNote = () => {
  setModalVisible(!modalVisible);
  let last = {
    title: text
  }
  if (text != '') {
    data.push(last);
    setData(data)
  }
  onChangeText('')
}

const deleteItem = (text: string) => {
  let temp = data.filter(d => d.title !== text)
  setData(temp)
}

  return (
    <>
      <View style={styles.new}>
        <Button
          title="Add A New Note"
          color="green"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <ScrollView style={styles.list}>
        {data.map((d, index) => (
          <ListNotes key={index} {...d} delete={deleteItem} />
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Notunuz</Text>
            <TextInput 
            style={{width: 100, borderWidth: 1,  }}
              value={text} 
              onChangeText={onChangeText}
              />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => addNote()}>
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  new: {
    height: '10%',
    paddingEnd: '5%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  list: {
    height: 100,
    // backgroundColor: 'orange',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
});

type Props = {
  id: Number;
  title: string;
};

export default NoteScreen;
