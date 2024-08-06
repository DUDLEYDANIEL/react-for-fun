import PropsTypes from "prop-types";
export default function UserGreeting(props) {
    if (props.isLoggedIn) {
        return <h1 className="welcome-msg">Welcome {props.username}</h1>
    } else {
        return <h1 className="login-pmpt">Who are you ???</h1>
    }
}

UserGreeting.PropsTypes = {
    isLoggedIn: PropsTypes.bool,
    username: PropsTypes.string
}