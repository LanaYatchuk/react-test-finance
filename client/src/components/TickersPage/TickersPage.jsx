import React, { useState, useEffect, useRef } from 'react'
import Ticker from './Ticker'
import { TickersTitles } from '../../styledComponents/styled.component'
import { socket } from './socket'


socket.emit('start')

function TickersPage() {
    const [newTickers, setTickers] = useState([])
    const refPrevTickets = useRef();

    useEffect(() => {
        let cleanupFanction = false
        const fetchData = async () => {
            try {
                await socket.on('ticker', (tickers) => {
                    if (!cleanupFanction) {
                        setTickers(tickers)
                        refPrevTickets.current = tickers
                    }
                })
            } catch (e) {
                console.error(e.message)
            }
        }
        fetchData()
        return () => cleanupFanction = true
    }, [])


    const checkedTickers = newTickers.map((item) => {
        let priceEncreased = null;
        let dividendEncreased = null;
        
        (refPrevTickets.current || []).forEach((oldItem) => {
            priceEncreased = item.price > oldItem.price;
            dividendEncreased = item.price > oldItem.price;
        });
        return { ...item, priceEncreased, dividendEncreased }
    });

    return (
        <>
            <TickersTitles>
                <ul>
                    <li>name</li>
                    <li>exchange</li>
                    <li>yeild</li>
                    <li>dividend</li>
                    <li>price</li>
                    
                    </ul>
                </TickersTitles>
            {checkedTickers.map((ticker, index) => (<Ticker key={index} ticker={ticker} />))}

        </>
    )
}

export default TickersPage

