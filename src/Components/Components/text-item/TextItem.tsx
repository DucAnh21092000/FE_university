import { Col } from 'antd';
import styles from './TextItem.module.scss';
import { IProps } from './model';

export default function TextItem(props: IProps) {
  const { label, children, className, textItemProps = {} } = props;
  const { isCol = true, spanMobNumber = 24, spanNumber = 12 } = textItemProps;

  return isCol ? (
    <Col
      className={`${styles.hcisComptReporttextitem} ipadMiniResponsive ${
        className ?? ''
      }`}
      xs={spanMobNumber}
      md={spanNumber}
    >
      <div className="hcis-compt-reporttextitem-label"> {label}</div>
      <div className="hcis-compt-reporttextitem-text">{children}</div>
    </Col>
  ) : (
    <div className={`${styles.hcisComptReporttextitem} ${className ?? ''}`}>
      <div className="hcis-compt-reporttextitem-label"> {label}</div>
      <div className="hcis-compt-reporttextitem-text">{children}</div>
    </div>
  );
}
