import React from 'react';
import { render } from '@testing-library/react';
import Top from './Top';

describe('スナップショットテスト', () => {
  test('前回スナップショットと一致すること', () => {
    const sut = render(<Top />);
    expect(sut).toMatchSnapshot();
  });
});
