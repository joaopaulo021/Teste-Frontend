import styled from 'styled-components';

export const Navbar = styled.div`
background-color:#e7f6e7;
.navbar{
  padding:20px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-evenly;
  img{
   
background-color:#e7f6e7;
  }
  .search{
    height:6rem;
    display:flex;
    align-items:center;
    width:60%;

  }

  @media(width < 600px) {
   flex-direction:column;
}

@media (width >=600px) and (width <=1024px) {

}

}

`
export const Wrapper = styled.div`
background-color:#e7f6e7;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center; 
h2{
  margin-top:5rem;
}
.hero-info{

  display:flex;
  justify-content:space-around;
  flex-direction:row;
  .hero-description{
    padding:10px;
    width:35%;

    .description{
      margin-top:2rem;
    }
    .title{
      align-items:center;
      justify-content:space-between;
      display:flex;
      width:100%;
    }
    .info{
      width:100%;
      margin-top:2rem;
      align-items:center;
      flex-direction:row;
      display:flex;
      .info-item{
        width:100%;
        align-items:center;
      flex-direction:column;
      justify-content:space-between;
      display:flex;
      .icon{
        align-items:center;
        padding:10px;
        display:flex;
        p{
          margin-left:10px;
        }
      }
      }
    }
  }
}
.rating-container {
    display: flex;
    flex-direction: row;
    align-items:center;
    padding:10px;
    img{
      cursor:pointer;
      width:1.2rem;
    }
    p{
      margin-right:10px;
    }

}

.img{
  height:20rem;
   border-radius:10px;
  width:30%;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
 &:hover{
  transition:all 0.3s ease-in-out;
    transform:translateY(-10px);
 }
}

.comics{
  margin-top:4rem;
  align-items:center;
  justify-content:center;
  padding:20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  img{
    width:10rem;
  }
}


@media(width < 600px) {
  width: 100%;
.comics {
      grid-template-columns: repeat(2, 1fr);
   } 
}
   





`;

export default Wrapper