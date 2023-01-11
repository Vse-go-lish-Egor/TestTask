import React, {useState} from 'react';
import {ScreenBackgroundView, TaskText} from '../components/styled-components';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../redux/hoocks';
import {addTask} from '../redux/slice';

export const CreateTaskScreen = () => {
  const [task, setTask] = useState('');
  const dispatch = useAppDispatch();
  return (
    <ScreenBackgroundView>
      <View style={styles.screenView}>
        <View style={styles.inputTaskView}>
          <TextInput
            style={styles.textInput}
            onChangeText={inputTask => setTask(inputTask)}
            placeholder={'Teкт новой задачи'}
            placeholderTextColor={'#222F3E'}
          />
          <TouchableOpacity
            onPress={() => {
              task.length && dispatch(addTask(task));
            }}>
            <View
              style={task.length ? styles.addButtonOn : styles.addButtonOff}>
              <TaskText style={styles.addButtonText}>Добавить</TaskText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenBackgroundView>
  );
};

const styles = StyleSheet.create({
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
