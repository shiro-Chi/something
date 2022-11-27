import React from 'react';
import { render } from '@testing-library/react';
import FormDialog from './FormDialog';

describe('スナップショットテスト', () => {
  test('ダイアログがオープンの状態の前回スナップショットと一致すること', () => {
    const sut = render(<FormDialog dialogActivated={true} onClose={() => ''} />);
    expect(sut).toMatchSnapshot();
  });
  test('ダイアログがクローズの状態の前回スナップショットと一致すること', () => {
    const sut = render(<FormDialog dialogActivated={false} onClose={() => ''} />);
    expect(sut).toMatchSnapshot();
  });
});
