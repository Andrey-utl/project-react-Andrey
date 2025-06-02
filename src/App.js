import './App.css';

import Card from './Components/Card';
import from './estilo.css'
function App() {
  const biografia = "Aluno Andrey, 2*ADS Santa Maria Goretti....";
  return (
    <div>
<header>
   <Card 
   fotoPerfil="1ziE.gif"
   nome = "Andrey H. Silva" 
   biografia = {biografia}/>
 </header>
 <main>
  <section>
    <h1>Projetos</h1>
  </section>
 </main>
 <footer>
  <p>Desenvolvido por Andrey Henrique - 2025</p>
 </footer>
 </div>
  );
}

export default App;
