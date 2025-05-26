import React, { useState } from 'react';
import './PopupContent.css';

function Notes({ setPopupTitle }) {
  const [notes, setNotes] = useState([
    {
      title: "vad i hel*****",
      text: "Hur fan centrerar jag en div???",
      lastModified: new Date()
    },
    {
      title: "My dreams",
      text: "I want to become an engineer and solve problems! I love math and making the world a better place /Casper 6 years old",
      lastModified: new Date('2006-05-04T15:30:00')
    }
  ]);

  const [activeNoteIndex, setActiveNoteIndex] = useState(1);

  const handleTextChange = (e) => {
    const updatedNotes = [...notes];
    updatedNotes[activeNoteIndex] = {
      ...updatedNotes[activeNoteIndex],
      text: e.target.value,
      lastModified: new Date()
    };
    setNotes(updatedNotes);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className='notes-container'>
      <div className='notes-container-left'>
        {notes.map((note, index) => (
          <div
            key={index}
            className={`notes-container-row ${activeNoteIndex === index ? 'active' : ''}`}
            onClick={() => setActiveNoteIndex(index)}
            style={{display:'flex', flexDirection:'column'}}
          >
            <h2>{note.title}</h2>
            <p className="timestamp">Last changed: {formatDate(note.lastModified)}</p>
          </div>
        ))}
      </div>

      <div className='notes-container-right'>
        <textarea
          value={notes[activeNoteIndex].text}
          onChange={handleTextChange}
          rows={10}
          cols={40}
        />
        <p className="timestamp-right">
          Last changed: {formatDate(notes[activeNoteIndex].lastModified)}
        </p>
      </div>
    </div>
  );
}

export default Notes;
