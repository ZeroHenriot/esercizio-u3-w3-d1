import { Col, Row } from 'react-bootstrap'
import { Heartbreak } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.jobs)
  const dispatch = useDispatch()
  console.log(favourites)

  return (
    <Row>
      <Col sm={10}>
        <ul style={{ listStyle: 'none' }}>
          {favourites.map((job, i) => (
            <li key={i} className="my-4">
              <Heartbreak
                style={{ cursor: 'pointer' }}
                onMouseOver="color='red'"
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_FAVOURITES',
                    payload: i,
                  })
                }}
              />
              <Link to={`/${job.company_name}`}>{job.company_name}</Link>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default Favourites
