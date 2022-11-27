import React from 'react';
import { render } from '@testing-library/react';
import FloatingActionButton from './FloatingActionButton';

describe('スナップショットテスト', () => {
  test('前回スナップショットと一致すること', () => {
    const sut = render(<FloatingActionButton />);
    expect(sut).toMatchSnapshot();
  });
});
