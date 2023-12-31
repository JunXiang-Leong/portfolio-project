import { createBoard } from '@wixc3/react-board';
import { Portofolio } from '../../../components/portofolio/portofolio';

export default createBoard({
    name: 'Portofolio',
    Board: () => <Portofolio />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
    },
});
