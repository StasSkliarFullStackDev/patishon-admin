import { Modal } from "antd";

export const ConfirmationModel = (title, content, isClick) => {
    Modal.confirm({
        title: title,
        content: content,
        okText: 'Yes',
        centered: true,
        cancelText: 'No',
        onOk() {
            isClick(true)
        },
        onCancel() {
            isClick(false)
        },
        className: "new-button"
    });
};