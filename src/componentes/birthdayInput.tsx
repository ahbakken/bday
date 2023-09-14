import '../styles/birthdayInput.css';
import { useState } from 'react';

export default function BirthdayInput() {
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    gifts: '',
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { name, birthday, gifts } = formData;
    console.log(`Name: ${name}, Birthday: ${birthday}, Gifts: ${gifts}`);
  };

  return (
    <div className="card-form">
      <form onSubmit={handleSubmit} className="form-div">
        <div className="container">
          <label htmlFor="name">Birthday boiiii:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="container">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
        </div>
        <div className="container">
          <label htmlFor="birthday">Gifts</label>
          <input
            type="text"
            id="gifts"
            name="gifts"
            placeholder="Gifts"
            value={formData.gifts}
            onChange={handleInputChange}
          />
        </div>
        <div className="btn-submit">
          <button type="submit">
            Add birthday
          </button>
        </div>
      </form>
    </div>
  );
}
