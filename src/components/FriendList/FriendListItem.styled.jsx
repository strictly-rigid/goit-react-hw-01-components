import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 300px;
  border: 3px solid green;
  border-radius: 8px;
  margin: 20px auto;
  padding: 20px;
  font-weight: 700;
  font-size: 20px;
`;

export const StatusOff = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
`;

export const StatusOn = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: green;
`;

export const FriendAvatar = styled.img`
  margin: 0;
`;
