function Login(enviar) {
    return (
        <main>
            <div className="Cadastrar">
                <div>
                    <h1>Cadastro</h1>
                    <a href="">Se ja tem uma conta , acesse aqui!</a>
                </div>
                <div>
                    <form className="form">
                        <input type="text" placeholder="Nome" /><br/>
                        <input type="number" placeholder="Numero de telefone" /><br/>
                        <input type="number" placeholder="Senha" /><br/>
                        <input type="email" placeholder="Email" /><br/>
                        <input onClick={enviar} type="button" placeholder="Email" value="Cadastrar" />
                    </form>
                </div>
            </div>
        </main>
    )
}
export default Login