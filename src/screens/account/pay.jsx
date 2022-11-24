
import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { PostAdd } from '@mui/icons-material';

const MySwal = withReactContent(Swal);

export default function Pay(props) {
  const nav = useNavigate();
  
  const publishableKey =
    'pk_test_51LcpkjEg6kCkvR4mOwF1xaFNWPcxTpzec5yOIrZEaVqc3Ywe7dwHE5LPrWkuiM8d9Bsy07O32MHjLmKm69e0PiV400hTEtGnAL';
  const [product, setProduct] = useState({
    name: 'premium',
    price: 10,
  });
  const priceForStripe = product.price * 100;

  const handleSuccess = async () => {
    props.setLoading(false),
    await MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    });
    navigate.goBack()
  };
  const handleFailure = async() => {
    props.setLoading(false),
    await MySwal.fire({
      
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
  const payNow = async token => {
    props.setLoading(true);
    try {
      
      const response = await axios({
        method: 'post',
        url: 'http://localhost:9000/payment',
        data: {
          amount: product.price * 100,
          token,
        },
        headers:{
          "x-api-key":localStorage["token"],
          'content-type': "application/json"
        }
        
        
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <div className="container">
      
      {/* <h2>Complete React & Stripe payment integration</h2> */}
      {/* <p>
        <span>Product: </span>
        {product.name}
      </p>
      <p>
        <span>Price: </span>${product.price}
      </p> */}
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is $${product.price}`}
        token={payNow}
      />
    </div>
  );

}
