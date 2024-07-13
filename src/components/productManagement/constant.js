import appconstant from "../../themes/appconstant";
import { ConfirmationModel } from "../../utils/Model";
import { FirstLetterUpperCase } from "../../utils/utils"

export const TabelHeader = (cb, Userid, currentPage) => {
    return ([{
        title: 'Sr. No.',
        dataIndex: 'srno',
        key: 'srno',
        sorter: false,
        render: (value, item, index) => (currentPage > 1 ? (currentPage - 1) * 10 + (index + 1) : index + 1)
    },
    {
        title: 'Product Image ',
        dataIndex: 'productImage',
        key: 'userid',
        sorter: false,
        render: ((value, item) => {
            return (<img src={appconstant.ImageUrl + item.productImage} alt={"photo"} style={{ border: "1px solid black " }} />)
        })
    },
    {
        title: 'Product Name ',
        dataIndex: 'productName',
        key: 'productName',
        sorter: true,
        render: (value, item) => <div>{FirstLetterUpperCase(item?.productName)}</div>
    },
    {
        title: 'Action',
        dataIndex: 'Posted',
        key: 'Posted',
        render: (value, item, index) => {
            return (
                <div >
                    <button type="button" onClick={() => Userid(item)}>{appconstant.edit}</button>
                    <button type="button" onClick={() => { ConfirmationModel(!item.isActivated ? appconstant.ActivateTittle : appconstant.DeactivateTittle, !item.isActivated ? appconstant.ActivateProduct : appconstant.DeactivateProduct, (isClick => cb(isClick && item))) }}>{!item.isActivated ? appconstant.activate : appconstant.deactivate}</button>
                    <button type="button" onClick={() => { ConfirmationModel(appconstant.DuplicateTittle, appconstant.DuplicateProduct, (isClick => cb(isClick, appconstant.DuplicateTittle, item))) }}>{appconstant.duplicate}</button>
                </div >
            )
        }
    },
    ])
};
