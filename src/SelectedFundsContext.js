import React from 'react'

const SelectedFundsContext = React.createContext({})

export const FundProvider = SelectedFundsContext.Provider
export const FundConsumer = SelectedFundsContext.Consumer
export default SelectedFundsContext
