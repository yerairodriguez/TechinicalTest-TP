import { UserFrame, InfoFrame, UserInfoContainer, UserName, UserImage, UserEmail, } from './styles'

export const UserInfo = ({ userData }) => {
  return (
    <UserFrame>
        {userData.map((user, index) => (
            <>
            <UserInfoContainer>
                <UserImage key={index} src={user.picture.large} alt={user.name.first} />
                <InfoFrame>
                    <UserName key={index}>{user.name.first} {user.name.last}</UserName>
                    <UserEmail key={index}>{user.email}</UserEmail>
                </InfoFrame>
            </UserInfoContainer>
            </>
        ))}
    </UserFrame> 
)}
export default UserInfo