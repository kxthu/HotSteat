import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StaffPromoDashboard = () => {
  const [hotSeatActive, setHotSeatActive] = useState(false);
  const [hotSeatWinner, setHotSeatWinner] = useState('');
  const [raffleWinner, setRaffleWinner] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(null);
  const [manualRaffleInput, setManualRaffleInput] = useState('');

  const handleHotSeat = () => {
    const number = Math.floor(Math.random() * 20) + 1;
    setHotSeatWinner(`Machine #${number}`);
    setHotSeatActive(true);
  };

  const handleManualRaffleSubmit = () => {
    if (manualRaffleInput.trim() !== '') {
      setRaffleWinner(`Ticket #${manualRaffleInput}`);
    }
  };

  const startSpin = () => {
    setSpinning(true);
    setSpinResult(null);
    setTimeout(() => {
      const result = Math.floor(Math.random() * 30) + 1;
      setSpinResult(result);
      setSpinning(false);
    }, 3000);
  };

  return (
    <div style={{
      background: 'radial-gradient(circle, #0a0a0a, #000000)',
      color: 'white',
      minHeight: '100vh',
      padding: '3rem 2rem',
      fontFamily: 'Orbitron, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2.5rem', textAlign: 'center', color: '#FFD700', textShadow: '0 0 20px #FFD700' }}>
        🎛️ Staff Promo Control Panel
      </h1>

      <div className="promo-box">
        <h2 className="glow-text">🔥 Hot Seat Draw</h2>
        <button onClick={handleHotSeat} style={buttonStyle}>Draw Hot Seat</button>
        {hotSeatActive && <p style={winnerText}>🎯 Winner: {hotSeatWinner}</p>}
      </div>

      <div className="promo-box">
        <h2 className="glow-text">🎟️ Raffle (Manual Entry)</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Enter winning ticket number"
            value={manualRaffleInput}
            onChange={(e) => setManualRaffleInput(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleManualRaffleSubmit} style={buttonStyle}>Submit Winner</button>
        </div>
        {raffleWinner && <p style={winnerText}>🏆 Raffle Winner: {raffleWinner}</p>}
      </div>

      <div className="promo-box">
        <h2 className="glow-text">🎰 Hot Seat Spinner</h2>
        <button onClick={startSpin} style={buttonStyle}>Start Spin</button>
        {spinning && (
          <motion.div
            style={spinText}
            animate={{ rotate: [0, 1080] }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          >
            🎰 SPINNING...
          </motion.div>
        )}
        {spinResult && (
          <div style={resultText}>
            🏆 Machine #{spinResult} Wins!
          </div>
        )}
      </div>

      <div className="promo-box">
        <h2 className="glow-text">📆 Promo Notes</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '1.1rem' }}>
          <li>✅ Mini/Minor Pays 11AM – 9PM (Fire Links only)</li>
          <li>🎀 Ladies Night $20/$20</li>
          <li>🍕 Pizza Night – Customize date!</li>
        </ul>
      </div>
    </div>
  );
};

const buttonStyle = {
  background: 'linear-gradient(145deg, gold, #f7c200)',
  color: 'black',
  padding: '12px 24px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  border: '2px solid #000',
  borderRadius: '12px',
  cursor: 'pointer',
  boxShadow: '0 0 15px gold',
  margin: '10px 0'
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '8px',
  marginRight: '12px',
  border: '2px solid gold',
  width: '250px',
  background: '#000',
  color: '#FFD700',
  textAlign: 'center'
};

const winnerText = {
  marginTop: '1rem',
  fontSize: '1.5rem',
  color: '#00f7ff',
  textShadow: '0 0 8px #00f7ff'
};

const spinText = {
  fontSize: '4rem',
  marginTop: '2rem',
  color: 'greenyellow',
  textShadow: '0 0 12px lime',
  letterSpacing: '2px'
};

const resultText = {
  fontSize: '3rem',
  marginTop: '1rem',
  color: '#0ff',
  textShadow: '0 0 15px #0ff'
};

export default StaffPromoDashboard;
