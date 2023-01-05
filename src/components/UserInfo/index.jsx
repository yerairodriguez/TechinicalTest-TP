import { Container, Header, UserFrame, InfoFrame, UserInfoContainer, UserName, UserImage, UserEmail, Button } from './styles'
import React from 'react';
import { useState } from 'react';

const UserInfo = ({ userData }) => {
    const [index, setIndex] = useState(0);
    const [userStorage, setUserStorage] = useState([]);
    const currentUser = userData[index];

    return (
        <Container>
            <Header>
                <h1>Click to load values</h1>
                <Button onClick={() => {
                    if (index < userData.length) {
                        setIndex(index + 1);
                        setUserStorage([...userStorage, currentUser]);
                    } else {
                        setUserStorage([]);
                        setIndex(0);
                    }
                }}>
                    Load
                </Button>
            </Header>
            <UserFrame>
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
        </Container>
    );
};

export default UserInfo;
