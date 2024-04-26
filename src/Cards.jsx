import PropTypes from "prop-types";

const Cards = ({id, imageurl, des, author, date, tag }) => {
  return (
    <div className="card" style={{width: '18rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',marginBottom: '10px'}}>
    <img className="card-img-top" src={imageurl} alt="Card image cap" style={{ width: '18rem', height: '200px' }}/>
    <div className="card-body">
    <h4 className="card-title">{des}</h4><br></br>
    <p className="card-text"><b>AUTHOR NAME:</b> {author}</p>
    <p className="card-text"><b>DATE:</b> {date}</p>
  </div>
</div>
  )
}
Cards.propTypes = {
    imageurl: PropTypes.string,
    des: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    tag: PropTypes.string,
  };
export default Cards;