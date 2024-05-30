import React from 'react'

function Register() {

    const body = {
        backgroundColor: '#f8f9fa',
        height: '100vh',
    }

    const container = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
    }
    const card = {
        border: 'none',
        borderRadius: '20px',
        boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)',
    }
    const cardHeader = {
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '20px 20px 0 0,'
    }
    const cardBody = {
        padding: '40px',
    }
    const btnRegister = {
        backgroundCcolor: '#007bff',
        border: 'none',
        borderRadius: '20px',
    }


    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
            <body style={body}>

                <div style={container}>
                    <div className="justify-content-center row" style={{ width:'100%' }}>
                        <div className="col-sm-8 col-md-6 col-xs-12">
                            <div style={card}>
                                <div style={cardHeader}>
                                    <h3 className="text-center">Register</h3>
                                </div>
                                <div style={cardBody}>
                                    <form action="php/register.php" method="post">
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="Enter password" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirm_password">Confirm Password</label>
                                            <input type="password" className="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm password" />
                                        </div>
                                        <button type="submit" className="btn-block btn btn-primary" style={btnRegister}>Register</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Bootstrap JS and dependencies --> */}
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

            </body>

        </>
    )
}

export default Register