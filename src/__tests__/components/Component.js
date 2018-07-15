import React from 'react';
import {shallow} from 'enzyme';

import general_components from '@likethemammal/general-components'

const shared = general_components.__tests__._shared.tests

import SomeComponent from '../../components/App.unit';

describe('SomeComponent', () => {

    const component = shallow(
        <SomeComponent />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])
})