// import './App.css';
import Comments from './Comments';
import Female from './components/Female'
import Male from './components/Male'

function App() {
 
  let values = ['Justina', 'Chidinma', 'Rachel', 'Grace']
  let males = ['Godswill', 'Caeser', 'Emmanuel', 'Nonso']
  let comment = ['I love React', 'React got me my first car', 'React helped me to relocate to abroad', 'I\'m super grateful to God almighty',]
  
  return (
    <>
    
    <div className="container">
          <Female data = {values}/>
          <Male data= {males}/>
          <Comments data = {comment}/> 
    </div>
    </>
  );
}

export default App;
