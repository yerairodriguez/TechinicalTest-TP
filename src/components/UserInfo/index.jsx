import { UserFrame, InfoFrame, UserInfoContainer, UserName, UserImage, UserEmail, Button } from './styles'
import React from 'react';
import { useState } from 'react';

const UserInfo = ({ userData }) => {
  const [index, setIndex] = useState(0);

  return (
    <UserFrame>
      {userData.map((user, i) => {
        if (i === index) {
          return (
            <>
              <UserInfoContainer>
                <UserImage src={user.picture.large} alt={user.name.first} />
                <InfoFrame>
                  <UserName>{user.name.first} {user.name.last}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </InfoFrame>
              </UserInfoContainer>
            </>
          );
        }
        return null;
      })}
      <Button onClick={() => {
        if (index === userData.length - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }}>
        Next
      </Button>
    </UserFrame>
  );
};

export default UserInfo;
