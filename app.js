//const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!!!</p>;

//const NegativeMessage = () => <p>Przykro nam, ale jesteś za młody na ten film!!!</p>;

const ValidationMessage = (props) => <p>{props.txt}</p>

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }
handleCheckboxChange = () => {
  this.setState({
    isConfirmed: !this.state.isConfirmed,
    isFormSubmitted: false
  })
}

handleFormSubmit = (e) => {
  e.preventDefault();
  if(!this.state.isFormSubmitted) {
    this.setState({
      isFormSubmitted: true
    })
  } 
}

displayMessage= () => {
 if(this.state.isFormSubmitted) {
   if(this.state.isConfirmed) {
     return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!!!"/> 
   } else {
     return <ValidationMessage txt="Przykro nam, ale jesteś za młody na ten film!!!"/>
   }
  } else { return null}
 }

  render() {
    console.log(this.state.isConfirmed)
    return (
     <React.Fragment>
      <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed}/>
            <label htmlFor="age">Mam co najmniej 16 lat</label><br/>
            <button type="submit">Kup bilet</button>
        </form>  
        {this.displayMessage()} 
     </React.Fragment>
    )
  }
}


ReactDOM.render(<TicketShop/>, document.getElementById('root'));