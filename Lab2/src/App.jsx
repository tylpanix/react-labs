import Profile from './components/Profile';
import './App.css';

const users = [
  {
    name: "Jon Snow",
    role: "Project Manager",
    avatarUrl: "https://i.pravatar.cc/150?u=jon-snow"
  },
  {
    name: "Daenerys Targaryen",
    role: "Frontend Developer",
    avatarUrl: "https://i.pravatar.cc/150?u=daenerys"
  },
  {
    name: "Walter White",
    role: "UX/UI Designer",
    avatarUrl: "https://i.pravatar.cc/150?u=walter-white"
  },
  {
    name: "Sherlock Holmes",
    role: "Detective",
    avatarUrl: "https://i.pravatar.cc/150?u=sherlock"
  },
  {
    name: "Eleven",
    role: "Psychic",
    avatarUrl: "https://i.pravatar.cc/150?u=eleven"
  }
];


function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <div className="profile-list">
        {users.map(user => (
          <Profile
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;