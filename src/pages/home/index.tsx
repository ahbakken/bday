import '../../styles/home.css';
import Header from '../../componentes/header';
import InputBirthday from '../../componentes/birthdayInput';

export default function Home() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <h2>Add birthday</h2>
        <InputBirthday />
      </div>
    </>
  );
}
