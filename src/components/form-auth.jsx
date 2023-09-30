
const Authorization = () => {
    return(
        <>
            <div id="container-auth">
                <div id="form-auth">
                    <h3 id="text-login">Login Here</h3>

                    <label for="username" id="label-auth">Username</label>
                    <input type="text" placeholder="username" id="username" className="input-auth"/>

                    <label for="password" id="label-auth">Password</label>
                    <input type="password" placeholder="Password" id="password" className="input-auth"/>

                    <button id="btn-auth">Log In</button>
                </div>

            </div>
        </>
    );
};

export  {  Authorization  }