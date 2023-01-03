import styled from '@emotion/styled';
import { withTheme } from '../../helpers/styles.helper';

export const UserFrame = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 25rem;
    ${withTheme('font-family', 'fonts.body')}
`
export const UserImage = styled.img`
    width: 6.25rem;
    height: 6.25rem;
`
export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: row; 
    ${withTheme('margin-top', 'sizes.rem1')}
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