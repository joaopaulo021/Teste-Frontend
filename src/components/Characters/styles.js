import styled from 'styled-components';

export const Wrapper = styled.div`
padding:7rem;
place-items:center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px; /* Espaçamento mínimo entre as imagens */


  @media(width < 600px) {
       grid-template-columns: repeat(1, 1fr);
    }

    
    @media (width >=600px) and (width <=1024px) {
       grid-template-columns: repeat(2, 1fr);
    }
`;