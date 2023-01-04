import { UserFrame, InfoFrame, UserInfoContainer, UserName, UserImage, UserEmail, Button } from './styles'
import React from 'react';
import { useState } from 'react';
import { GetAPI } from '../UserInfoAPI/getApi';

const baseURL = 'https://randomuser.me/api?results=10';

const UserInfo = () => {
    const getUserAPI = GetAPI(baseURL);
    console.log(getUserAPI);
    const [index, setIndex] = useState(0);
    const [userStorage, setUserStorage] = useState([]);

    return (
        
        <UserFrame>
            <h1>Click to load values</h1>
            <Button onClick={() => {
                    if (index < getUserAPI.results.length) {
                        setIndex(index + 1);
                        setUserStorage([...userStorage, getUserAPI.results[index]]);
                    } else {
                        setUserStorage([]);
                        setIndex(0);
                    }
                }}>
                    Load
                </Button>
                {userStorage.map((user, index) => (
                    <UserInfoContainer key={index}>
                        <UserImage src={user.picture.large} alt={user.name.first} />
                        <InfoFrame>
                            <UserName>{user.name.first} {user.name.last}</UserName>
                            <UserEmail>{user.email}</UserEmail>
                        </InfoFrame>
                    </UserInfoContainer>
                ))}
                
        </UserFrame>
    );
};

export default UserInfo;
