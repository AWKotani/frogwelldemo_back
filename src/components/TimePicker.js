import { Moment } from 'moment';
import * as React from 'react';
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import DatePicker from './DatePicker';

export TimePickerProps extends Omit<PickerTimeProps<Moment>, 'picker'> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => (
  <DatePicker {...props} picker="time" mode={undefined} ref={ref} />
));

TimePicker.displayName = 'TimePicker';

export default TimePicker;