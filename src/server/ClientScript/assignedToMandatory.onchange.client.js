function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return;
    var state = g_form.getValue('state');
    var currentAG = g_form.getValue('assignment_group');
    var originalAG = g_scratchpad.originalAG || currentAG;
    g_form.setMandatory('assigned_to', state === '2' && currentAG === originalAG);
}
