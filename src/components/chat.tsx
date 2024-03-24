'use client'
import { useState } from "react";

const contacts = [
    {id:'0', name: 'Taylor', email:'taylor@mail.com'},
    {id:'1', name: 'Alice', email:'alice@mail.com'},
    {id:'2', name: 'Bob', email:'bob@mail.com'}
];

export function ContactList({ selectedContact, contacts, onSelect }:any) {
    return (
      <section className="contact-list">
        <ul className="w-full">
          {contacts.map((contact:any) =>
            <li key={contact.email}>
              <button className="text-xs bg-blue-400 rounded p-1 m-2 text-white"
              onClick={() => {
                onSelect(contact);
              }}>
                {contact.name}
              </button>
            </li>
          )}
        </ul>
      </section>
    );
  }
  

export function Chat({ contact }:any) {
  const [text, setText] = useState('');
  return (
    <section className="chat m-2">
      <textarea
        rows={5}
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button className="text-xs bg-gray-400 rounded px-2 py-1 m-2 text-blue-800">Send to {contact.email}</button>
    </section>
  );
}

export default function Messenger(){
    const [to, setTo] = useState(contacts[0]);
    return (
        <div>
            <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th scope="col" className="px-6 py-3">Contact List</th>
                    <th scope="col" className="px-6 py-3">Message</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ContactList
                                contacts={contacts}
                                selectedContact={to}
                                onSelect={(contact:any) => setTo(contact)}
                            />
                        </td>
                        <td>
                            <Chat key={to.email} contact={to} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
