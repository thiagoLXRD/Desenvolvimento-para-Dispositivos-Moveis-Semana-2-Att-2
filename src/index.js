import React from 'react';
import ReactDOM from 'react-dom/client';


class ListaTarefas extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      titulo : '',
      status: 'no prazo',
      lista : []

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChance = this.handleChance.bind(this)

  }

  handleChance() {
    this.setState({ titulo: document.getElementById('t').value, status : document.getElementById('s').value})
  }


  handleSubmit(){
    if(this.state.titulo){
      this.setState(prevState =>({
        lista: [...prevState.lista, <div>Titulo : {prevState.titulo} Prazo :  {prevState.status}</div>]
      }))
    }

  }

  render(){
    const listItems = this.state.lista.map((li, index) => {
      return <li key={index}>{li}</li>
    })
    return (
      <div>
        <form>
          Titulo da Tarefa:
          <input id='t' onChange={this.handleChance} value={this.state.titulo}/>
          <br></br>
          Status da Tarefa:        
          <select id='s' onChange={this.handleChance} value={this.state.status}>
            <option value="atrasada">Atrasada</option>
            <option value="No prazo">No prazo</option>
            <option value="proximo ao prazo">Proxímo ao Prazo</option>
          </select>
          <br></br>
        </form>
        <button onClick={this.handleSubmit}>Adicionar Tarefa</button>
        {listItems}


      </div>

    )
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Lista de Tarefas</h1>
    <ListaTarefas/>
  </div>
);