import React, {useState} from 'react';
import {ScreenBackgroundView, TaskText} from '../components/styledComponents';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../redux/hooks';
import {addTask} from '../redux/slices/taskSlice';
import BackButton from '../../assets/svgImage/back_button.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigation';
import {Text} from 'react-native';

export const CreateTaskScreen = () => {
  const [task, setTask] = useState('');
  const dispatch = useAppDispatch();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScreenBackgroundView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigate('MainTaskScreen')}>
        <BackButton width={21} height={24} />
        <Text style={styles.backButtonText}>Вернуться назад</Text>
      </TouchableOpacity>
      <View style={styles.screenView}>
        <View style={styles.inputTaskView}>
          <TextInput
            style={styles.textInput}
            onChangeText={inputTask => setTask(inputTask)}
            placeholder={'Teкт новой задачи'}
            placeholderTextColor={'#222F3E'}
          />
          <TouchableOpacity
            style={task.length ? styles.addButtonOn : styles.addButtonOff}
            onPress={() => {
              task.length && dispatch(addTask(task));
            }}>
            <TaskText style={styles.addButtonText}>Добавить</TaskText>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenBackgroundView>
  );
};

const styles = StyleSheet.create({
  backButtonText: {
    color: '#999999',
    fontSize: 28,
    marginLeft: 30,
  },
  backButton: {
    alignItems: 'center',
    marginLeft: 21,
    marginTop: 35,
    flexDirection: 'row',
  },
  addButtonText: {
    color: '#FFFFFF',
  },
  inputTaskView: {
    flex: 1,
    justifyContent: 'center',
  },
  addButtonOff: {
    borderRadius: 8,
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    backgroundColor: '#222F3E80',
  },
  addButtonOn: {
    borderRadius: 8,
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    backgroundColor: '#222F3E',
  },
  textInput: {
    textAlignVertical: 'center',
    paddingBottom: 8,
    paddingTop: 8,
    fontSize: 24,
    color: '#222F3E',
    elevation: 5,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#FAFAFE',
  },
  screenView: {
    flex: 1,
    padding: 21,
  },
});
