import React, {useCallback} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TaskType} from '../redux/taskSlice';
import {TaskText} from './styledComponents';
import CheckBox from '@react-native-community/checkbox';

interface TasksListProops {
  task: TaskType;
  onChangeCompletedValue: (task: TaskType) => void;
  onDelete?: (task: TaskType) => void;
}

const {width: screenWidth} = Dimensions.get('window');

export const TasksItem: React.FC<TasksListProops> = ({
  task,
  onDelete,
  onChangeCompletedValue,
}) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(44);
  const margin = useSharedValue(5);
  const removeTask = useCallback(() => onDelete!(task), [onDelete, task]);
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      if (translateX.value < -screenWidth * 0.2) {
        translateX.value = withTiming(-screenWidth);
        itemHeight.value = withTiming(0);
        margin.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDelete) {
            runOnJS(removeTask)();
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
        <CheckBox
          value={task.completed}
          onValueChange={() => onChangeCompletedValue(task)}
          tintColors={{false: 'black', true: 'black'}}
        />
        <TaskText isComleted={task.completed}>{task.task}</TaskText>
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
