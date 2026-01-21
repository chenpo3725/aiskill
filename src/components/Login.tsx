import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
    onLogin?: (email: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState<'email' | 'otp'>('email');

    const handleSendOtp = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sending OTP to:', email);
        // Simulate API call
        setStep('otp');
    };

    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Verifying OTP:', { email, otp });
        // Simulate verification
        if (onLogin) {
            onLogin(email);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <header className="login-header">
                    <h1>{step === 'email' ? 'Sign In' : 'Verify OTP'}</h1>
                    <p>
                        {step === 'email'
                            ? 'Enter your email to receive a code.'
                            : `Enter the code sent to ${email}`}
                    </p>
                </header>

                {step === 'email' ? (
                    <form onSubmit={handleSendOtp}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <button type="submit" className="btn-submit">
                            Send Code
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtp}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="otp">
                                One-Time Password
                            </label>
                            <input
                                id="otp"
                                type="text"
                                className="form-input"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="123456"
                                required
                                maxLength={6}
                            />
                        </div>
                        <button type="submit" className="btn-submit">
                            Verify & Login
                        </button>
                        <button
                            type="button"
                            className="btn-submit"
                            onClick={() => setStep('email')}
                            style={{ background: 'transparent', color: '#718096', marginTop: 0 }}
                        >
                            Back to Email
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};
