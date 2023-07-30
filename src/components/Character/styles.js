import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
 width: 100%;
  .img {
    align-items:center;
    justify-content:center;
    
    display:flex;
    transition:all 0.3s ease-in-out;
    &:hover {
      transform: translateY(-10px); 
  }
  .link{
       
  }
    img {
      border-radius:5px;
      width: 100%;
      height: auto;
      border-bottom:3px solid red;
    }
  }

  .footer {
    width:80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    img {
      width:1.3rem;
      cursor:pointer;
    }
  }
`;

export default Wrapper;