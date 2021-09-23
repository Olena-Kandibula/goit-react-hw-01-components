import Section from './components/section/Section';
import Container from './components/container/Container';
import Profile from './components/profile/Profile';
import './App.css';
import user from './user.json';

function App() {
  return (
    <div className="App">
      <Section>
        <Container title="Задание 1 - Профиль социальной сети">
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </Section>
      <Section>
        <Container title="Задание 2 - Секция статистики"></Container>
      </Section>
      <Section>
        <Container title="Задание 3 - Список друзей"></Container>
      </Section>
      <Section>
        <Container title="Задание 4 - История транзакций"></Container>
      </Section>
    </div>
  );
}

export default App;
