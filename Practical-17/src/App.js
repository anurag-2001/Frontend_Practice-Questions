import './App.css';
import styled from 'styled-components';
import Card from './components/Card';

function App() {

  return (
    <div className="app">
        <h3>Calorie Read Only</h3>
        <Container>
            <Card title="Pizza" calorie="56"/>
            <Card title="Burger" calorie="69"/>
            <Card title="Coke" calorie=" 500"/>
            <Card title="Browne" calorie="180"/>
            <Card title="Fried Rice" calorie="90"/>
            <Card title="Lassania" calorie="200"/>
            <Card title="Pani Puri" calorie="10"/>
        </Container>
    </div>
  );
}

const Container=styled.div`
width:50vw;
height:70vh;
min-height:60vh;
border-radius:0.2rem;
overflow-y:auto;
overflow-x:hidden;
box-shadow:0px 3px 5px rgba(0,0,0);
padding-top:1rem;
padding-left:0.5rem;
padding-right:0.5rem;
padding-top:1rem;
`
export default App;
