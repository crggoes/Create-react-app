import React from 'react'
import * as S from './styled'
const profile = () => {
  return (
      <S.wrapper>
       <S.wrapperImage src='https://avatars.githubusercontent.com/u/100580566?v=4' 
              alt="Avatar of user" />
              
         <S.wrapperInfoUser>
            <div>  
              <h1>Carlos Goes</h1>
              <S.wrapperUserName>
               <h3>Username:</h3>
               <a href="https://github.com/crggoes" target="_blank" rel="noreferrer">Goes</a>
              </S.wrapperUserName>
            <div>
              <S.wrapperStatusCount>  
                <div>  
                  <h4>Followers</h4>
                  <span>5</span>
                </div>
                <div>
                  <h4>Starreds</h4>
                  <span>5</span>
                </div>
                <div>
                     <h4>Followings</h4>
                     <span>5</span>
                   </div>
              </S.wrapperStatusCount>
         </wrapperInfoUser>
        </S.wrapper>
  );
};

export default profile;