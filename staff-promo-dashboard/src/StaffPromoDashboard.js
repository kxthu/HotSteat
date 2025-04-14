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
        <ul>
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
  border
