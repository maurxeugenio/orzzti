var Contact = React.createClass({
    componentWillMount() {
        this.state = {
            sentIs: false,
            loading: false,
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
        this.setState({
            loading: true,
        })
        var _this = this;
        var url = 'https://maurxdev.pythonanywhere.com/contact/'
        var local_url = 'http://localhost:8000/contact/'

        fetch(url, {
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
        .then(function (data) {
            if (data.status==201) {
                _this.setState({loading: false, sentIs: true})
            }else{
                _this.setState({loading: false, sentIs: false})
            }
        })
    },

    newMessageClick(){
        return this.setState({
            sentIs: false,
        })
    },
    render: function () {
        if (this.state.loading==true) {
            return(
                <div className="col s12 l6 m12 center">
                <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
                </div>

                <div className="spinner-layer spinner-red">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
                </div>

                <div className="spinner-layer spinner-yellow">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
                </div>

                <div className="spinner-layer spinner-green">
                <div className="circle-clipper left">
                <div className="circle"></div>
                </div><div className="gap-patch">
                <div className="circle"></div>
                </div><div className="circle-clipper right">
                <div className="circle"></div>
                </div>
                </div>
                </div>
                </div>
            )
        }else{
            if (this.state.sentIs==false) {
                return(
                    <div className="col s12 l6 m12">
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
                    <div className="col s12 l6 m12 center align-center">
                    <p className="justify">Obrigado! A sua mensagem foi enviada, em breve entraremos em contato.</p>
                    <button onClick={this.newMessageClick} className="waves-effect btn-large green">nova menssagem</button>
                    </div>
                );
            }
        }
    }
});

ReactDOM.render(
    <Contact />,
    document.getElementById('contact')
);
