import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TaskType, addTask, deleteTask} from '../redux/slice';
import {TaskText} from './styled-components';
import {useAppDispatch, useAppSelector} from '../redux/hoocks';

interface TasksListProops {
  task: TaskType;
}

const {width: screenWidth} = Dimensions.get('window');

export const TasksList: React.FC<TasksListProops> = ({task}) => {
  const tasksRed = useAppSelector(state => state.task);
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(44);
  const margin = useSharedValue(5);
  const dispatch = useAppDispatch();
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      if (translateX.value < -screenWidth * 0.2) {
        translateX.value = withTiming(-screenWidth);
        itemHeight.value = withTiming(0);
        margin.value = withTiming(0, undefined, isFinished => {
          if (isFinished) {
            //runOnJS(onDelete)(task);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });
  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {height: itemHeight.value, margin: margin.value};
  });
  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));
  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[styles.taskView, rStyle, rTaskContainerStyle]}>
        <TaskText>
          {task.completed} {task.task}
        </TaskText>
        <TouchableOpacity
          onPress={() => {
            dispatch(deleteTask(task));
          }}>
          <View style={{backgroundColor: 'red'}}>
            <TaskText>DELETE</TaskText>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  taskView: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlignVertical: 'center',
    height: 44,
    fontSize: 24,
    color: '#222F3E',
    elevation: 5,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#FAFAFE',
  },
});
