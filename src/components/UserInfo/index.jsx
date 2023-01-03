import { UserFrame, InfoFrame, UserInfoContainer, UserName, UserImage, UserEmail, Button } from './styles'
import React from 'react';
import { useState } from 'react';

const UserInfo = ({ userData }) => {
    const [index, setIndex] = useState(0);
    const [userStorage, setUserStorage] = useState([]);

    return (
        <UserFrame>
            {userStorage.map((element) => (
                <UserInfoContainer>
                    <UserImage src={element.picture.large} alt={element.name.first} />
                    <InfoFrame>
                        <UserName>{element.name.first} {element.name.last}</UserName>
                        <UserEmail>{element.email}</UserEmail>
                    </InfoFrame>
                </UserInfoContainer>
            ))}
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
                setUserStorage([...userStorage, userData[index]]);
                if (index === userData.length - 1) {
                    setIndex(0);
                    setUserStorage([]);
                } else {
                    setIndex(index + 1);
                }
            }}>
                Load
            </Button>
        </UserFrame>
    );
};

export default UserInfo;
