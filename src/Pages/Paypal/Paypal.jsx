import React from 'react'
import { useSelector } from 'react-redux' 
import {selectPrice} from '../../features/PriceSlice'
import styles from './Paypal.module.css'
import { PayPalButtons } from '@paypal/react-paypal-js'
import Header from '../../components/Header/Header'
import { Typography } from '@mui/material'
const Paypal = () => {
  const price = useSelector(selectPrice) 
  return (
    <>
    <div className={styles.root}>
      <Header/>
      <Typography className={styles.typhography} variant={'h5'} sx={{color:'white'}}>{`$${price}`}</Typography>
      <PayPalButtons
              createOrder={(data, actions, err) => {
                return actions.order.create({
                  purchase_units:[
                    {
                      description: "Netflix suscription",
                      amount:{
                        currency_code: "USD",
                        value:price
                      }
                    }
                  ]
                })
              }}
              onApprove={async(data, actions) => {
                const order = await actions.order?.capture()
                console.log('order',order)
              }} 
              onError={err => console.log(err)} 
              className={styles.PayPalButtons}
      />
    </div>
    </>
  ) 
}

export default Paypal