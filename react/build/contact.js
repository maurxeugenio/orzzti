var Contact = React.createClass({
    componentWillMount() {
        this.state = {
            sentIs: false,
            loading: false
        };
    },

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    },

    handleClick() {
        this.setState({
            loading: true
        });
        var _this = this;
        var url = 'https://maurxdev.pythonanywhere.com/contact/';
        var local_url = 'http://localhost:8000/contact/';

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(function (data) {
            if (data.status == 201) {
                _this.setState({ loading: false, sentIs: true });
            } else {
                _this.setState({ loading: false, sentIs: false });
            }
        });
    },

    newMessageClick() {
        return this.setState({
            sentIs: false
        });
    },
    render: function () {
        if (this.state.loading == true) {
            return React.createElement(
                'div',
                { className: 'col s12 l6 m12 pre-load valign-wrapper' },
                React.createElement(
                    'div',
                    { className: 'preloader-wrapper big active' },
                    React.createElement(
                        'div',
                        { className: 'spinner-layer spinner-blue' },
                        React.createElement(
                            'div',
                            { className: 'circle-clipper left' },
                            React.createElement('div', { className: 'circle' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'gap-patch' },
                            React.createElement('div', { className: 'circle' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'circle-clipper right' },
                            React.createElement('div', { className: 'circle' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'spinner-layer spinner-red' },
                        React.createElement(
                            'div',
                            { className: 'circle-clipper left' },
                            React.createElement('div', { className: 'circle' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'gap-patch' },
                            React.createElement('div', { className: 'circle' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'circle-clipper right' },
                            React.createElement('div', { className: 'circle' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'spinner-layer spinner-yellow' },
                        React.createElement(
                            'div',
                            { className: 'circle-clipper left' },
                            React.createElement('div', { className: 'circle' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'gap-patch' },
                            React.createElement('div', { className: 'circle' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'circle-clipper right' },
                            React.createElement('div', { className: 'circle' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'spinner-layer spinner-green' },
                        React.createElement(
                            'div',
                            { className: 'circle-clipper left' },
                            React.createElement('div', { className: 'circle' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'gap-patch' },
                            React.createElement('div', { className: 'circle' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'circle-clipper right' },
                            React.createElement('div', { className: 'circle' })
                        )
                    )
                )
            );
        } else {
            if (this.state.sentIs == false) {
                return React.createElement(
                    'div',
                    { className: 'col s12 l6 m12' },
                    React.createElement(
                        'h5',
                        { className: 'light' },
                        'Entre em contato'
                    ),
                    React.createElement(
                        'div',
                        { className: 'input-field col s12' },
                        React.createElement(
                            'i',
                            { className: 'material-icons prefix' },
                            'account_circle'
                        ),
                        React.createElement('input', { onChange: this.handleInputChange, id: 'icon_prefix', name: 'name', type: 'text', placeholder: 'Nome completo', className: 'validate', 'data-length': '40' }),
                        React.createElement(
                            'label',
                            { htmlFor: 'icon_prefix' },
                            'Seu nome'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'input-field col s12' },
                        React.createElement(
                            'i',
                            { className: 'material-icons prefix' },
                            'email'
                        ),
                        React.createElement('input', { onChange: this.handleInputChange, id: 'icon_email', name: 'email', type: 'email', placeholder: 'seu@email.com', className: 'validate' }),
                        React.createElement(
                            'label',
                            { htmlFor: 'icon_email', 'data-error': '\xCApa, \xEApa, \xEApa! Vamos corrigir isso a\xED!', 'data-success': 'Tudo certo!' },
                            'Email'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'input-field col s12' },
                        React.createElement(
                            'i',
                            { className: 'material-icons prefix' },
                            'subject'
                        ),
                        React.createElement('input', { onChange: this.handleInputChange, id: 'icon_email', name: 'subject', type: 'text', placeholder: 'D\xFAvidas, or\xE7amentoes...', 'data-length': '40' }),
                        React.createElement(
                            'label',
                            { htmlFor: 'icon_email' },
                            'Assunto'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'input-field col s12' },
                        React.createElement(
                            'i',
                            { className: 'material-icons prefix' },
                            'message'
                        ),
                        React.createElement('textarea', { onChange: this.handleInputChange, id: 'icon_prefix2', name: 'message', className: 'materialize-textarea', placeholder: 'sua mensage...', 'data-length': '300' }),
                        React.createElement(
                            'label',
                            { htmlFor: 'icon_prefix2' },
                            'Sua mensagem'
                        )
                    ),
                    React.createElement(
                        'button',
                        { onClick: this.handleClick, className: 'btn-large indigo darken-3 waves-effect', name: 'button' },
                        'enviar ',
                        React.createElement(
                            'i',
                            { className: 'material-icons right' },
                            'send'
                        )
                    )
                );
            } else {
                return React.createElement(
                    'div',
                    { className: 'col s12 l6 m12 center align-center' },
                    React.createElement(
                        'p',
                        { className: 'justify' },
                        'Obrigado! A sua mensagem foi enviada, em breve entraremos em contato.'
                    ),
                    React.createElement(
                        'button',
                        { onClick: this.newMessageClick, className: 'waves-effect btn-large green' },
                        'nova menssagem'
                    )
                );
            }
        }
    }
});

ReactDOM.render(React.createElement(Contact, null), document.getElementById('contact'));
