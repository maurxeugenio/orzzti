var Contact = React.createClass({
    componentWillMount() {
        this.state = {
            sentIs: false,
        };
    },

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    },

    handleClick(){
        var _this = this;
        fetch('https://maurxdev.pythonanywhere.com/contact/', {
            method: 'POST',
            headers:{
                'Access-control-Allow-Origin':'*',
                'Access-Control-Allow-Headers': '*',
                'content-type': 'application/json'
                },
            body: JSON.stringify(this.state),
        }).then(function (data) {

            if (data.status === 201){
                return _this.setState({
                    sentIs: true,
                })
            }else{
                alert('deu errado')
            }
        });
    },

    newMessageClick(){
        return this.setState({
            sentIs: false,
        })
    },
    render: function () {
        if (this.state.sentIs==false) {
            return(
                <div className="col s12 l6">
                    <h5 className="light">Entre em contato</h5>
                    <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input onChange={this.handleInputChange} id="icon_prefix" name='name' type="text" className="validate" data-length="40"/>
                    <label htmlFor="icon_prefix">Seu nome</label>
                    </div>
                    <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input onChange={this.handleInputChange} id="icon_email" name='email' type="email" className="validate" />
                    <label htmlFor="icon_email" data-error="Êpa, êpa, êpa! Vamos corrigir isso aí!" data-success="Tudo certo!">Email</label>
                    </div>
                    <div className="input-field col s12">
                    <i className="material-icons prefix">subject</i>
                    <input onChange={this.handleInputChange} id="icon_email" name='subject' type="text" data-length="40" />
                    <label htmlFor="icon_email">Assunto</label>
                    </div>
                    <div className="input-field col s12">
                    <i className="material-icons prefix">message</i>
                    <textarea onChange={this.handleInputChange} id="icon_prefix2" name='message' className="materialize-textarea" data-length="300"></textarea>
                    <label htmlFor="icon_prefix2">Sua mensagem</label>
                    </div>
                    <button onClick={this.handleClick} className="btn-large indigo darken-3 waves-effect" name="button">enviar <i className="material-icons right">send</i></button>
                </div>
            );
        }else{
            return(
                <div className="col s6 center">
                    <p className="justify">Obrigado! A sua mensagem foi enviada, em breve entraremos em contato.</p>
                    <button onClick={this.newMessageClick} className="waves-effect btn-large green">nova menssagem</button>
                </div>
            );
        }
    }
});

ReactDOM.render(
    <Contact />,
    document.getElementById('contact')
);
