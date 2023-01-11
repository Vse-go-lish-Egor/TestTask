import React from 'react';
import Azalia from '../assets/Azalia.svg';
import {ScreenBackgroundView} from '../components/styled-components';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigation';
import {useAppSelector} from '../redux/hoocks';
import AddNewTask from '../assets/AddNewTask.svg';
import {TasksList} from '../components/tasksList';
import {FlatList} from 'react-native-gesture-handler';
export const MainTaskScreen = () => {
  const tasks = useAppSelector(state => state.task);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScreenBackgroundView>
      <View style={styles.tasksScreenView}>
        <Azalia width={234} height={36} style={styles.logo} />
        <FlatList
          renderItem={({item}) => <TasksList task={item} />}
          data={tasks}
          keyExtractor={item => item.task}
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
    zIndex: 1,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  tasksScreenView: {
    flex: 1,
    zIndex: 0,
    padding: 21,
    paddingTop: 90,
    backgroundColor: '#FAFAFE',
  },
});
