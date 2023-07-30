import styled from 'styled-components';

export const Wrapper = styled.div`
width:100%;
padding:15px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

.btns-container{
  margin-top:2rem;
  padding:10px;
  justify-content:flex-end;
  align-items:center;
  display:flex;
  width:80%;
  span{
    width:60%;
  }
  .btn-item{
    width:30%;
    text-align:center;
    align-items:center;
    justify-content:center;
    display:flex;
  }
  img{
    width:1.5rem;
}

 button{
  border:none;
      background-color:transparent;
    }
p{
 color:#ff1510;
}

.btn-fav{
  cursor:pointer;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:row;
  p{
    margin-left:10px;
  }
}
#btn-toggle {
  width:4rem;
}
      
}
.pagination-container {
  display:flex;
  justify-content:center;
  height:4rem;
  width:100%;
  button {
    cursor:pointer;
    background-color:transparent;
    padding:20px;
    height:100%;

    border:none;
  }
} 

  @media(width < 600px) {
    .btns-container {
        width: 100%;
        p {
            font-size: 0.7rem;
        }
        .btn-item {
            padding: 10px;
        }
    }
    .logo {
        width: 15rem;
    }
}

@media (width >=600px) and (width <=1024px) {
    .btns-container {
        width: 100%;
    }
}
  
`;
export default Wrapper