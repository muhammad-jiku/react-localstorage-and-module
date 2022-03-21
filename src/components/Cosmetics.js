import React, { useEffect, useState } from 'react';
import '../styles/Cosmetics.css';
import Cosmetic from './Cosmetic';
// import '../utilities/data.json';

function Cosmetics() {
  // creating data from json generator
  /* const cosmetics = [
    {
      _id: '6237f540a7c9381209855b56',
      price: 313,
      cosmeticColor: 'brown',
      name: 'Martha Clements',
      email: 'marthaclements@bristo.com',
      phone: '+1 (889) 450-3425',
    },
    {
      _id: '6237f5407a845663f9490424',
      price: 462,
      cosmeticColor: 'brown',
      name: 'Leonard Holloway',
      email: 'leonardholloway@bristo.com',
      phone: '+1 (933) 450-3805',
    },
    {
      _id: '6237f5409d02c24e6d3a37cd',
      price: 370,
      cosmeticColor: 'green',
      name: 'Landry Farmer',
      email: 'landryfarmer@bristo.com',
      phone: '+1 (998) 459-3441',
    },
    {
      _id: '6237f540762b9e7b136dc2b8',
      price: 200,
      cosmeticColor: 'green',
      name: 'Tania Strickland',
      email: 'taniastrickland@bristo.com',
      phone: '+1 (933) 577-2521',
    },
    {
      _id: '6237f5409355d6c22ec5c3f5',
      price: 463,
      cosmeticColor: 'brown',
      name: 'Bridgette Day',
      email: 'bridgetteday@bristo.com',
      phone: '+1 (818) 503-2691',
    },
    {
      _id: '6237f5404527b4219ab66db6',
      price: 213,
      cosmeticColor: 'brown',
      name: 'Walsh Bolton',
      email: 'walshbolton@bristo.com',
      phone: '+1 (881) 471-2764',
    },
  ]; */

  // creating and loading data through react hooks
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setCosmetics(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Welcome to Cosmetics store</h1>
      {cosmetics.map((cosmetic) => (
        // console.log(cosmetic)
        <Cosmetic cosmetic={cosmetic} key={cosmetic?._id}></Cosmetic>
      ))}
    </div>
  );
}

export default Cosmetics;
