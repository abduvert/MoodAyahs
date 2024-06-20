import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'


const Ayah = ({ mood }) => {
    const [ayahs, setAyahs] = useState([]);
    
    useEffect(() => {
      const fetchAyahs = async () => {
          try {
          const res = await axios.get(`https://ayahsapi-production.up.railway.app/api/ayahs/${mood}`);
          setAyahs(res.data);
        } catch (error) {
            console.error('There was an error fetching the data!', error);
        }
    };
    
    fetchAyahs();
}, [mood]); 



const getRandomAyahIndex = () => {
return Math.floor(Math.random() * ayahs.length);
};


const randomAyahIndex = getRandomAyahIndex();
const ayah = ayahs[randomAyahIndex];


return (
      <div>
        {ayahs.length > 0 ? (
            <div>
              <p className='verse'>{ayah.verse}</p>
              <p className='verseNumber'>{ayah.verseNumber.toString().toUpperCase()}</p>
            </div>
          
        ) : (
          <p>No ayahs found for this mood.</p>
        )}
      </div>
    );
  };
  
  export default Ayah;