import PropTypes from 'prop-types';
function Student(props) {
    return (
        <>
           <div className="student">
            <p>name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>Student:{props.isStudent ? "Yes" : "No"}</p>
           </div>
        </>
    );
}
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Anonymous",
    age:0,
    isStudent: false
}
export default Student;