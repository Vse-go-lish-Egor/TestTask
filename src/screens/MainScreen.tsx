import React, {useCallback} from 'react';
import Azalia from '../../assets/svgImage/azalia_logo.svg';
import {ScreenBackgroundView, SizedBox} from '../components/styledComponents';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigation';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import AddNewTask from '../../assets/svgImage/add_button.svg';
import {TasksItem} from '../components/TaskItem';
import {Task, toggleComplete, deleteTask} from '../redux/slices/taskSlice';
import {FlatList} from 'react-native-gesture-handler';

export const MainScreen = () => {
  const tasks = useAppSelector(state => state.task);
  const dispatch = useAppDispatch();
  const onToggleComplete = useCallback(
    (task: Task) => {
      dispatch(toggleComplete(task));
    },
    [dispatch],
  );
  const onDelete = useCallback(
    (task: Task) => {
      dispatch(deleteTask(task));
    },
    [dispatch],
  );
  const renderTask = ({item}: {item: Task}) => (
    <TasksItem
      onToggleComplete={onToggleComplete}
      onDelete={onDelete}
      task={item}
    />
  );
  const keyExtractor = (item: Task, index: number) => item.name + index;
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScreenBackgroundView>
      <SizedBox height={90} />
      <View style={styles.tasksScreenView}>
        <Azalia width={234} height={36} />
        <SizedBox height={19} />
        <FlatList
          renderItem={renderTask}
          data={tasks}
          keyExtractor={keyExtractor}
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
  addTaskIcon: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    paddingRight: 36,
    paddingBottom: 31,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  tasksScreenView: {
    flex: 1,
    padding: 21,
    backgroundColor: '#FAFAFE',
  },
});
