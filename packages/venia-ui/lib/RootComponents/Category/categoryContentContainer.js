import { connect } from '@magento/venia-drivers';
import { toggleDrawer } from '@magento/peregrine/lib/store/actions/app';
import CategoryContent from './categoryContent';

const mapDispatchToProps = dispatch => ({
    openDrawer: () => dispatch(toggleDrawer('filter'))
});

export default connect(
    null,
    mapDispatchToProps
)(CategoryContent);
