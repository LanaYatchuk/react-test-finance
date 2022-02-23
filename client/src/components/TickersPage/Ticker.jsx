import icon_down from './../../icons/down_arrow.png'
import icon_up from './../../icons/up_arrow.png'
import { TickersWrapper } from '../../styledComponents/styled.component'

function Ticker({ ticker }) {
  const yieldNum = ticker.yield
  const {
    exchange,
    change_percent,
    dividend,
    price,
    dividendEncreased,
    piceEncreased
  } = ticker

  return (
    <TickersWrapper>

      <div>{exchange} </div>
      <div> {yieldNum}</div>
      {!dividendEncreased && <div style={{ backgroundColor: '#e76f51' }}> {dividend} </div>}
      {dividendEncreased && <div style={{ backgroundColor: '#2a9d8f' }}> {dividend}  </div>}

      <div>{change_percent}</div>
      {!piceEncreased && <div style={{ backgroundColor: '#e76f51' }}>
        {price}
        <img src={icon_down} alt='arrow' /></div>}

      {piceEncreased && <div style={{ backgroundColor: '#2a9d8f' }}>
        {price}
        <img src={icon_up} alt='arrow' /> </div>}
    </TickersWrapper>

  )
}

export default Ticker