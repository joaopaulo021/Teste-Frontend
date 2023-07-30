import Wrapper from './styles'
import {Form, useLoaderData, useNavigate} from 'react-router-dom'
import shape from '../../assets/busca/Lupa/Shape@2x.png'


// FUNÇÃO LOADER PARA OBTER O TERMO DE PESQUISA DA URL
export const loader = async ({request}) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  return {searchTerm};
};

const SearchForm = ({color}) => {
  const navigate = useNavigate()
  const {searchTerm} = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchTerm = e.target.search.value;
    navigate(`/?search=${searchTerm}`);
  }

  return (
    <Wrapper color={color}>
      <Form onSubmit={handleSubmit} className='form'>
        <button
          className='btn'
          type='submit'
        >
          {<img src={shape}></img>}
        </button>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={searchTerm}
          placeholder='Procure por heróis'
        />
      </Form>

    </Wrapper>
  )
}

export default SearchForm