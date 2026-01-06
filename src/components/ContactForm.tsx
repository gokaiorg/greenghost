'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'form-name': 'contact',
                    ...formData,
                }).toString(),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-12 mb-12">
            {/* Hidden static form for Netlify detection at build time */}
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                hidden
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
            </form>

            <div className="bg-[#13DE00] p-6 md:p-8 relative">
                {/* Pixel Art Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#13DE00]" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#13DE00]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#13DE00]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#13DE00]" />

                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 font-pixel text-center">
                    Send us a Message
                </h2>

                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* Hidden fields for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                        <label>
                            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-black mb-2 font-bold font-pixel text-sm">
                            NAME
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            autoComplete="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-black border-2 border-[#13DE00]/50 focus:border-[#13DE00] text-white p-3 outline-none transition-colors font-mono"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-black mb-2 font-bold font-pixel text-sm">
                            EMAIL
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black border-2 border-[#13DE00]/50 focus:border-[#13DE00] text-white p-3 outline-none transition-colors font-mono"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-black mb-2 font-bold font-pixel text-sm">
                            MESSAGE
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-black border-2 border-[#13DE00]/50 focus:border-[#13DE00] text-white p-3 outline-none transition-colors font-mono resize-none"
                            placeholder="How can we help you?"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        aria-busy={status === 'loading'}
                        className={`w-full border-2 border-black cursor-pointer py-4 px-6 font-bold font-pixel text-lg flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success'
                            ? 'bg-[#13DE00] border-2 text-black border-black'
                            : 'bg-black border-2 border-[#13DE00] text-[#13DE00] hover:bg-[#13DE00] hover:text-black'
                            }`}
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="w-6 h-6 animate-spin" />
                                SENDING...
                            </>
                        ) : status === 'success' ? (
                            'MESSAGE SENT!'
                        ) : (
                            <>
                                <Send className="w-6 h-6" />
                                SEND MESSAGE
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <p role="status" aria-live="polite" className="text-black text-center font-mono font-bold">
                            ✅ Thanks for reaching out! We&apos;ll get back to you soon.
                        </p>
                    )}

                    {status === 'error' && (
                        <p role="alert" aria-live="assertive" className="text-red-600 text-center font-mono font-bold">
                            ❌ {errorMessage}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
