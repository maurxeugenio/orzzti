var Form = React.createClass({
    return render(
        <div className="col s12 l6">
        <h5 className="light">Entre em contato</h5>
        <div className="input-field">
        <i className="material-icons prefix">account_circle</i>
        <input onChange={this.handleInputChange} id="icon_prefix" name='name' type="text" className="validate" data-length="40"/>
        <label htmlFor="icon_prefix">Seu nome</label>
        </div>
        <div className="input-field">
        <i className="material-icons prefix">email</i>
        <input onChange={this.handleInputChange} id="icon_email" name='email' type="email" className="validate" />
        <label htmlFor="icon_email" data-error="Êpa, êpa, êpa! Vamos corrigir isso aí!" data-success="Tudo certo!">Email</label>
        </div>
        <div className="input-field">
        <i className="material-icons prefix">speaker_notes</i>
        <input onChange={this.handleInputChange} id="icon_email" name='subject' type="text" data-length="40" />
        <label htmlFor="icon_email">Assunto</label>
        </div>
        <div className="input-field">
        <i className="material-icons prefix">message</i>
        <textarea onChange={this.handleInputChange} id="icon_prefix2" name='message' className="materialize-textarea" data-length="300"></textarea>
        <label htmlFor="icon_prefix2">Sua mensagem</label>
        </div>
        <button onClick={this.handleClick} className="btn-large indigo darken-3 waves-effect" name="button">enviar <i className="material-icons right">send</i></button>
        </div>
    )
})

export Form;
