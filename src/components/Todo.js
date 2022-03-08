import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo (props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>삭제</button>
            </div>
            {/* 조건부 렌더링, ? 연산자를 사용해서 렌더링 하는 것보다 && 이 더 빠름 */}
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
            { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
        </div>
    );
}

export default Todo;