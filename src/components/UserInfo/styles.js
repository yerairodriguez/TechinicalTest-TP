import styled from '@emotion/styled';
import { withTheme } from '../../helpers/styles.helper';

export const Container = styled.div`
${withTheme('font-family', 'fonts.body')}
`
export const Header = styled.div`
    text-align: center;
    align-items: center;
    ${withTheme('margin-top', 'sizes.rem05')}
`
export const Logo = styled.img`
    width: 6rem;
    height: 6rem;
`

export const UserFrame = styled.div`
    ${withTheme('margin-top', 'sizes.rem1 ')}
    ${withTheme('margin-left', 'sizes.rem5')}
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 22rem;
    height: 44rem;
`
export const UserImage = styled.img`
    width: 6.25rem;
    height: 6.25rem;
    ${withTheme('margin-bottom', 'sizes.rem1')}
`
export const UserInfoContainer = styled.div`
    ${withTheme('margin', 'sizes.rem06')}
    display: flex;
    flex-direction: row;
    width: 20rem;
    border-bottom: 0.0825rem solid black;
`
export const UserName = styled.div`
    ${withTheme('font-size', 'sizes.rem1')}
    ${withTheme('font-weight', 'fontWeight.bold')}
    text-align: center; 
`
export const UserEmail = styled.div`
    ${withTheme('margin-top', 'sizes.rem1')}
    ${withTheme('font-size', 'sizes.rem1')}
`
export const InfoFrame = styled.div`
    display: flex;
    flex-direction: column;
    ${withTheme('margin-top', 'sizes.rem15')}
    ${withTheme('margin-left', 'sizes.rem1')}
`
export const Button = styled.button`
    ${withTheme('font-size', 'sizes.rem1')}
    ${withTheme('border-radius', 'sizes.rem03')}
    text-align: center;
    align-self: center;
    width: 5rem;
    height: 1.5rem;
    background-color: lightgray;
    border: 0.0625rem solid gray;
    cursor: pointer;
`




