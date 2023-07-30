import styled from 'styled-components';

const Wrapper = styled.div`
 border-radius: 20px;
background-color: ${props => props.color};
margin-top:2rem;
width:60%;
height:3rem;
img{
  width:1.5rem;

}
    .form {

      display:flex;
      width: 100%;
    }
   padding:10px;
 outline:none;

  .btn {
    background-color:transparent;
    border:none;
    img{
    }
  }

.form-label {
  display: block;
  font-size: var(--small-text);
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}
.form-input,

.form-textarea {
  width: 100%;
  background-color: ${props => props.color};
  outline:none;
  padding: 0.375rem 0.75rem;
  border: none;
}

.form-row {
  margin-bottom: 1rem;
}

.form-textarea {
  height: 7rem;
}
::placeholder {
  font-family: inherit;
  color: var(--grey-400);
}
.form-alert {
  color: var(--red-dark);
  letter-spacing: var(--letterSpacing);
  text-transform: capitalize;
}

  @media(width < 600px) {
   width: 100%;   
}

@media (width >=600px) and (width <=1024px) {
  width: 80%;
}
  
`;

export default Wrapper;