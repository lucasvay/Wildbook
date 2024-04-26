import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

export default function StandardDialog({
  open,
  onClose,
  title,
  titleId,
  children
}) {
  useEffect(() => {
    $(`#standardDialog`).modal(open ? 'show' : 'hide');
  }, [open]);

  return (
    <div className="modal fade" id="standardDialog" tabIndex="-1" aria-labelledby="standardDialogTitle" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="standardDialogTitle">
              <FormattedMessage id={titleId} defaultMessage={title} />
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>关闭</button>
          </div>
        </div>
      </div>
    </div>
  );
}
