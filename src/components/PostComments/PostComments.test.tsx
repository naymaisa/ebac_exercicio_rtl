import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Inserção de comentários', () => {
    it('deve permitir inserir dois comentários', () => {
        render(<Post />);

        const textarea = screen.getByTestId('input-comentario');
        const botao = screen.getByTestId('botao-enviar');


        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(botao);


        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(botao);


        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
