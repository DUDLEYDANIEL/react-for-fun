import Student from "./Student";

export default function StudentPage(){
    return(
        <>
        <Student name="John" age={30} isStudent={false}/>
        <Student name="Jane" age={25} isStudent={true}/>
        <Student name="Bob" age={40} isStudent={false}/>
        <Student/>
        </>
    );
}