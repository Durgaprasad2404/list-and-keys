import UserPro from './components/Userprofile/ind'

const user = [
  {
    uniqueId: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'dp',
    role: 'depos',
  },
  {
    uniqueId: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'dp',
    role: 'depos',
  },
  {
    uniqueId: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'dp',
    role: 'depos',
  },
  {
    uniqueId: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'dp',
    role: 'depos',
  },
]
const App = () => (
  <div>
    <h1>User List</h1>
    <ul>
      {user.map(i => (
        <UserPro userDetails={i} uniqueId={user.uniqueId} />
      ))}
    </ul>
  </div>
)

export default App
