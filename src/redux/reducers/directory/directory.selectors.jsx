import { createSelector} from 'reselect'
import directory from '../../../component/directory/directory'

const selectDirectory= state => state.directory

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)