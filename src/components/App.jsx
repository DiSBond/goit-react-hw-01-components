import Card from './Card/Card';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json'
import transactions from '../transactions.json'
import Section from './Statistic/Section';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory'


export const App = () => {
  return (
    <div>
      <Card
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> 

      <Section title='Upload stats' stats={data} />
      
      <FriendList items={friends} />
      
      <TransactionHistory items={transactions}/>
        
    </div>
  );
};

