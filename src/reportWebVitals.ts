import { ReportHandler } from 'web-vitals';

/**
 * @param {ReportHandler} [_onPerfEntry]
 */
const reportWebVitals = (_onPerfEntry?: ReportHandler): void => {
  if (_onPerfEntry && _onPerfEntry instanceof Function) {
    void import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(_onPerfEntry);
      getFID(_onPerfEntry);
      getFCP(_onPerfEntry);
      getLCP(_onPerfEntry);
      getTTFB(_onPerfEntry);
    });
  }
};

export default reportWebVitals;
