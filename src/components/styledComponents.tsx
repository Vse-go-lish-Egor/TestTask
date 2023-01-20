import styled from 'styled-components/native';

export const ScreenBackgroundView = styled.View<{
  justifyContent?: string;
  alignItems?: string;
}>`
  flex: 1;
  background-color: #fafafe;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: ${props => (props.alignItems ? props.alignItems : 'stretch')};
`;
export const TaskText = styled.Text<{isComleted?: boolean}>`
  color: ${props => (props.isComleted ? '#999999' : '#222f3e')};
  text-decoration: ${props => props.isComleted && 'line-through'};
  font-size: 24px;
`;
export const SizedBox = styled.View<{width?: number; height?: number}>`
  width: ${props => (props.width ? props.width : 0)};
  height: ${props => (props.height ? props.height : 0)};
`;
