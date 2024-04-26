import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Alert } from 'react-bootstrap'; 

const Core = function ({
  descriptionId = '',
  description,
  descriptionValues,
  alertChildren,
  children,
  variant = 'primary', 
  ...rest
}) {
  return (
    <Alert variant={variant} {...rest}>
      {children}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {descriptionId ? (
          <FormattedMessage
            id={descriptionId}
            values={descriptionValues}
            tagName="p" 
          />
        ) : (
          <p>{description}</p> 
        )}
        {alertChildren}
      </div>
    </Alert>
  );
};

export default function CustomAlert({
  titleId = '',
  titleTxt,
  titleValues,
  children: alertChildren,
  variant,
  ...rest
}) {
  const isTitle = titleId || titleTxt;
  return (
    <Core variant={variant} alertChildren={alertChildren} {...rest}>
      {isTitle && (
        <h4 className="alert-heading"> {/* `alert-heading` for alert titles in Bootstrap */}
          {titleId ? (
            <FormattedMessage id={titleId} values={titleValues} tagName="span" />
          ) : (
            <span>{titleTxt}</span> // Using `span` for simple text
          )}
        </h4>
      )}
    </Core>
  );
}
