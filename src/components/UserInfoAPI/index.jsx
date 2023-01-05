import { Container, Header, Logo, UserFrame, InfoFrame, UserInfoContainer, UserName, UserImage, UserEmail, Button } from './styles'
import { useState } from 'react';
import { GetAPI } from '../UserInfoAPI/getApi';
import tpLogo from '../../images/tp.png'

const baseURL = 'https://randomuser.me/api?results=25';

const UserInfo = () => {
    const getUserAPI = GetAPI(baseURL);
    const [index, setIndex] = useState(0);
    const [userStorage, setUserStorage] = useState([]);
    
    return (
        <Container>
            <Header>
                <Logo className='logo' src={tpLogo} alt="" />
                <h1>Click to load values</h1>
                <Button className='button' onClick={() => {
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
            </Header>
            <UserFrame>
                {userStorage.map((user, index) => (
                    <UserInfoContainer className='UserInfoContainer' key={index}>
                        <UserImage className='image' src={user.picture.large} alt={user.name.first} />
                        <InfoFrame className='infoFrame'>
                            <UserName className='name'>{user.name.first} {user.name.last}</UserName>
                            <UserEmail className='email'>{user.email}</UserEmail>
                        </InfoFrame>
                    </UserInfoContainer>
                ))}
            </UserFrame>
        </Container>
    );
};

export default UserInfo;
