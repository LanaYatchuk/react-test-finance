import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import TickersPage from "./TickersPage";
import Ticker from "./Ticker";

const tickerObject = {"ticker":"AAPL","exchange":"NASDAQ","price":"280","change":"90.96"}


describe('TickersPage component without data', () => {
    it('tickets renders', () => {
        render (<TickersPage />)
        expect(screen.queryByText('APPL')).toBeNull()
    })

})



describe('Ticker component with', () => {
    it('tickets renders', () => {
        render (<Ticker ticker={tickerObject} />);
        expect(screen.getByText('280')).toBeInTheDocument();
        expect(screen.getByText('NASDAQ')).toBeInTheDocument();
    })

})


