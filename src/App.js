import Section from './components/section/Section';
import Container from './components/container/Container';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

import './App.css';

import user from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friendList/friends.json';
import transactions from './components/transactionHistory/transactions.json';

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

        <Container title="Задание 2 - Секция статистики">
          <Statistics title="Upload stats" stats={statisticalData} />
          <Statistics stats={statisticalData} />
        </Container>

        <Container title="Задание 3 - Список друзей">
          <FriendList friends={friends} />
        </Container>

        <Container title="Задание 4 - История транзакций">
          <TransactionHistory items={transactions} />
        </Container>
      </Section>
    </div>
  );
}

export default App;
