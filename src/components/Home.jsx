import Data from '../Data';
import Cards from '../Cards';
import '../App.css'
const Home = () => {
  return (
    <div style={{ marginTop: '20px' }} className='alg'>
      {Data.map((data) => (
        <Cards key={data.id} {...data} />
      ))}
    </div>
  );
}

export default Home;