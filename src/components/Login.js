import React from 'react';

const Login = (props) => {

	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignup,
		hasAccount,
		setHasAccount,
		emailError,
		passwordError,
	} = props;

	return(
		<section className="login">
			<div className = "loginContainer">
				<label>Nom d'utilisateur</label>
				<input
					type="text"
					autoFocus
					required
					value ={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="errorMsg">{emailError}</p>
				<label>Mot de passe</label>
				<input 
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			<p className="errorMsg">{passwordError}</p>
			<div className="btnContainer">
				{hasAccount ? (
					<>
						<button onClick={handleLogin}>Se connecter</button>
						<p>Vous n'avez pas de compte ? 😮
						<span onClick={() => setHasAccount(!hasAccount)}>S'inscrire</span></p>
					</>	
				) :(
					<>
						<button onClick={handleSignup}>S'inscrire</button>
						<p>Avez vous un compte ? 🙄
						<span onClick={() => setHasAccount(!hasAccount)}>Se connecter</span></p>
					</>
				)}	
			</div>
			</div>
		</section>	
	);
};

export default Login;