function Modal (props) {
    function cancelHandler() {
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm();
    }

    return (
      <div className="modal">
        <p>삭제하시겠습니까?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>
          취소
        </button>
        <button className="btn" onClick={confirmHandler}>
          확인
        </button>
      </div>
    );
}

export default Modal;