/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('testing undo, redo and color picker', () => {
    render(<App />)

    const undoButton = screen.getByText('undo');
    const redoButton = screen.getByText('redo');
    const colorInput = screen.getByTestId('color-picker')

    fireEvent.change(colorInput, {
      target: {
        value: '#000000'
      }
    })
    fireEvent.click(undoButton);
    fireEvent.click(redoButton);

    fireEvent.change(colorInput, {
      target: {
        value: "#FFFFFF",
      },
    });

    fireEvent.click(undoButton);
    fireEvent.click(redoButton);

    return waitFor(() => {
      expect(screen.getByTestId("display")).toHaveStyle({
        backgroundColor: "#FFFFFF",
      });
    });

  })
});
