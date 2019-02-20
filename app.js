
const ValidationMessage = (props) => <p>{props.txt}</p>

const OrderForm = (props) => (
    <form onSubmit={props.submit}>
        <input type="checkbox" id="age" onChange={props.change} checked={props.checked}/>
        <label htmlFor="age">Mam co najmniej 16 lat</label><br/>
        <button type="submit">Kup bilet</button>
    </form>  
)

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
    const {isConfirmed } = this.state
    
    return (
     <React.Fragment>
      <h1>Kup bilet na horror roku!</h1>
        <OrderForm 
            change={this.handleCheckboxChange} 
            checked={isConfirmed}
            submit={this.handleFormSubmit}
        />
        {this.displayMessage()} 
     </React.Fragment>
    )
  }
}


ReactDOM.render(<TicketShop/>, document.getElementById('root'));