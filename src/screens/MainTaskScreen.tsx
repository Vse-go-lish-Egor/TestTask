import React, {useCallback} from 'react';
import Azalia from '../assets/Azalia.svg';
import {ScreenBackgroundView} from '../components/styledComponents';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigation';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import AddNewTask from '../assets/AddNewTask.svg';
import {TasksItem} from '../components/TaskItem';
import {TaskType, changeCompletedState, deleteTask} from '../redux/taskSlice';
import {FlatList} from 'react-native-gesture-handler';
export const MainTaskScreen = () => {
  const tasks = useAppSelector(state => state.task);
  const dispatch = useAppDispatch();
  const onChangeCompletedValue = useCallback(
    (task: TaskType) => {
      console.log(tasks);
      dispatch(changeCompletedState(task));
      console.log(tasks);
    },
    [dispatch, tasks],
  );
  const onDelete = useCallback(
    (task: TaskType) => {
      dispatch(deleteTask(task));
    },
    [dispatch],
  );
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScreenBackgroundView>
      <View style={styles.tasksScreenView}>
        <Azalia width={234} height={36} style={styles.logo} />
        <FlatList
          renderItem={({item}) => (
            <TasksItem
              onChangeCompletedValue={onChangeCompletedValue}
              onDelete={onDelete}
              task={item}
            />
          )}
          data={tasks}
          keyExtractor={(item, index) => item.task + index}
        />
      </View>
      <View style={styles.addTaskIcon}>
        <TouchableOpacity onPress={() => navigate('CreateTaskScreen')}>
          <AddNewTask width={56} height={56} />
        </TouchableOpacity>
      </View>
    </ScreenBackgroundView>
  );
};
const styles = StyleSheet.create({
  logo: {
    marginBottom: 19,
  },
  taskView: {
    flexDirection: 'row',
    textAlignVertical: 'center',
    paddingBottom: 8,
    paddingTop: 8,
    fontSize: 24,
    color: '#222F3E',
    elevation: 5,
    margin: 5,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#FAFAFE',
  },
  addTaskIcon: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    paddingRight: 36,
    paddingBottom: 31,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  tasksScreenView: {
    flex: 1,
    padding: 21,
    paddingTop: 90,
    backgroundColor: '#FAFAFE',
  },
});
