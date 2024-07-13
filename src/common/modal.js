import react from 'react';
import { Modal, Button } from 'antd'

const ModalPop = (props) => {
    
    const {
        title,
        content,
        btnSuccess,
        btnCancel,
        handleSuccess,
        handleCancel,
        isVisible,
        center
    } = props

   
    return (
        <div>
            <Modal
                className={center}
                title={title}
                visible={isVisible} 
                onOk={handleSuccess}
                onCancel={handleCancel}
                footer={[
                    btnSuccess ? btnSuccess : null
                  ]}
            >
                <p>{content}</p>
            </Modal>
        </div>
    )

}

export default ModalPop;