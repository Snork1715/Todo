import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Stats from './components/Stats'
import Container from './components/Container'

function App() {
  return (
    <div className='App'>
      <TodoInput />
      <Container>
        <Stats />
        <TodoList />
      </Container>
    </div>
  )
}

export default App
