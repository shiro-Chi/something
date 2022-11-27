import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('スナップショットテスト', () => {
  test('前回スナップショットと一致すること', () => {
    const sut = render(<Header />);
    expect(sut).toMatchSnapshot();
  });
});
