import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1048,
        canvasWidth: 979,
        canvasHeight: 3318,
    },
});
