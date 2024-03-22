'use client'
import { useState } from "react";

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>Yay...Jawaban Benar!</h1>
    }

    async function handleSubmit(e: { preventDefault: ()  => void; }) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err:any) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e:any) {
        setAnswer(e.target.value);
    }

    return (
      <>
        <div className="w-full max-w-xs">
            <h2>Guess Animal Name</h2>
            <p>What animal that Doraemon afraid of?</p>
            <form
                className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
                onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button
                    className="bg-blue-400 p-2 m-2 rounded text-sm text-white"
                    disabled={answer.length === 0 || status === 'submitting'}>
                    Submit
                </button>
                {error !== null && <p className="Error text-red-500 text-sm">{error.message}</p>}
            </form>
        </div>
      </>
    );
}

function submitForm(jawaban:any){
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            let shouldError = jawaban.toLowerCase() !== 'tikus'
            if (shouldError) {
                reject(new Error('Tebakan yang bagus tetapi jawaban salah. Silahkan coba lagi!'));
            } else {
                resolve();
            }
        }, 500)
    })
}

export function Form2(){
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const fullname = firstName+' '+lastName;

    function handleFirstNameChange(e:any){
        setFirstName(e.target.value);
    }
    function handleLastNameChange(e:any){
        setLastName(e.target.value);
    }
    
    return(
        <>
            <h2>Silahkan isi nama lengkap Anda</h2>
            <label className="block w-full m-2">
                Nama depan:
                <input className="text-sm text-black ml-2 rounded"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label className="">
                Nama belakang:
                <input className="text-sm text-black ml-2 rounded"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>Nama lengkap: <b className="test-blue-600">{fullname}</b></p>
        </>
    );
}