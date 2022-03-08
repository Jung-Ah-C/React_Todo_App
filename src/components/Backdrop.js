function Backdrop(props) {
    // div는 내장된 HTML 엘리먼트이기 때문에 컴포넌트의 매개변수 함수를 받아서 onClick 속성으로 실행시킬 수 있음
    return <div className='backdrop' onClick={props.onCancel} />
}

export default Backdrop;