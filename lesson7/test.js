
// componenDidMount
useEffect(() => {
    // code
}, []);

const title = props.title;
// componentDidUpdate
useEffect(() => {
    // code
}, [title]);
useEffect(() => {
    // code - will run always on update of state/props
});

// componentWillUnmount
useEffect(() => {
    return () => {
        // code here
    }
}, []);



const [item, setItem] = useState({test: 1});
// повертає кортеж, де перша змінна - це змінна самого стейту, друга змінна - функція для зміни цього стейту
// приймає параметром дефолтний стейт


// 1
// const [contacts, setContacts] = useState([]);
// useEffect(() => {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts) {
//       setContacts(JSON.parse(savedContacts));
//     }
// }, []);
// const contacts1 = ['sdfsd', 'sdfsdf'];
// const contacts2 = ['sdfsd', 'sdfsdf'];
// useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [JSON.stringify(contacts)]);
// // 2
// const [contacts, setContacts] = useState(() => {
//     return JSON.parse(localStorage.getItem('contacts')) ?? [];
// });
// useEffect(() => {
//     localStorage.setItem(KEY, JSON.stringify(contacts));
// }, [JSON.stringify(contacts)]);



{/* <Modal onClose={onCloseHandler} onOpen={onOpenHandler}>
    <div>title</div>
    <div>description</div>
    <div>footer</div>
<Modal/> */}


// function Modal ({onClose, onOpen, children}) {
//     return <ReactModal onClose={onClose}>
//         {children}
//     </ReactModal>
// }







