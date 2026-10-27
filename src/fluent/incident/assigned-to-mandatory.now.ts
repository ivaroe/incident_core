import '@servicenow/sdk/global'
import { BusinessRule, ClientScript } from '@servicenow/sdk/core'

// assigned_to is mandatory when state is In Progress (2),
// unless the assignment group was just changed — the new group
// gets one save to pick an assignee before the rule kicks in.

BusinessRule({
    $id: Now.ID['br_set_original_ag'],
    name: 'x_1910472_inc_core_set_original_ag',
    table: 'incident',
    when: 'display',
    active: true,
    description: 'Passes the original assignment group to client scripts via g_scratchpad',
    script: Now.include('../../server/BusinessRule/setOriginalAG.server.js'),
})

ClientScript({
    $id: Now.ID['cs_assigned_mandatory_load'],
    name: 'x_1910472_inc_core_assigned_to_mandatory_onload',
    table: 'incident',
    type: 'onLoad',
    active: true,
    global: true,
    uiType: 'all',
    appliesExtended: false,
    script: Now.include('../../server/ClientScript/assignedToMandatory.onload.client.js'),
})

ClientScript({
    $id: Now.ID['cs_assigned_mandatory_state'],
    name: 'x_1910472_inc_core_assigned_to_mandatory_state',
    table: 'incident',
    type: 'onChange',
    field: 'state',
    active: true,
    global: true,
    uiType: 'all',
    appliesExtended: false,
    script: Now.include('../../server/ClientScript/assignedToMandatory.onchange.client.js'),
})

ClientScript({
    $id: Now.ID['cs_assigned_mandatory_ag'],
    name: 'x_1910472_inc_core_assigned_to_mandatory_ag',
    table: 'incident',
    type: 'onChange',
    field: 'assignment_group',
    active: true,
    global: true,
    uiType: 'all',
    appliesExtended: false,
    script: Now.include('../../server/ClientScript/assignedToMandatory.onchange.client.js'),
})
