function onLoad() {
    g_form.setMandatory('assigned_to', g_form.getValue('state') === '2');
}
