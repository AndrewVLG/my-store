import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {

    return (
        <div className={styles.wrapper}>
            <h1>My-Store</h1>
            <h2>Registration Page</h2>
            <form>
                <label>E-mail: </label>
                <input placeholder='Enter your E-mail'/>
                <label>Password </label>
                <input placeholder='Enter Password' type='password'/>
                <label>Confirm password </label>
                <input placeholder='Confirm Password' type='password'/>
                <label>Nickname: </label>
                <input placeholder='Enter Nickname'/>
                <label>First name: </label>
                <input placeholder='Enter your First name'/>
                <label>Last name: </label>
                <input placeholder='Enter your Last name'/>
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegistrationPage;