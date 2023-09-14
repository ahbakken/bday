import '../../styles/home.css';
import Header from '../../componentes/header';
import InputBirthday from '../../componentes/birthdayInput';

export default function Home() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='form-bday'>
        <h2>Enter a new birthday to the calendar</h2>
        <InputBirthday />
      </div>
    </>
  );
}
