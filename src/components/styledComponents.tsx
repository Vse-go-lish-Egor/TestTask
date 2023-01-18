import styled from 'styled-components/native';

export const ScreenBackgroundView = styled.View`
  flex: 1;
  background-color: #fafafe;
`;
export const TaskText = styled.Text<{isComleted?: boolean}>`
  color: ${props => (props.isComleted ? '#999999' : '#222f3e')};
  text-decoration: ${props => props.isComleted && 'line-through'};
  font-size: 24px;
`;
