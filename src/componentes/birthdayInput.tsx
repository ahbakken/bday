import '../styles/input.css';
import { useState } from 'react';

export default function BirthdayInput() {
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
  });

  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { name, birthday } = formData;
    console.log(`Name: ${name}, Birthday: ${birthday}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <label htmlFor="name">Birthday boiiii:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className='form-div'>Submit</button>
      </form>
    </>
  );
}
